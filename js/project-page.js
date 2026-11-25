// Fills in project-detail.html with one project from project-data.js.
// The project is chosen by the link, e.g. project-detail.html?id=regrout-shower
//
// This runs as soon as the page has loaded (it's a "defer" script), before
// gallery.js sets up the photos, so the gallery sees this project's photos.

var projectId = new URLSearchParams(window.location.search).get("id") || "regrout-shower";
var project = PROJECTS[projectId];

// Small helper: makes an element with some text in it
function makeElement(tag, text) {
    var element = document.createElement(tag);
    if (text !== undefined) {
        element.textContent = text;
    }
    return element;
}

// Today's date written like "24 Nov 2026"
function todaysDate() {
    return new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

// ---------- Header ----------
function fillHeader() {
    document.title = project.title + " | HomeHub";
    document.getElementById("project-title").textContent = project.title;
    document.getElementById("author").textContent = "By " + project.author;
    document.getElementById("date").textContent = "Posted " + project.date;
    document.getElementById("updated").textContent = "Updated: " + project.updated;
    document.getElementById("project-difficulty").textContent = project.difficulty;
    document.getElementById("project-time").textContent = project.time;
    document.getElementById("project-cost").textContent = "£" + project.price;
}

// ---------- Photos ----------
// There are only a few stock photos for now, so each project shows its own
// photo first and then the others. Swap these for real step photos later.
var STOCK_PHOTOS = [
    { src: "img/shower-regrout.jpg", alt: "Bathroom shower" },
    { src: "img/raised-bed.jpeg", alt: "Raised garden beds" },
    { src: "img/feature-wall.jpg", alt: "Painted bedroom wall" },
    { src: "img/alcove-shelving.jpg", alt: "Alcove shelving" },
    { src: "img/hero-finished-project.jpg", alt: "Finished room" }
];

function fillPhotos() {
    var photos = [{ src: project.image, alt: project.alt }];
    STOCK_PHOTOS.forEach(function (photo) {
        if (photo.src !== project.image) {
            photos.push(photo);
        }
    });

    var thumbArea = document.querySelector(".photo-thumbs");
    thumbArea.innerHTML = "";
    photos.forEach(function (photo, index) {
        var thumb = makeElement("img");
        thumb.src = photo.src;
        thumb.alt = photo.alt;
        if (index === 0) {
            thumb.className = "active";
        }
        thumbArea.appendChild(thumb);
    });

    document.getElementById("main-photo").src = project.image;
    document.getElementById("main-photo").alt = project.alt;
    document.getElementById("lightbox-photo").src = project.image;
    document.getElementById("photo-counter").textContent = "Photo 1 of " + photos.length + " (click to enlarge)";
}

// ---------- Steps ----------
function fillSteps() {
    var list = document.getElementById("step-list");
    project.steps.forEach(function (step, index) {
        var stepBox = makeElement("div");
        stepBox.className = "step";
        stepBox.id = "step-" + (index + 1);
        stepBox.appendChild(makeElement("h4", "Step " + (index + 1) + ": " + step.title));
        stepBox.appendChild(makeElement("p", step.text));
        list.appendChild(stepBox);
    });
}

// ---------- Contents table ----------
function fillContents() {
    var section = document.querySelector(".contents-table");
    section.appendChild(makeElement("h3", "Contents"));

    var links = [
        { text: "Photos", target: "photos-heading" },
        { text: "Steps", target: "steps" },
        { text: "Tools & Materials", target: "cost-materials" },
        { text: "Cost Calculator", target: "cost-calculator" },
        { text: "Questions", target: "questions" },
        { text: "Comments", target: "comments" }
    ];

    var list = makeElement("ol");
    links.forEach(function (link) {
        var item = makeElement("li");
        var anchor = makeElement("a", link.text);
        anchor.href = "#" + link.target;
        item.appendChild(anchor);
        list.appendChild(item);
    });
    section.appendChild(list);
}

// ---------- Tools & materials ----------
function fillMaterials() {
    var section = document.querySelector(".cost-materials");
    section.appendChild(makeElement("h3", "Tools & Materials"));

    var table = makeElement("table");
    table.className = "materials-table";
    project.materials.forEach(function (material) {
        var row = makeElement("tr");
        row.appendChild(makeElement("td", material.name));
        row.appendChild(makeElement("td", "£" + material.price));
        table.appendChild(row);
    });

    var totalRow = makeElement("tr");
    totalRow.className = "total-row";
    totalRow.appendChild(makeElement("td", "Total"));
    totalRow.appendChild(makeElement("td", "£" + project.price));
    table.appendChild(totalRow);

    section.appendChild(table);
}

// ---------- Cost calculator ----------
// Material prices are for the size in project.calculator.amount.
// Anything marked "scales" goes up or down with the size the user types in;
// tools stay the same price.
function fillCalculator() {
    var calc = project.calculator;
    var section = document.querySelector(".cost-calculator");
    section.appendChild(makeElement("h3", "Cost Calculator"));

    var label = makeElement("label", calc.label + " (" + calc.unit + ")");
    label.htmlFor = "calc-amount";

    var input = makeElement("input");
    input.type = "number";
    input.id = "calc-amount";
    input.min = "0";
    input.step = "0.1";
    input.value = calc.amount;

    var result = makeElement("p");
    result.className = "calc-result";

    var note = makeElement("p", "Prices are based on " + calc.amount + " " + calc.unit + ". Tools cost the same whatever the size.");
    note.className = "calc-note";

    function updateCost() {
        var amount = Number(input.value) || 0;
        var total = 0;
        project.materials.forEach(function (material) {
            if (material.scales) {
                total += material.price * amount / calc.amount;
            } else {
                total += material.price;
            }
        });
        result.textContent = "Estimated cost: £" + Math.round(total);
    }

    input.addEventListener("input", updateCost);
    updateCost();

    section.append(label, input, result, note);
}

// ---------- Questions ----------
function fillQuestions() {
    var section = document.querySelector(".question-section");
    section.appendChild(makeElement("h3", "Questions"));

    // <details> opens and closes by itself when the question is clicked
    project.questions.forEach(function (item) {
        var details = makeElement("details");
        details.appendChild(makeElement("summary", item.question));
        details.appendChild(makeElement("p", item.answer));
        section.appendChild(details);
    });

    var askLink = makeElement("a", "Ask a question in Q&A");
    askLink.href = "qa.html";
    askLink.className = "ask-link";
    section.appendChild(askLink);
}

// ---------- Comments ----------
// Example comments come from project-data.js. Comments the user writes are
// kept in localStorage under "comments_<project id>".
function getUserComments() {
    try {
        return JSON.parse(localStorage.getItem("comments_" + projectId)) || [];
    } catch (error) {
        return [];
    }
}

function showComments() {
    var list = document.getElementById("comment-list");
    list.innerHTML = "";

    // Newest first: the user's own comments, then the examples
    var allComments = getUserComments().concat(project.comments);
    allComments.forEach(function (comment) {
        var box = makeElement("div");
        box.className = "comment";
        var heading = makeElement("p");
        heading.className = "comment-author";
        heading.append(makeElement("strong", comment.name), " · " + comment.date);
        box.append(heading, makeElement("p", comment.text));
        list.appendChild(box);
    });
}

function setUpComments() {
    var input = document.getElementById("comment-input");

    document.getElementById("comment-submit").addEventListener("click", function () {
        var text = input.value.trim();
        if (text === "") {
            return;
        }
        var name = localStorage.getItem("displayName") || localStorage.getItem("currentUser") || "Guest";
        var comments = getUserComments();
        comments.unshift({ name: name, date: todaysDate(), text: text });
        localStorage.setItem("comments_" + projectId, JSON.stringify(comments));

        input.value = "";
        showComments();
    });

    showComments();
}

// ---------- Save / Helpful / Share / Report buttons ----------
function setUpButtons() {
    // Save - uses the same saved list as the bookmarks on the projects page (saved.js)
    var saveButton = document.getElementById("save-button");
    var savedProject = {
        title: project.title,
        category: project.category,
        image: project.image,
        alt: project.alt,
        details: [project.difficulty, project.time, "£" + project.price],
        link: "project-detail.html?id=" + projectId
    };

    function updateSaveButton() {
        var saved = getCurrentUser() !== null && isSaved(project.title);
        saveButton.textContent = saved ? "Saved" : "Save";
        saveButton.classList.toggle("active", saved);
    }

    saveButton.addEventListener("click", function () {
        if (getCurrentUser() === null) {
            window.location.href = "log_in.html";
            return;
        }
        if (isSaved(project.title)) {
            removeSavedProject(project.title);
        } else {
            var projects = getSavedProjects();
            projects.push(savedProject);
            setSavedProjects(projects);
        }
        updateSaveButton();
    });
    updateSaveButton();

    // Helpful - each browser can mark a project helpful once
    var helpfulButton = document.getElementById("helpful-button");
    var helpfulKey = "helpful_" + projectId;

    function updateHelpfulButton() {
        var marked = localStorage.getItem(helpfulKey) === "yes";
        var count = project.helpful + (marked ? 1 : 0);
        helpfulButton.textContent = "Helpful (" + count + ")";
        helpfulButton.classList.toggle("active", marked);
    }

    helpfulButton.addEventListener("click", function () {
        if (localStorage.getItem(helpfulKey) === "yes") {
            localStorage.removeItem(helpfulKey);
        } else {
            localStorage.setItem(helpfulKey, "yes");
        }
        updateHelpfulButton();
    });
    updateHelpfulButton();

    // Share - copies the page link
    var shareButton = document.getElementById("share-button");
    shareButton.addEventListener("click", function () {
        navigator.clipboard.writeText(window.location.href).then(function () {
            shareButton.textContent = "Link copied!";
            setTimeout(function () {
                shareButton.textContent = "Share";
            }, 2000);
        }).catch(function () {
            // Some browsers block copying, so show the link for the user to copy
            window.prompt("Copy this link:", window.location.href);
        });
    });

    // Report
    var reportButton = document.getElementById("report-button");
    reportButton.addEventListener("click", function () {
        if (confirm("Report this project to the HomeHub team for review?")) {
            reportButton.textContent = "Reported";
            reportButton.disabled = true;
        }
    });
}

// ---------- Run everything ----------
if (project) {
    fillHeader();
    fillPhotos();
    fillSteps();
    fillContents();
    fillMaterials();
    fillCalculator();
    fillQuestions();
    setUpComments();
    setUpButtons();
} else {
    document.getElementById("project-title").textContent = "Project not found";
    document.querySelector(".project-content").hidden = true;
}
