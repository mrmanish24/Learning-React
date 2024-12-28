const ValidPassword = () => <h1>You are logged In</h1>;
const InvalidPassword = () => <h1>you password is invalid</h1>;

const Password = ({ isValid }) => {
  if (isValid) {
    return <ValidPassword />;
  } else {
    return <InvalidPassword />;
  }
};

export default Password;

// app.jsx

// import Password from "../Fundamentals/07.Conditional Rendering/Password";
// const App = () => {
//   return (
//     <div>
//       <Password isValid={true} />
//     </div>
//   );
// };

// export default App;
