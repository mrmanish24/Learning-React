import { useState } from "react";
const Profile = () => {
  const [obj, setObj] = useState({ name: "Manish", age: 24 });
  const [NameInput, setName] = useState("");
  const [AgeInput, setAge] = useState("");

  function handleClick() {
    if (NameInput != "") {
      setObj({ ...obj, name: NameInput });
      setName("");
    }
    if (AgeInput != "") {
      setObj({ ...obj, age: AgeInput });
      setAge("");
    }
  }
  function onChangeAge(event) {
    setAge(event.target.value);
  }
  function onChangeName(event) {
    setName(event.target.value);
  }
  return (
    <div>
      <li>
        Name:{obj.name} | Age:{obj.age}
      </li>
      <label htmlFor="name">Change Name</label>
      <br />
      <input type="text" id="name" value={NameInput} onChange={onChangeName} />
      <br />
      <label htmlFor="age">Change Age</label>
      <br />
      <input type="text" id="age" value={AgeInput} onChange={onChangeAge} />
      <br />
      <button type="submit" onClick={handleClick}>
        Update
      </button>
    </div>
  );
};

export default Profile;
