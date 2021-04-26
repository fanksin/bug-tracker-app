import "./App.css";
import store from "./store";
import * as actions from "./actions";
const bugAddHandler = (description) => {
  return store.dispatch(actions.bugAdded(description));
};
const bugRemoveHandler = (id) => {
  return store.dispatch(actions.bugRemoved(id));
};
const bugResolveHandler = (id) => {
  return store.dispatch(actions.bugResolved(id));
};
const bugSubmitHandler = (e) => {
  e.preventDefault();
  console.log(e);
};
function App() {
  return (
    <form className="App">
      <input
        className="bug__description"
        type="text"
        placeholder="Describe the bug"
      ></input>
      <button className="bug__add_btn" type="submit" onClick={bugSubmitHandler}>
        Add Bug
      </button>
    </form>
  );
}

export default App;
