# HomeHub: Front-End Prototype

**Module:** COM4113 Tech Stack | **Assessment:** 1, Tech Stack Proposal (30%) | **Academic year:** 2026/27<br>
**Student:** Piotr Eksterowicz 2600823<br>
**Repository:** https://github.com/subaruxi/COM4103_Assessment_Piotr<br>
**Deadline:** Wednesday 25 November 2026



---

## 1. Project overview

HomeHub is a community-driven platform where homeowners and residents share home improvement ideas, DIY tips, life hacks and project experiences. This repository contains a responsive front-end prototype built with HTML, CSS and JavaScript using mock data. There is **no back end**; all data is mock data held in the browser, and nothing is saved permanently (see section 9).

TODO (2-4 sentences): who the users are, the problem HomeHub solves, and the user journey your MVP supports (e.g. *browse by category → search/filter → open a project → see costs → save it → ask a question*).

---

## 2. Selected MVP features
|ID   |Description|
|-----|-----------|
| F01 | Homepage with featured tips and projects
| F02 | Category-based browsing (3+ categories) 
| F03 | Keyword search 
| F04 | Filtering and sorting 
| F05 | Detailed project page 
| F06 | Submit a tip or guide (validated, with preview) 
| F07 | Photo gallery with working controls 
| F08 | Responsive desktop and mobile navigation 
| F09 | Registration and login pages (mock) 
| F10 | User profile page 
| F11 | Comments and discussion 
| F12 | Ratings, likes or helpful votes 
| F13 | About and Contact pages (validated form) 
| F14 | Before-and-after image comparison 
| F15 | Cost and materials breakdown 
| F16 | Bookmark or save a project 
| F17 | Ask a question and receive answers 
| F19 | Accessibility and safety guidance 
| F20 | Community moderation and reporting
| F21 | Rule-based personalised recommendations 

**Post-MVP enhancements**

| ID  |           Enhancement               | Status  | Evidence | Short test |
|-----|-------------------------------------|---------|----------|------------|
| PM2 | Enhanced Bookmarking                | Planned |   TODO   |    TODO    |
| PM4 | Interactive project cost calculator | Planned |   TODO   |    TODO    |
| PM5 | Advanced Discovery                  | Planned |   TODO   |    TODO    |

**Feature count:** 21 MVP's and 3 PM's

### Substitutions and changes
TODO: record any feature you drop or replace, the date, and why. The brief requires every substitution to be recorded and justified.

| Date | Removed | Replaced with | Justification |
|------|---------|---------------|---------------|
| TODO | | | |

---

## 3. Installation and usage

**Requirements:** a modern browser (TODO list the ones you tested). No build step or server is needed.

1. Download or clone the repository: `git clone TODO-repo-url`
2. Open `index.html` in a browser, or use the VS Code *Live Server* extension.
3. TODO: describe how to move around the prototype and any demo logins.

**Folder structure**

```
index.html
/img

/css
    style.css
/js
    script.js
README.md
```

TODO: adjust to match your final structure.

---

## 4. Project plan

[Gannt Chart Start](img/gantt_chart_start.png)

[Gannt Chart Final](img/)

---

## 5. Comparison of existing platforms

TODO: compare 4-5 home improvement or DIY platforms (<what they offer, the technology if you can find it, and their gaps), then say what HomeHub does differently.

