# Course Catalog – ReactJS Assignment

**Name:** Ahmed Haytham
**Assignment:** ReactJS Assignment (Day 6)

## About
A simple Course Catalog app built with React that lets users browse a list of
online courses, see which ones they're enrolled in, and view discounted pricing.

## Concepts Used
- **Reusable Components** – `Header`, `CourseCard`, `CourseList`, `Footer`
- **Props** – `App` passes course data down to `CourseList`, which passes each
  individual course to `CourseCard`
- **Ternary Operator** – used in `CourseCard` to show an "Enrolled" or
  "Not Enrolled" badge, and to strike through the price when discounted
- **&& Operator** – used in `CourseCard` to only render the discount badge
  when a course actually has a discount
- **.map()** – used in `CourseList` to render a `CourseCard` for every course
  in the `courses` array

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
│   └── components/
│       ├── Header.jsx
│       ├── CourseCard.jsx
│       ├── CourseList.jsx
│       └── Footer.jsx
```
