import "./App.css";
import TodoListHeader from "./components/TodoListHeader";
import TodoListMain from "./components/TodoListMain";
import { DarkModeContext } from "./context/DarkModeContext";
import { useState, useContext } from "react";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const [navState, setNavState] = useState("all");
  const handleNavState = (state) => {
    setNavState(state);
  };

  return (
    <div className={darkMode ? "main apply-dark-mode" : "main"}>
      <TodoListHeader handleNavState={handleNavState} />
      <TodoListMain navState={navState} />
    </div>
  );
}

export default App;
