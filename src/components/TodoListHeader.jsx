import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import { IoSunnyOutline, IoMoonSharp } from "react-icons/io5";

export default function TodoListHeader({ handleNavState }) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const handleDarkMode = () => toggleDarkMode();

  return (
    <header className="header">
      <div className="dark-mode-box">
        {darkMode ? (
          <IoSunnyOutline className="header-icon" onClick={handleDarkMode} />
        ) : (
          <IoMoonSharp className="header-icon" onClick={handleDarkMode} />
        )}
      </div>
      <div className="nav-bar-box">
        <ul className="nav-bar">
          <li onClick={() => handleNavState("all")}>All</li>
          <li onClick={() => handleNavState("active")}>Active</li>
          <li onClick={() => handleNavState("complete")}>Complete</li>
        </ul>
      </div>
    </header>
  );
}
