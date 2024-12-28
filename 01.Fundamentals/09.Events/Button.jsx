const clicked = () => {
  console.log("you clicked me");
};
const Button = () => {
  return (
    <div>
      <button onClick={clicked}>Click me</button>
    </div>
  );
};
export default Button;
