export default function NavBarReducer(action, state) {
  // FIXME: nav bar 상태 변경 작업하면서 수정해야함!
  switch (action.type) {
    case "all": {
      return "all";
    }
    case "active": {
      return "all";
    }
    case "complete": {
      return "all";
    }
    default:
      alert(`NavBarReducer의 ${action.type}를 확인해주세요.`);
  }
}
