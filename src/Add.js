import React, { useState } from "react";


const AddTask = ({ setTaskArray, taskArray }) => {
  const [search, setSearch] = useState("")

  const SubmitEvent = (e) => {
    e.preventDefault();
    if(search !== ""){
      setTaskArray([...taskArray, {id:taskArray.length+1, Task: search, Checked: false }])
      setSearch("")
    } 
  }

  return (
    <>
    <div className="w-50 p-3 container-fluid">
    <h1 className="text-center display-4 text-muted">My Task</h1>
    <div class="input-group">
        <input type="text" class="form-control" placeholder="" aria-label=""
          aria-describedby="basic-addon1"
          value={search}
          onChange={(e) => setSearch(e.target.value)} />
        <div class="input-group-append">
          <button class="btn btn-outline-dark" type="submit"
            onClick={(event) => SubmitEvent(event)}>Add Task</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default AddTask