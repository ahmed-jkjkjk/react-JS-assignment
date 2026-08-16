# Course Catalog – ReactJS Assignment 3 (Day 8)

**Name:** Ahmed Haytham
**Assignment:** ReactJS Assignment 3 – Forms & React Router

## About
Builds on the Day 7 Course Catalog by turning it into a multi-page app with
React Router, plus a validated Contact/Register form.

## Requirements Checklist

1. **Multi-page project** – Home, About, Contact, and a 404 page.
2. **React Router DOM installed & configured** – `BrowserRouter` wraps the app in `main.jsx`.
3. **Three+ routes** – `/` (Home), `/about` (About), `/contact` (Contact), plus `*` (404).
4. **Navigation Bar** – `Navbar.jsx` uses `NavLink` to move between pages, with an active-link highlight.
5. **Contact / Registration Form** – `pages/Contact.jsx`.
6. **Four+ input fields** – Full Name, Email, Password, Phone Number, Message.
7. **Form data handled with React state** – all inputs are controlled via a single `formData` state object.
8. **Form validation** – required fields, email format check, minimum password length, phone format check.
9. **Success message after valid submit** – shown conditionally once validation passes.
10. **404 / Not Found route** – catch-all route renders `pages/NotFound.jsx` with a link back home.
11. **Organized Components and Pages** – `components/` for reusable UI, `pages/` for route-level views, `hooks/` for custom hooks, `data/` for static data.

## How to Run
```bash
npm install
npm run dev
```
Then open the local URL shown in the terminal (usually http://localhost:5173).

## Project Structure
```
course-catalog/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── data/
│   │   └── courses.js
│   ├── hooks/
│   │   ├── useCourseStats.js
│   │   └── useDocumentTitle.js
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── SearchBar.jsx
│   │   ├── CourseCard.jsx
│   │   ├── CourseCard.module.css
│   │   ├── DiscountBadge.jsx
│   │   ├── CourseList.jsx
│   │   └── Footer.jsx
│   └── pages/
│       ├── Home.jsx
│       ├── About.jsx
│       ├── Contact.jsx
│       └── NotFound.jsx
```
