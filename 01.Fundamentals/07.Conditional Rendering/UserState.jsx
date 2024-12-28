const UserState = ({ isloggedIn, isAdmin }) => {
  if (isloggedIn && isAdmin) {
    return <h1> WELCOME ADMIN</h1>;
  } else if (isloggedIn) {
    return <h1>WELCOME USER</h1>;
  } else {
    return <h1>please input valid details</h1>;
  }
};
export default UserState;
