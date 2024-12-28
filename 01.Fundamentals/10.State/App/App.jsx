import Counter from "../Counter.jsx";
import Profile from "../Fundamentals/10.State/Profile";
import TodoList from "../Fundamentals/10.State/TodoList.jsx";

const App = () => {
  return (
    <div>
      <TodoList />
      <br />
      <Counter />
      <hr />
      <br />
      <Profile />
    </div>
  );
};
export default App;
