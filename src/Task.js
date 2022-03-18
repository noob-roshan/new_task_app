import React, { useState } from "react";
import AddTask from "./Add";
import TaskList from "./TaskList";


const Task = () => {
  const [taskArray, setTaskArray] = useState([]);

  return (
    <>
      <div className="mt-3 container-fluid">    
        <AddTask taskArray={taskArray} setTaskArray={setTaskArray} />
        <TaskList taskArray={taskArray} setTaskArray={setTaskArray} />
      </div>

    </>
  )

}

export default Task
