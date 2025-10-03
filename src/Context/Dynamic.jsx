import { createContext, useContext, useState } from "react";

// Create Context
const ThemeContext = createContext();

function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme}>
      Current Theme: {theme} (Click to change)
    </button>
  );
}

function Wonder() {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div>
        <h1>Theme App</h1>
        <ThemeButton />
      </div>
    </ThemeContext.Provider>
  );
}

export default Wonder;
