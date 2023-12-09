import "./App.css";
import TodoListHeader from "./components/TodoListHeader";
import TodoListMain from "./components/TodoListMain";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
      <div className="main">
        <TodoListHeader />
        <TodoListMain />
      </div>
    </DarkModeProvider>
  );
}

export default App;
