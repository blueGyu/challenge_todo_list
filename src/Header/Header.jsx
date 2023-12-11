import styles from "./Header.module.css";
import { useDarkMode } from "../context/DarkModeContext";
import { IoSunnyOutline, IoMoonSharp } from "react-icons/io5";

export default function TodoListHeader({ filters, filter, onChangeFilter }) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={styles.header}>
      <button className={styles.toggle} onClick={toggleDarkMode}>
        {darkMode ? <IoSunnyOutline /> : <IoMoonSharp />}
      </button>

      <ul className={styles.filters}>
        {filters.map((value) => {
          return (
            <li>
              <button
                className={`${styles.filter} ${
                  filter === value && styles.selected
                }`}
                key={value}
                onClick={() => onChangeFilter(value)}
              >
                {value}
              </button>
            </li>
          );
        })}
      </ul>
    </header>
  );
}
