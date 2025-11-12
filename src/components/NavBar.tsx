

import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function NavBar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav>
      
      <h3>Current Theme: {theme}</h3>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </nav>
  );
}

export default NavBar;
