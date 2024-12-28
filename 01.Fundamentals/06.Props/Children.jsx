const App3 = () => {
  return (
    <div>
      <Card>
        <h1>My Card</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
          quas eos sequi amet porro sed commodi optio pariatur impedit. Amet
          quis, veniam corporis eligendi atque quam. Delectus cum ratione
          aliquid! Accusantium ullam ducimus perferendis dolorem, beatae
          consequuntur in esse. Quidem ipsam optio quo aliquam repudiandae
          laborum quae natus corrupti ab consequuntur! Similique ex odit optio
          velit itaque commodi tenetur dolores.
        </p>
      </Card>
    </div>
  );
};

const Card = ({ children }) => {
  return <div>{children}</div>;
};
export default App3;
