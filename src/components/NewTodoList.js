import React, { useState } from "react";

const NewTodoList = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newAdedTodoList = {
      title: enteredTitle,
    };
    console.log(newAdedTodoList);
    props.onAddNewTodoData(newAdedTodoList);
    setEnteredTitle("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Title</label>
        <input
          type="text"
          onChange={titleChangeHandler}
          value={enteredTitle}
        ></input>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
export default NewTodoList;
