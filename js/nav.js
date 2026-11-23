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
});
