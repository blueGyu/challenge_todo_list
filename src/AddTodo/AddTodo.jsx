import { useState } from "react";
import styles from "./AddTodo.module.css";

export default function TodoListAddForm({ handleAddTodo }) {
  const [todoInput, setTodoInput] = useState("");
  const handleInputChange = (event) => setTodoInput(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddTodo(todoInput);
    setTodoInput("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        placeholder="add todo"
        value={todoInput}
        onChange={handleInputChange}
      />
      <button className={styles.button}>+</button>
    </form>
  );
}
