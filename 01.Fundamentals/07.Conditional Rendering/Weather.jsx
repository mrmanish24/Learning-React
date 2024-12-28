const Weather = () => {
  const temp = 16;

  if (temp < 15) {
    return <h1>its cold outside</h1>;
  } else if (temp > 25) {
    return <h1>its hot outside</h1>;
  } else {
    return <h1>its a beautiful weather outside</h1>;
  }
};
export default Weather;
