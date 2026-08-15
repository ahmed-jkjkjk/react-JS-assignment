# Course Catalog – ReactJS Assignment 2 (Day 7)

**Name:** Ahmed Haytham
**Assignment:** ReactJS Assignment 2 – Hooks, Styling & Bootstrap

## About
Builds on the Day 6 Course Catalog by adding search, live stats, custom hooks,
four different styling approaches, and Bootstrap for layout.

## Requirements Checklist

1. **React Hooks** – `useState` and `useEffect` are used throughout (`App.jsx`, `SearchBar.jsx`, and both custom hooks).
2. **Two+ different Hooks** – `useState` (search term, search input) and `useEffect` (inside both custom hooks).
3. **Custom Hooks** –
   - `useCourseStats` (`src/hooks/useCourseStats.js`) — computes total courses, enrolled count, and average price.
   - `useDocumentTitle` (`src/hooks/useDocumentTitle.js`) — keeps the browser tab title synced with the filtered course count.
4. **Four styling approaches**:
   - **Inline Styling** – `SearchBar.jsx` (input) and `Header.jsx` (subtitle)
   - **CSS Stylesheet** – `src/index.css` (global styles)
   - **CSS Modules** – `CourseCard.module.css` used in `CourseCard.jsx`
   - **Styled Components** – `DiscountBadge.jsx`
5. **Bootstrap installed and used** – imported in `main.jsx`, used for the navbar, grid (`row`/`col`), cards, badges, and form controls.
6. **Responsive layout** – Bootstrap's grid system makes the course cards stack on small screens and sit two-per-row on larger screens.
7. **Organized files** – components, hooks, and data live in separate folders (`components/`, `hooks/`, `data/`).
8. **Functional & clean UI** – search filters the list live, and a stats bar shows totals at a glance.

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
│   └── components/
│       ├── Header.jsx
│       ├── SearchBar.jsx
│       ├── CourseCard.jsx
│       ├── CourseCard.module.css
│       ├── DiscountBadge.jsx
│       ├── CourseList.jsx
│       └── Footer.jsx
```
