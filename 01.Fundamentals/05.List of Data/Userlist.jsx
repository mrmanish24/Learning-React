const Userlist = () => {
  const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 },
  ];

  return (
    <div>
      {users.map((person) => (
        <ul key={person.id}>
          <li>
            Name:{person.name} Age:{person.age}
          </li>
        </ul>
      ))}
    </div>
  );
};
export default Userlist;
