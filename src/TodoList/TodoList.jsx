import { useEffect, useReducer } from "react";
import AddTodo from "../AddTodo/AddTodo";
import styles from "./TodoList.module.css";
import TodoListReducer from "../reducer/TodoListReducer";
import { IoTrashOutline } from "react-icons/io5";

export default function TodoListMain({ filter }) {
  const [list, dispatch] = useReducer(TodoListReducer, initTodoList());

  const handleAddTodo = (todoInput) => {
    dispatch({ type: "add", todoInput });
  };

  const handleList = getFilteredItem(list, filter);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(list));
  }, [list]);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {handleList.map((eachTodo) => {
          return (
            <div
              className={styles.todo}
              key={eachTodo.id}
              onClick={() =>
                dispatch({
                  type: "update",
                  id: eachTodo.id,
                  status: eachTodo.status === "active" ? "complete" : "active",
                })
              }
            >
              <li
                id={eachTodo.id}
                className={`${
                  eachTodo.status === "complete" && styles.complete
                }`}
              >
                {eachTodo.todo}
              </li>
              <IoTrashOutline
                className={styles.button}
                onClick={(event) => {
                  event.preventDefault();
                  dispatch({ type: "delete", id: eachTodo.id });
                }}
              />
            </div>
          );
        })}
      </ul>
      <AddTodo handleAddTodo={handleAddTodo} />
    </section>
  );
}

const initTodoList = () => {
  const todoList = localStorage.getItem("todoList");
  return todoList ? JSON.parse(todoList) : [];
};

function getFilteredItem(list, filter) {
  if (filter === "all") {
    return [...list];
  } else {
    return [...list.filter((eachTodo) => eachTodo.status === filter)];
  }
}
