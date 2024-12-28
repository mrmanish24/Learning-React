import UserState from "../Fundamentals/07.Conditional Rendering/UserState";
import Weather from "../Fundamentals/07.Conditional Rendering/Weather";

const App = () => {
  return (
    <div>
      <Weather />
      <UserState isAdmin={true} isloggedIn={true} />
    </div>
  );
};
export default App;
