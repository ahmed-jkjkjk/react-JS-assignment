import { createContext, useState, useContext } from "react";

// Context API: shared Theme state, accessible from any component
// without passing props down through every level.
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook wrapper around useContext for cleaner usage in components
export function useTheme() {
  return useContext(ThemeContext);
}

export default ThemeContext;
