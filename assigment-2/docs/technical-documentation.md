# Technical Documentation - Portfolio Assignment #1

## 1. Project Overview
This document details the technical implementation of the Personal Portfolio website for the **SWE363** course. The goal was to create a responsive, well-structured foundation using core web technologies.

---

## 2. Front-End Architecture

### HTML (Structure)
- **Semantic Tags:** Used `<nav>`, `<section>`, `<header>`, and `<footer>` to ensure accessibility and SEO-friendly structure.
- **Organization:** The page is divided into three main sections: `About`, `Projects`, and `Contact`.

### CSS (Styling & Responsiveness)
- **Layout:** Implemented using **CSS Flexbox** to ensure a flexible and modern layout.
- **Variables:** Used CSS Custom Properties (Variables) for colors (e.g., `--primary`, `--dark`) to maintain consistency and allow easy theme changes.
- **Media Queries:** Used `@media` breakpoints at `768px` to switch from a desktop-view (horizontal) to a mobile-view (vertical stacked layout).
- **Transitions:** Added `transition: transform 0.3s` to project cards for a smoother user experience (UX) on hover.

### JavaScript (Interactivity)
- **DOM Content Loaded:** All scripts are wrapped in a listener to ensure the HTML is fully parsed before execution.
- **Greeting Logic:** A dynamic greeting function determines the current time using `new Date().getHours()` and displays a message (Morning/Afternoon/Evening) in the console/UI.
- **Form Handling:** Prevented default form submission behavior using `e.preventDefault()` and added a success alert to simulate feedback.

---

## 3. Implementation Details

### File Structure
- `/css/styles.css`: Contains all visual styling.
- `/js/script.js`: Contains logic for interactivity.
- `index.html`: The main skeletal structure of the site.

### Performance & Optimization
- **Font Loading:** Used Google Fonts with `&display=swap` to prevent render-blocking.
- **External Scripts:** Placed the `<script>` tag at the end of the `<body>` to improve page load speed.

---

## 4. Known Limitations
- The **Contact Form** currently only provides client-side feedback (alert) and does not send emails as no backend/API is implemented yet (as per Phase 1 requirements).
- Project images are currently using **placeholders** (via `via.placeholder.com`).

---

## 5. Future Enhancements (Phase 2)
- Integration with a **Node.js/Express** backend.
- Implementation of a real **Database** (MongoDB or MySQL) to store project details.
- Adding a **Dark Mode** toggle persistent across sessions.

# Technical Documentation - Assignment 2 Updates

## 1. New Features & Interactivity
- **Theme Persistence:** Implemented a Dark/Light mode toggle. The state is managed using `localStorage`, fulfilling the data handling requirement.
- **Project Detail Toggles:** Added dynamic "View Details" buttons on project cards using DOM manipulation to show/hide extra content.
- **Smooth Scroll & Reveal:** Integrated CSS transitions combined with the JavaScript `Intersection Observer API` for a professional fade-in animation during scrolling.

## 2. Front-End Enhancements
- **CSS Flexbox Alignment:** Improved the navigation bar layout using `align-items: center` to ensure the logo, links, and theme toggle are perfectly aligned.
- **Responsive Images:** Added `object-fit: cover` to project images to maintain a consistent aspect ratio regardless of the original image dimensions.
- **Form Validation:** Enhanced the contact form with custom JavaScript validation to provide immediate user feedback without page reloads.

## 3. Projects Added
- **Cartier VR Store (Spatial):** A VR UX/UI project focused on luxury brand identity in the metaverse.
- **SAR Train UX Optimization:** A service design study addressing user pain points and proposing productivity/relaxation cabin concepts.

## 4. Known Limitations & Next Steps
- Images are stored locally in the `assets/images/` folder.
- Future steps involve connecting the contact form to a real backend service (e.g., Formspree or a Node.js server).
