// Q&A page: shows questions with their answers, and lets people post
// new questions and answers. Everything is kept in localStorage, so
// new posts are still there after a refresh.

// Questions shown the first time the page is opened
var STARTER_QUESTIONS = [
    {
        title: "What's the best way to fix a squeaky floorboard under carpet?",
        category: "Flooring",
        author: "Jess T",
        date: "18 Nov 2026",
        details: "One board in the hallway creaks every time someone walks over it. I'd rather not lift the carpet if I can help it.",
        answers: [
            { author: "FloorFixFiona", date: "18 Nov 2026", text: "You can buy a 'squeak fix' kit that screws through the carpet into the joist and then snaps the screw head off below the surface. Find the joist with a stud detector first." },
            { author: "Olly B", date: "19 Nov 2026", text: "Used one of those kits last year and it worked a treat. Took about ten minutes." }
        ]
    },
    {
        title: "Can I paint over gloss without sanding it first?",
        category: "Decorating",
        author: "Tariq",
        date: "15 Nov 2026",
        details: "I want to repaint my skirting boards white. They're currently a yellowing gloss.",
        answers: [
            { author: "ColourByClaire", date: "15 Nov 2026", text: "You really need to give it a light sand, or use a liquid deglosser. Otherwise the new paint won't grip and it'll peel off." }
        ]
    },
    {
        title: "Which wall plugs should I use for shelves on a plasterboard wall?",
        category: "Storage",
        author: "Zara",
        date: "12 Nov 2026",
        details: "I'm putting up two shelves for books. The wall sounds hollow when I knock on it.",
        answers: [
            { author: "ChiselAndCraft", date: "12 Nov 2026", text: "For books, use metal cavity fixings (spring toggles or hollow wall anchors), or better still, screw into the timber studs behind the plasterboard." },
            { author: "Marcus J", date: "13 Nov 2026", text: "Second the studs. A cheap stud finder will save you a lot of hassle." }
        ]
    },
    {
        title: "Is it worth sealing a new patio?",
        category: "Garden",
        author: "Paula",
        date: "9 Nov 2026",
        details: "We've just had a sandstone patio laid. Do we need to seal it, and what with?",
        answers: []
    }
];

// Loads the saved questions, or the starter ones if nothing has been posted yet
function loadQuestions() {
    try {
        return JSON.parse(localStorage.getItem("qaQuestions")) || STARTER_QUESTIONS;
    } catch (error) {
        return STARTER_QUESTIONS;
    }
}

function saveQuestions() {
    localStorage.setItem("qaQuestions", JSON.stringify(questions));
}

// The logged-in user's name, or "Guest"
function currentName() {
    return localStorage.getItem("displayName") || localStorage.getItem("currentUser") || "Guest";
}

// Today's date written like "25 Nov 2026"
function todaysDate() {
    return new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

// Small helper: makes an element with a class and some text
function makeElement(tag, className, text) {
    var element = document.createElement(tag);
    if (className) {
        element.className = className;
    }
    if (text) {
        element.textContent = text;
    }
    return element;
}

var questions = loadQuestions();

// Draws every question, its answers and its answer box
function showQuestions() {
    var list = document.getElementById("questions");
    list.innerHTML = "";

    questions.forEach(function (question, index) {
        var card = makeElement("article", "qa-box question-card");

        card.appendChild(makeElement("span", "qa-tag", question.category));
        card.appendChild(makeElement("h4", "", question.title));
        card.appendChild(makeElement("p", "qa-meta", "Asked by " + question.author + " · " + question.date));
        card.appendChild(makeElement("p", "", question.details));

        // Answers
        var answerCount = question.answers.length;
        card.appendChild(makeElement("h5", "", answerCount + (answerCount === 1 ? " Answer" : " Answers")));

        question.answers.forEach(function (answer) {
            var answerBox = makeElement("div", "answer");
            answerBox.appendChild(makeElement("p", "qa-meta", answer.author + " · " + answer.date));
            answerBox.appendChild(makeElement("p", "", answer.text));
            card.appendChild(answerBox);
        });

        // Box for adding an answer
        var answerInput = makeElement("textarea");
        answerInput.placeholder = "Write your answer";
        answerInput.setAttribute("aria-label", "Your answer to: " + question.title);

        var answerButton = makeElement("button", "", "Post Answer");
        answerButton.addEventListener("click", function () {
            var text = answerInput.value.trim();
            if (text === "") {
                return;
            }
            questions[index].answers.push({ author: currentName(), date: todaysDate(), text: text });
            saveQuestions();
            showQuestions();
        });

        card.appendChild(answerInput);
        card.appendChild(answerButton);
        list.appendChild(card);
    });
}

// Posting a new question puts it at the top of the list
document.getElementById("question-form").addEventListener("submit", function (event) {
    event.preventDefault();

    questions.unshift({
        title: document.getElementById("question-title").value.trim(),
        category: document.getElementById("question-category").value,
        author: currentName(),
        date: todaysDate(),
        details: document.getElementById("question-details").value.trim(),
        answers: []
    });
    saveQuestions();
    showQuestions();
    this.reset();
});

showQuestions();
