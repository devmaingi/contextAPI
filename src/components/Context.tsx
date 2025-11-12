

import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Context() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <h1>Context API</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus enim
        ducimus assumenda aliquid dolores saepe cupiditate sint! Sapiente
        quaerat eum blanditiis aliquid consequatur! Omnis sed aliquam illo sit
        officia saepe.
      </p>
    </div>
  );
}

export default Context;
