import { useReducer, useState } from "react";
import TodoListReducer from "../reducer/TodoListReducer";
import { IoTrashOutline } from "react-icons/io5";
import { FaRegSquarePlus } from "react-icons/fa6";

export default function TodoListMain() {
  const [list, dispatch] = useReducer(TodoListReducer, initTodoList());
  const [todoInput, setTodoInput] = useState("");

  const handleInputChange = (event) => {
    setTodoInput(event.target.value);
  };

  return (
    <>
      <main className="todo-list-box">
        <ul>
          {list.map((eachTodo) => {
            return (
              <div
                className="each-list"
                key={eachTodo.id}
                onClick={() =>
                  dispatch({
                    type: "isCheck",
                    id: eachTodo.id,
                    state: eachTodo.state ? 0 : 1,
                  })
                }
              >
                <li
                  id={eachTodo.id}
                  className={eachTodo.state ? "complete" : ""}
                >
                  {eachTodo.todo}
                </li>
                <IoTrashOutline
                  className="main-icon"
                  onClick={(event) => {
                    event.stopPropagation();
                    dispatch({ type: "delete", id: eachTodo.id });
                  }}
                />
              </div>
            );
          })}
        </ul>
      </main>
      {/* FIXME: footer css 작업해야함 */}
      <footer className="footer">
        <input id="input-box" value={todoInput} onChange={handleInputChange} />
        <FaRegSquarePlus
          className="main-icon"
          onClick={() => {
            dispatch({ type: "add", todoInput });
            setTodoInput("");
          }}
        />
      </footer>
    </>
  );
}

// const initTestTodoList = [
//   { id: "1", state: 1, todo: "1" },
//   { id: "2", state: 0, todo: "2" },
//   { id: "3", state: 1, todo: "3" },
//   { id: "4", state: 0, todo: "4" },
//   { id: "5", state: 1, todo: "5" },
//   { id: "6", state: 0, todo: "6" },
//   { id: "7", state: 1, todo: "7" },
//   { id: "8", state: 0, todo: "8" },
// ];

function initTodoList() {
  if (!localStorage.getItem("todoList")) {
    return [];
  }
  return JSON.parse(localStorage.getItem("todoList"));
}
