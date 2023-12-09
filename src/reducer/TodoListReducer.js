export default function TodoListReducer(todoList, action) {
  switch (action.type) {
    case "add": {
      // FIXME: 개수가 2개이상부터 NaN으로 입력됨! 수정해야함!
      const lastIdNum =
        todoList.length < 1
          ? Number(0)
          : Number(
              todoList.reduce((prev, value) =>
                prev.id >= value.id ? prev.id : value.id
              )
            );

      const returnArray = [
        ...todoList,
        { id: `${lastIdNum + 1}`, state: 0, todo: action.todoInput },
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