| Platform           |                 Key features                   | Strengths | Gaps / weaknesses | Source |
|--------------------|------------------------------------------------|-----------|-------------------|--------|
|B&Q Ideas and Advice|<ul><li>Categories sorted out based on areas in a house<br><li>Each category has subcategories.<br><li>Search Bar.<br><li>A calculator is usable for cost purposes and how much of a product would be needed for a project<br><li>Guides for different types of equipment.<br><li>Health and safety guides.<br><li>Users can submit their projects to their social media page and tag @B&Q. |<ul><li>Easily Categorised so the user spends less time going through different sections<br><li>Step by step instructions make it easier to manage a complex task and reduces error happening in a project<br><li>Related Products that can show the user what they need to buy to do that task<br><li>Guides show what tools are needed for the job |<ul><li>Search bar only used for products so user has to follow the categories instead<br><li>Users can't rate or give feedback to others' creations<br><li>Guides don't show the difficulty level |(B&Q, n.d.)|                        
|Wickes              |<ul><li>How to- Categories<br><li> Videos in each category for a visual reference<br><li>Step by step with substeps on some of them<br><li>Search Bar<br><li>Quizzes to meet the users expectations and show advice close to what they need<br><li>Planning guides and buying guides<br><li>List of services to use such as a free design service which users can book online<br><li>Popular Projects<br><li>Calculators such as a paint, tiling and paving calculator|<ul><li>Search bar covers the products and different articles so users can search instead of scroll through pages of content unlike B&Q's search bar which only covers products<br><li>Planning guides and buying guides can help users choose specific products they need and plan out their project easier by giving them a plan through their project<br><li>Quizzes can be personalised to the user so that they can get the support that is right for their project|<ul><li>Can't bookmark or save advice to the users account / advice that they need to follow<br><li>Users can't submit their own project / guides for other users to follow, this limits the projects that user can see|(Wickes, n.d.-a)<br>(Wickes, n.d.-b)                                             
|Homebase            |<ul><li>A limited amount of Categories<br><li>Step by step guides as well as showing varieties of ideas that are possible<br><li>Search Bar<br><li>Categories have products linked to them<br>|<ul><li>Articles are easy to read and dont take long to read<br><li>Articles show different approaches to tasks that can suit to the user<br><li>Inside of the articles are smaller tips that can improve the outcome of the project|<ul><li>The range of articles are too small and doesnt cover every area<br><li>Only a gardening guide for february and not for the rest of the months [See Here](img/homebase_gardening_guide_09-11-26.png)<br><li>No calculator on the website unlike Wickes & B&Q|(Homebase, n.d.)                                          
|Toolstation         |<ul><li>A large range of subcategories<br><li>Essential tools and equipment shown in article<br><li>Step by step guides<br><li>Search bar works for products and ***Articles***(More in Strengths seciton)<br><li>Help and Advice sections such as returns information and buying guides|<ul><li>Almost every advice someone can think of is listed in this How to Section which makes it easier for the user to find help on their specific need<br><li> The search bar redirects the user to the How to section if the search parameter contains ***How To*** [See Video](videos/toolstation_search_video_10-11-26.mp4)<br><li>Frequently asked questions section can answer questions that were not present in the advice<br><li>Usefull guides section in the footer has more guides the users can follow [See Image](img/toolstation_useful_guides_10-11-26.png)|<ul><li>The menus can get cluttered due to the amount of sections that are in some categories so the user has to scroll for a while until they reach the next category [See zoomed out image](img/toolstation_zoomed_out_10-11-26.png)|Toolstation. (n.d.-a)<br> Toolstation. (n.d.-b)                                               
|Screwfix            |                                               

**Evaluation:** TODO (gaps HomeHub can fill, and how that shaped your feature choices).

---

## 6. User journey and design

TODO: insert the visual user journey diagram (`images/user-journey.png`).

**Design decisions:** TODO (layout, colour palette and contrast, typography, responsive approach). Keep any wireframes in `images/` and link them here.

---

## 7. Technology choices

### 7.1 Front end (what I used)
TODO: justify HTML, CSS and JavaScript choices and any framework or library (e.g. Bootstrap), with trade-offs, such as development speed, maintainability, accessibility and performance.

### 7.2 Proposed server side for Assessment 2 (not implemented)

**Back-end framework options**

| Option | Strengths | Weaknesses | Fit for HomeHub |
|--------|-----------|------------|-----------------|
| TODO | | | |

**Database options**

| Option | Strengths | Weaknesses | Fit for HomeHub |
|--------|-----------|------------|-----------------|
| TODO | | | |

**Recommendation:** TODO (chosen framework and database, with reasons).
**Integration approach:** TODO (e.g. how the front end would call a REST API, and which mock-data features would move to the server first).
**Security, hosting and deployment considerations:** TODO.

---

