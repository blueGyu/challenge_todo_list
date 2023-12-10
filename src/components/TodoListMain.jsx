import { useReducer, useState } from "react";
import TodoListReducer from "../reducer/TodoListReducer";
import { IoTrashOutline } from "react-icons/io5";

export default function TodoListMain({ navState }) {
  const [list, dispatch] = useReducer(TodoListReducer, initTodoList());
  const [todoInput, setTodoInput] = useState("");

  const handleInputChange = (event) => {
    setTodoInput(event.target.value);
  };

  const handleList = () => {
    switch (navState) {
      case "all": {
        return [...list];
      }
      case "active": {
        return [...list.filter((eachTodo) => eachTodo.state === 0)];
      }
      case "complete": {
        return [...list.filter((eachTodo) => eachTodo.state === 1)];
      }
      default:
        alert(`navState를 확인해주세요.`);
    }
  };

  return (
    <>
      <main className="todo-list-box">
        <ul>
          {handleList().map((eachTodo) => {
            return (
              <div
                className={"each-list"}
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
                  className="trash-icon"
                  onClick={(event) => {
                    event.preventDefault();
                    dispatch({ type: "delete", id: eachTodo.id });
                  }}
                />
              </div>
            );
          })}
        </ul>
      </main>
      <footer className="footer">
        <div>
          <input
            id="input-box"
            value={todoInput}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button
            className="plus-button"
            onClick={(event) => {
              dispatch({ type: "add", todoInput });
              setTodoInput("");
            }}
          >
            +
          </button>
        </div>
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

const initTodoList = () => {
  if (!localStorage.getItem("todoList")) {
    return [];
  }
  return JSON.parse(localStorage.getItem("todoList"));
};
