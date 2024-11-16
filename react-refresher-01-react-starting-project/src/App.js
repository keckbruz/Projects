import React, { useState } from "react";

import "./App.css";
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { id: "cg1", text: "grias de" },
    { id: "cg2", text: "learn about mern" },
    { id: "cg3", text: "help other students in the course Q&A" },
  ]);

  const addNewGoalHandler = (newGoal) => {
    //    setCourseGoals(courseGoals.concat(newGoal));
    // Damit immer alle Requests nacheinander ausgeführt werden
    // For stateupdates that depend on the previous state value
    setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(newGoal));
  };

  return (
    <div className="coursegoals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;
