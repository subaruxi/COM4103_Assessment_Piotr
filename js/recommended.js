// Fills the "Recommended Projects" row on the profile page with a random
// selection of projects from project-data.js. A new selection is picked
// every time the page loads.

var RECOMMENDED_COUNT = 6;

// Fisher-Yates shuffle: gives every order an equal chance
function shuffle(list) {
    for (var i = list.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = list[i];
        list[i] = list[j];
        list[j] = temp;
    }
    return list;
}

function buildRecommendedTile(id, project) {
    var link = document.createElement("a");
    link.className = "tile";
    link.href = "project-detail.html?id=" + id;

    var image = document.createElement("img");
    image.src = project.image;
    image.alt = project.alt;

    var category = document.createElement("p");
    category.textContent = project.category;

    var title = document.createElement("h4");
    title.textContent = project.title;

    var list = document.createElement("ul");
    [project.difficulty, project.time, "£" + project.price].forEach(function (detail) {
        var item = document.createElement("li");
        item.textContent = detail;
        list.appendChild(item);
    });

    link.append(image, category, title, list);
    return link;
}

document.addEventListener("DOMContentLoaded", function () {
    var row = document.querySelector("#recommended-projects .tile-row");
    if (!row || typeof PROJECTS === "undefined") {
        return;
    }

    // Don't recommend projects the user has already saved
    var ids = Object.keys(PROJECTS).filter(function (id) {
        return typeof isSaved !== "function" || !isSaved(PROJECTS[id].title);
    });

    shuffle(ids).slice(0, RECOMMENDED_COUNT).forEach(function (id) {
        row.appendChild(buildRecommendedTile(id, PROJECTS[id]));
    });
});
