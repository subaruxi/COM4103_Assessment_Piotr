// Shows, hides and orders the project tiles on projects.html based on the
// category tabs, sort dropdown, difficulty checkboxes, time checkboxes and budget slider.
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("filter-table");
    var budgetSlider = document.getElementById("budget");
    var priceOutput = document.getElementById("priceOutput");
    var grid = document.querySelector(".project-grid");
    var noResults = document.getElementById("no-results");
    var loadMoreButton = document.getElementById("load-more");
    var categoryTabs = document.querySelectorAll(".category-tab");
    var sortSelect = document.getElementById("sort-order");

    // Turn the tiles into a normal array so they can be sorted.
    // The original position is remembered so "Featured" can put them back.
    var tiles = Array.from(document.querySelectorAll(".project-tile"));
    tiles.forEach(function (tile, index) {
        tile.dataset.order = index;
    });

    // How many tiles to show at first, and how many more each "Load More" click adds
    var PAGE_SIZE = 6;
    var visibleLimit = PAGE_SIZE;

    var selectedCategory = "All";

    // Used to sort by difficulty, easiest first
    var DIFFICULTY_RANK = { Beginner: 1, Intermediate: 2, Advanced: 3 };

    // The category is the small line of text above the title, e.g. "Garden"
    function getCategory(tile) {
        return tile.querySelector(".tile p").textContent.trim();
    }

    // Turns the time shown on a tile ("90 Mins", "4 Hours", "2 Days") into minutes
    function getMinutes(tile) {
        var timeText = tile.querySelectorAll(".tile li")[1].textContent;
        var amount = parseFloat(timeText);
        if (timeText.includes("Min")) {
            return amount;
        }
        if (timeText.includes("Hour")) {
            return amount * 60;
        }
        // Days count as an 8 hour working day
        return amount * 8 * 60;
    }

    // Returns the ids of the ticked checkboxes inside one filter section,
    // e.g. ["Beginner", "Advanced"]
    function getTicked(sectionSelector) {
        var ticked = [];
        form.querySelectorAll(sectionSelector + " input[type='checkbox']").forEach(function (box) {
            if (box.checked) {
                ticked.push(box.id);
            }
        });
        return ticked;
    }

    // Puts the tiles in the order chosen in the "Sort by" dropdown
    function sortTiles() {
        var sortBy = sortSelect.value;

        tiles.sort(function (a, b) {
            if (sortBy === "price-low") {
                return Number(a.dataset.price) - Number(b.dataset.price);
            }
            if (sortBy === "price-high") {
                return Number(b.dataset.price) - Number(a.dataset.price);
            }
            if (sortBy === "time-short") {
                return getMinutes(a) - getMinutes(b);
            }
            if (sortBy === "difficulty") {
                return DIFFICULTY_RANK[a.dataset.difficulty] - DIFFICULTY_RANK[b.dataset.difficulty];
            }
            // "Featured" - the order they're written in the HTML
            return Number(a.dataset.order) - Number(b.dataset.order);
        });

        // Appending an element that's already on the page moves it,
        // so this rearranges the grid into the sorted order
        tiles.forEach(function (tile) {
            grid.appendChild(tile);
        });
    }

    function applyFilters() {
        var difficulties = getTicked(".difficulty-section");
        var times = getTicked(".time-section");
        var maxPrice = Number(budgetSlider.value);
        var matchCount = 0;

        priceOutput.value = budgetSlider.value;

        // Tell the CSS how far along the slider is, so it can colour the track up to the handle
        var percent = (budgetSlider.value - budgetSlider.min) / (budgetSlider.max - budgetSlider.min) * 100;
        budgetSlider.style.setProperty("--fill", percent + "%");

        tiles.forEach(function (tile) {
            // If nothing is ticked in a section, that section doesn't filter anything out
            var categoryMatches = selectedCategory === "All" || getCategory(tile) === selectedCategory;
            var difficultyMatches = difficulties.length === 0 || difficulties.includes(tile.dataset.difficulty);
            var timeMatches = times.length === 0 || times.includes(tile.dataset.time);
            var priceMatches = Number(tile.dataset.price) <= maxPrice;

            if (categoryMatches && difficultyMatches && timeMatches && priceMatches) {
                matchCount++;
                // Only show this match if it fits within the current limit
                tile.hidden = matchCount > visibleLimit;
            } else {
                tile.hidden = true;
            }
        });

        noResults.hidden = matchCount > 0;
        // Hide the button once every matching tile is already on screen
        loadMoreButton.hidden = matchCount <= visibleLimit;
    }

    // Changing a filter starts the list again from the first 6 results
    function restartFilters() {
        visibleLimit = PAGE_SIZE;
        applyFilters();
    }

    // "input" fires whenever a checkbox is ticked/unticked or the slider moves
    form.addEventListener("input", restartFilters);

    // "Clear All" resets the form, but the browser only puts the inputs back
    // after the reset event has run, so wait a moment before re-filtering
    form.addEventListener("reset", function () {
        setTimeout(restartFilters, 0);
    });

    // Each click shows the next 6 matching tiles
    loadMoreButton.addEventListener("click", function () {
        visibleLimit += PAGE_SIZE;
        applyFilters();
    });

    // Category tabs - only one can be selected at a time
    categoryTabs.forEach(function (tab) {
        tab.addEventListener("click", function () {
            categoryTabs.forEach(function (otherTab) {
                otherTab.classList.remove("active");
                otherTab.setAttribute("aria-pressed", "false");
            });
            tab.classList.add("active");
            tab.setAttribute("aria-pressed", "true");

            selectedCategory = tab.dataset.category;
            restartFilters();
        });
    });

    sortSelect.addEventListener("change", function () {
        sortTiles();
        restartFilters();
    });

    applyFilters();
});
