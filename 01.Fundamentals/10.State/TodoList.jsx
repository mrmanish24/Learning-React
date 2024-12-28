import { useState } from "react";

const TodoList = () => {
  const [arr, setItem] = useState([]);
  const [inputValue, setInput] = useState("");
  function handleClick() {
    if (inputValue.trim() != "") {
      setItem([...arr, inputValue]);
      setInput("");
    }
  }

  function onInputchange(event) {
    setInput(event.target.value);
  }

  return (
    <div>
      <h1>TodoList</h1>
      <div>
        <ol>
          {arr.map((t, index) => (
            <li key={index}>{t}</li>
          ))}
        </ol>
      </div>
      <label htmlFor="myInput">Add Task :</label>
      <br />
      <input
        type="text"
        id="myInput"
        value={inputValue}
        onChange={onInputchange}
      />
      <button type="submit" onClick={handleClick}>
        Add Item
      </button>
    </div>
  );
};
export default TodoList;
