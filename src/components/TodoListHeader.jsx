import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import { IoSunnyOutline, IoMoonSharp } from "react-icons/io5";

export default function TodoListHeader() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const handleDarkMode = () => toggleDarkMode();
  return (
    <header className="header">
      <div className="dark-mode-box">
        {darkMode ? (
          <IoMoonSharp className="header-icon" onClick={handleDarkMode} />
        ) : (
          <IoSunnyOutline className="header-icon" onClick={handleDarkMode} />
        )}
      </div>
      {/* FIXME: nav bar 상태 변경 작업해야함*/}
      <div className="nav-bar-box">
        <ul className="nav-bar">
          <li>ALL</li>
          <li>Active</li>
          <li>Complete</li>
        </ul>
      </div>
    </header>
  );
}
