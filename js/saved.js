// Lets a logged-in user save projects and shows them on their profile page.
//
// There is no server, so saved projects are kept in the browser's localStorage.
// Each user gets their own list, stored under a key that includes their email
// (the login page puts the email in localStorage as "userEmail").

function getCurrentUser() {
    return localStorage.getItem("userEmail");
}

function getStorageKey() {
    return "savedProjects_" + getCurrentUser();
}

// Returns the list of saved projects for the logged-in user
function getSavedProjects() {
    try {
        var stored = localStorage.getItem(getStorageKey());
        return stored ? JSON.parse(stored) : [];
    } catch (error) {
        return [];
    }
}

function setSavedProjects(projects) {
    try {
        localStorage.setItem(getStorageKey(), JSON.stringify(projects));
    } catch (error) {
        alert("Sorry, your saved projects couldn't be stored in this browser.");
    }
}

function removeSavedProject(title) {
    var projects = getSavedProjects().filter(function (saved) {
        return saved.title !== title;
    });
    setSavedProjects(projects);
}

function isSaved(title) {
    return getSavedProjects().some(function (project) {
        return project.title === title;
    });
}

// Reads everything needed to rebuild a tile on the profile page
function readProjectFromTile(article) {
    var image = article.querySelector("img");
    var details = [];
    article.querySelectorAll("li").forEach(function (item) {
        details.push(item.textContent);
    });

    return {
        title: article.querySelector("h4").textContent,
        category: article.querySelector("p").textContent,
        image: image.getAttribute("src"),
        alt: image.getAttribute("alt"),
        details: details
    };
}

// Outline bookmark = not saved, filled bookmark = saved
function updateButton(button, saved) {
    var icon = button.querySelector("img");
    icon.src = saved ? "img/bookmark-fill.svg" : "img/bookmark.svg";
    button.title = saved ? "Saved" : "Save";
    button.setAttribute("aria-pressed", saved);
}

// ---------- Projects page: add a Save button to every tile ----------
function addSaveButtons() {
    document.querySelectorAll(".project-tile").forEach(function (article) {
        var project = readProjectFromTile(article);

        var button = document.createElement("button");
        button.type = "button";
        button.className = "save-button";
        button.setAttribute("aria-label", "Save " + project.title);

        // The button's text is in aria-label, so the icon itself has empty alt text
        var icon = document.createElement("img");
        icon.alt = "";
        button.appendChild(icon);

        updateButton(button, getCurrentUser() !== null && isSaved(project.title));

        button.addEventListener("click", function () {
            // Saving needs an account, so send logged-out users to the login page
            if (getCurrentUser() === null) {
                window.location.href = "log_in.html";
                return;
            }

            if (isSaved(project.title)) {
                // Already saved, so clicking again removes it
                removeSavedProject(project.title);
                updateButton(button, false);
            } else {
                var projects = getSavedProjects();
                projects.push(project);
                setSavedProjects(projects);
                updateButton(button, true);
            }
        });

        article.appendChild(button);
    });
}

// ---------- Profile page: show the saved projects ----------
function buildTile(project) {
    var link = document.createElement("a");
    link.className = "tile";
    link.href = "";

    var image = document.createElement("img");
    image.src = project.image;
    image.alt = project.alt;

    var category = document.createElement("p");
    category.textContent = project.category;

    var title = document.createElement("h4");
    title.textContent = project.title;

    var list = document.createElement("ul");
    project.details.forEach(function (detail) {
        var item = document.createElement("li");
        item.textContent = detail;
        list.appendChild(item);
    });

    link.append(image, category, title, list);

    // A button can't go inside a link, so the tile and its Remove button
    // sit side by side inside a wrapper
    var wrapper = document.createElement("div");
    wrapper.className = "saved-tile";

    var removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "remove-button";
    removeButton.textContent = "Remove";
    removeButton.setAttribute("aria-label", "Remove " + project.title + " from saved projects");

    removeButton.addEventListener("click", function () {
        removeSavedProject(project.title);
        wrapper.remove();
        updateEmptyMessage();
    });

    wrapper.append(link, removeButton);
    return wrapper;
}

// Shows the "You haven't saved any projects yet" message when the row is empty
function updateEmptyMessage() {
    var message = document.getElementById("no-saved");
    var tileCount = document.querySelectorAll("#saved-projects .saved-tile").length;
    message.hidden = tileCount > 0;
}

function showSavedProjects(section) {
    var row = section.querySelector(".tile-row");

    // Newest saves go first, at the start of the row
    getSavedProjects().forEach(function (project) {
        row.prepend(buildTile(project));
    });

    updateEmptyMessage();
}

document.addEventListener("DOMContentLoaded", function () {
    addSaveButtons();

    var savedSection = document.getElementById("saved-projects");
    if (savedSection) {
        showSavedProjects(savedSection);
    }
});
