// Stores the tips a logged-in user has shared and shows them on their profile page.
//
// There is no server, so tips are kept in the browser's localStorage, one list
// per user (the login page puts the email in localStorage as "userEmail").
//
// The tips page should load this file and call addTip() when the form is submitted:
//
//   addTip({
//       title: "Lift mould from grout with a baking soda paste",
//       category: "Bathroom",
//       difficulty: "Beginner",
//       time: "30 Mins",
//       price: 5,
//       image: "img/shower-regrout.jpg",   // optional
//       alt: "Cleaned shower grout",       // optional
//       link: "tip.html?id=..."            // optional
//   });

function getTipsStorageKey() {
    return "tips_" + localStorage.getItem("userEmail");
}

// Returns the list of tips the logged-in user has shared
function getTips() {
    try {
        var stored = localStorage.getItem(getTipsStorageKey());
        return stored ? JSON.parse(stored) : [];
    } catch (error) {
        return [];
    }
}

function setTips(tips) {
    try {
        localStorage.setItem(getTipsStorageKey(), JSON.stringify(tips));
        return true;
    } catch (error) {
        alert("Sorry, your tip couldn't be stored in this browser.");
        return false;
    }
}

// Adds a tip for the logged-in user. Returns false if nobody is logged in.
function addTip(tip) {
    if (localStorage.getItem("userEmail") === null) {
        return false;
    }
    var tips = getTips();
    tip.date = tip.date || new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
    tips.push(tip);
    return setTips(tips);
}

// ---------- Profile page: show the user's tips ----------
function buildTipTile(tip) {
    var link = document.createElement("a");
    link.className = "tile";
    link.href = tip.link || "#";

    if (tip.image) {
        var image = document.createElement("img");
        image.src = tip.image;
        image.alt = tip.alt || "";
        link.appendChild(image);
    }

    var category = document.createElement("p");
    category.textContent = tip.category;

    var title = document.createElement("h4");
    title.textContent = tip.title;

    var list = document.createElement("ul");
    [tip.difficulty, tip.time, tip.price !== undefined ? "£" + tip.price : null].forEach(function (detail) {
        if (detail) {
            var item = document.createElement("li");
            item.textContent = detail;
            list.appendChild(item);
        }
    });

    link.append(category, title, list);
    return link;
}

document.addEventListener("DOMContentLoaded", function () {
    var section = document.getElementById("my-tips-section");
    if (!section) {
        return;
    }

    var row = section.querySelector(".tile-row");
    var tips = getTips();

    // Newest tips first
    tips.slice().reverse().forEach(function (tip) {
        row.appendChild(buildTipTile(tip));
    });

    document.getElementById("no-tips").hidden = tips.length > 0;

    var count = document.getElementById("tips-count");
    if (count) {
        count.textContent = tips.length + (tips.length === 1 ? " Tip Shared" : " Tips Shared");
    }
});
