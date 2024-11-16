import React, { useState } from "react";
import "./NewGoal.css";

// Contains input form and handles and submits

const NewGoal = (props) => {
  const [enteredText, setEnteredText] = useState("");

  const addGoalsHandler = (event) => {
    // Prevent page reload on form submit
    event.preventDefault();
    
    // Create a new goal object
    const NewGoal = {
      id: Math.random().toString(),
      text: enteredText,
    };
    console.log(NewGoal);

    // Pass the new goal object to the parent component
    props.onAddGoal(NewGoal);
  };

  // Handler needs to be bound to the input element onChange event
  const textChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };

  return (
    <form className="new-goal" onSubmit={addGoalsHandler}>
      <input type="text" value={enteredText} onChange={textChangeHandler} />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
