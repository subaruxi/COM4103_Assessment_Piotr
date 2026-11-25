// Marks the navigation link for the page that is currently open,
// so CSS can underline it.
document.addEventListener("DOMContentLoaded", function () {
    var currentPage = window.location.pathname.split("/").pop() || "home_page.html";

    document.querySelectorAll("#nav-menu li > a:not(.log-in)").forEach(function (link) {
        var linkPage = link.getAttribute("href");
        if (linkPage === currentPage) {
            link.setAttribute("aria-current", "page");
        }
    });

    // When someone is logged in, swap the "Log In" link for
    // "My Profile" and "Log Out" links.
    // The login page stores the user's email in localStorage as "userEmail".
    var loginLink = document.querySelector("#nav-menu .log-in");
    var loggedIn = localStorage.getItem("userEmail") !== null;

    // Saved projects belong to an account, so the "Saved" link
    // goes to the login page for anyone who isn't logged in
    if (!loggedIn) {
        document.querySelectorAll('#nav-menu a[href$="#saved-projects"]').forEach(function (link) {
            link.href = "log_in.html";
        });
    }

    if (loginLink && loggedIn) {
        loginLink.remove();
        var navArea = document.querySelector("#nav-menu .search-bar");

        var profileLink = document.createElement("a");
        profileLink.className = "log-in";
        profileLink.href = "profile_page.html";
        profileLink.textContent = "My Profile";
        if (currentPage === "profile_page.html") {
            profileLink.setAttribute("aria-current", "page");
        }
        navArea.appendChild(profileLink);

        var logOutLink = document.createElement("a");
        logOutLink.className = "log-in";
        logOutLink.href = "home_page.html";
        logOutLink.textContent = "Log Out";

        // Forget who is logged in. Their saved projects are kept,
        // so they come back next time they log in with the same email.
        logOutLink.addEventListener("click", function () {
            localStorage.removeItem("userEmail");
            localStorage.removeItem("currentUser");
            localStorage.removeItem("displayName");
        });

        navArea.appendChild(logOutLink);
    }

    // Menu button for phones and tablets.
    // CSS only shows it on small screens, where the menu starts hidden.
    var nav = document.querySelector(".navigation-pane");
    var menu = document.getElementById("nav-menu");

    var menuButton = document.createElement("button");
    menuButton.className = "menu-toggle";
    menuButton.textContent = "☰";
    menuButton.setAttribute("aria-label", "Open menu");
    menuButton.setAttribute("aria-controls", "nav-menu");
    menuButton.setAttribute("aria-expanded", "false");
    nav.insertBefore(menuButton, menu);

    menuButton.addEventListener("click", function () {
        var isOpen = nav.classList.toggle("menu-open");
        menuButton.textContent = isOpen ? "✕" : "☰";
        menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
        menuButton.setAttribute("aria-expanded", isOpen);
    });
});
