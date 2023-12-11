import "./App.css";
import Header from "./Header/Header";
import TodoList from "./TodoList/TodoList";
import { useState } from "react";

function App() {
  const filters = ["all", "active", "complete"];
  const [filter, setfilter] = useState(filters[0]);
  const onChangeFilter = (status) => {
    setfilter(status);
  };

  return (
    <div>
      <Header
        filters={filters}
        filter={filter}
        onChangeFilter={onChangeFilter}
      />
      <TodoList filter={filter} />
    </div>
  );
}

export default App;