## 8. Testing

TODO: test each claimed feature with normal, error and edge cases, and link screenshots.

| ID | Feature | Test | Expected result | Actual result | Pass/Fail | Evidence |
|----|---------|------|-----------------|---------------|-----------|----------|
| F03 | Keyword search | TODO | | | | |

**Responsive testing:** TODO (mobile, tablet and desktop widths).
**Accessibility testing:** TODO (keyboard navigation, form labels, colour contrast, validator or Lighthouse results).
**Browsers tested:** TODO.

---

## 9. Limitations of the prototype

- All data is mock data. Nothing is stored permanently or sent to a server.
- Logins, votes, comments, uploads and saved items are simulated and **not secure or permanent**.
- TODO: add anything else, such as features that only work in one browser.

---

## 10. Legal, ethical and safety considerations

TODO: cover each of these in your own words.
- Image licensing and credits
- No real personal data (all users and content are fictional)
- Distinguishing ordinary DIY tips from work that needs a qualified professional (gas, electrical, structural)
- Accessibility (WCAG) and inclusive design
- Privacy and data protection considerations for the future back end

---

## 11. Image and content credits

| Image / asset | Source | Licence |
|---------------|--------|---------|
| TODO | | |

---

## 12. Version control

**Repository:** TODO link
TODO: summarise your branching approach and commit style, and add screenshots of the commit history (`images/git-log.png`).

---

## 13. Risk assessment

| Risk | Likelihood | Impact | Mitigation | Outcome |
|------|-----------|--------|------------|---------|
| Running out of time | TODO | TODO | TODO | TODO |
| Scope too large | TODO | TODO | TODO | TODO |
| Browser compatibility bugs | TODO | TODO | TODO | TODO |
| Lost work or file problems | TODO | TODO | TODO | TODO |
| Misusing generative AI | TODO | TODO | TODO | TODO |

The brief needs at least two mitigations documented for 70%+.

----

## 14. Reflection and project updates

TODO: what changed from your original timeline, what challenges you faced and how you handled them, and what you would do differently. Add short dated updates as you go. This is needed for the 80%+ band.

---

## 15. Generative AI declaration

> **Check this section carefully and make sure it is accurate.** Failing to disclose AI use can lead to a mark of 0 and a misconduct referral. Keep dated screenshots or the chat transcripts in an appendix.

I used generative AI (Claude, Anthropic) to:
- suggest a task breakdown and Gantt chart structure for the project plan, which I reviewed and adjusted;
- summarise the assessment brief and list the PRD feature catalogue, to aid my understanding;
- generate a Figma layout for a HomeHub browse page. **This design is AI-generated** and I used it as inspiration/reference: TODO (state how you used or changed it);
- draft the structure of this README. The content, justifications and reflections are my own.

TODO: add any other use (for example help debugging code or understanding a concept) and confirm the statement for the work you actually submit.

**Reference:**
Anthropic. (2026). *Claude* (Opus 5.5 / Sonnet 5.5) [Large language model]. https://claude.ai


---

## 16. Appendix
   **Figure 1.** Wickes project list page (accessed 9 Nov 2026)
   [Wickes project list](img/wickes_project_list_09-11-26.png)
## 17. References

B&Q. (n.d.). *Ideas & advice*. Retrieved November 9, 2026, from https://www.diy.com/ideas-advice/1.hroot<br>
Wickes. (n.d.-a). *How to guides*. Retrieved November 9, 2026, from https://www.wickes.co.uk/how-to-guides<br>
Wickes. (n.d.-b). *My project list*. Retrieved November 9, 2026, from https://www.wickes.co.uk/project-list<br>
Homebase. (n.d.). *Ideas & advice*. Retrieved November 9, 2026, from https://www.homebase.co.uk/ideas-advice/<br>
Toolstation. (n.d.-a). *Help & advice*. Retrieved November 9, 2026, from https://www.toolstation.com/help-and-advice<br>
Toolstation. (n.d.-b). *How-to guides*. Retrieved November 9, 2026, from https://www.toolstation.com/help-and-advice/how-to-guides<br>