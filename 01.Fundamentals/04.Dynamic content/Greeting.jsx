const Greeting = () => {
  const myName = "Manish";
  const date = new Date();
  return (
    <div>
      <h1>{myName}</h1>
      <p>Date:{date.getDate()}</p>
    </div>
  );
};
export default Greeting;
