const App2 = () => {
  return (
    <div>
      <User name="Manish" Age={24} img="3200.jpg" />
    </div>
  );
};

const User = ({ name, Age, img }) => {
  return (
    <div>
      <h1>Name:{name}</h1>
      <p>Age:{Age}</p>
      <img src={img} alt="Manish DP" />
    </div>
  );
};

export default App2;
