export default function TodoListReducer(todoList, action) {
  switch (action.type) {
    case "add": {
      if (action.todoInput.trim().length === 0) {
        alert(`추가할 내용을 입력해주세요.`);
        return [...todoList];
      }

      const biggestNum = todoList.reduce((biggest, eachTodo) => {
        return biggest < eachTodo.id && (biggest = eachTodo.id);
      }, 0);

      const returnArray = [
        ...todoList,
        { id: biggestNum + 1, status: "active", todo: action.todoInput },
      ];

      setLocalStorage(returnArray);

      return returnArray;
    }

    case "delete": {
      const returnArray = [
        ...todoList.filter((eachTodo) => eachTodo.id !== action.id),
      ];

      setLocalStorage(returnArray);

      return returnArray;
    }

    case "update": {
      const returnArray = [
        ...todoList.map((eachTodo) => {
          return eachTodo.id === action.id
            ? { ...eachTodo, status: action.status }
            : eachTodo;
        }),
      ];

      setLocalStorage(returnArray);

      return returnArray;
    }

    default:
      alert(`TodoListReducer의 ${action.type}를 확인해주세요.`);
  }
}

function setLocalStorage(array) {
  localStorage.removeItem("todoList");
  localStorage.setItem("todoList", JSON.stringify(array));
}
