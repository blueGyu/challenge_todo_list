export default function TodoListReducer(todoList, action) {
  switch (action.type) {
    case "add": {
      if (!action.todoInput) {
        alert(`추가할 내용을 입력해주세요.`);
        return [...todoList];
      }

      const biggestNum = todoList.reduce((biggest, eachTodo) => {
        return biggest < eachTodo.id && (biggest = eachTodo.id);
      }, 0);

      const returnArray = [
        ...todoList,
        { id: biggestNum + 1, state: 0, todo: action.todoInput },
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

    case "isCheck": {
      const returnArray = [
        ...todoList.map((eachTodo) => {
          return eachTodo.id === action.id
            ? { ...eachTodo, state: action.state }
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
