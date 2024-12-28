const Friends = () => {
  const list = [
    "manish",
    "ashu",
    "luckey",
    "rajul",
    "gyendra",
    "deepak",
    "raj",
  ];
  return (
    <div>
      {list.map((myname) => (
        <ul key={Math.random()}>
          <li>{myname}</li>
        </ul>
      ))}
    </div>
  );
};
export default Friends;
