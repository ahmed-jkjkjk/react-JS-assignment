# Course Catalog – ReactJS Assignment 4 (Day 9)

**Name:** Ahmed Haytham
**Assignment:** ReactJS Assignment 4 – Context API & Redux

## About
Builds on the Day 8 Course Catalog by adding a shopping-cart feature. The
site's **theme** (light/dark) is managed with the Context API, and the
**shopping cart** is managed with Redux Toolkit.

## Requirements Checklist

1. **Multiple Components** – Navbar, SearchBar, CourseCard, CourseList, Footer, DiscountBadge.
2. **Context API shares data without prop drilling** – `ThemeContext` is read directly in `Navbar.jsx`, `App.jsx`, and `About.jsx` with no props passed between them.
3. **Context Provider + useContext** – `ThemeProvider` (in `context/ThemeContext.jsx`) wraps the app in `main.jsx`; components use the `useTheme()` hook (a thin wrapper around `useContext`).
4. **Redux manages another part of global state** – the shopping cart, via `redux/slices/cartSlice.js`.
5. **Redux Toolkit + React-Redux installed & configured** – `configureStore` in `redux/store.js`, `<Provider>` wraps the app in `main.jsx`.
6. **Redux Slice with initial state and reducers** – `cartSlice.js` has `items: []` as initial state and `addToCart`, `removeFromCart`, `clearCart` reducers.
7. **useSelector reads Redux state** – used in `Navbar.jsx` (cart count) and `pages/Cart.jsx` (cart items).
8. **useDispatch updates Redux state** – used in `CourseCard.jsx` (`addToCart`) and `pages/Cart.jsx` (`removeFromCart`, `clearCart`).
9. **Two different pieces of global state** – Theme (Context API) and Cart (Redux).
10. **Organized into Components, Context, Redux Store/Slices, Pages** – see structure below.

## Feature Summary
- Toggle **Light/Dark mode** from the navbar (Context API).
- **Add to Cart** button on every course card (Redux).
- **Cart page** (`/cart`) showing items, a running total, and remove/clear actions (Redux).
- Cart item count badge shown live in the navbar.

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
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── redux/
│   │   ├── store.js
│   │   └── slices/
│   │       └── cartSlice.js
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
│       ├── Cart.jsx
│       └── NotFound.jsx
```
