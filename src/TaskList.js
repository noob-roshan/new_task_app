import React from "react";

const TaskList = ({ taskArray,setTaskArray }) => {

const HandleCheck = (status, index) =>{
let newArray = [...taskArray];
newArray[index].Checked = status
    setTaskArray(newArray)
}

const HandleDelete = (index) =>{
let newArray = [...taskArray];
newArray.splice(index,1)
setTaskArray(newArray)
}

    return (
        <>
            <div className="container-fluid">
                {taskArray.map((task,index) => {
                    return (
                        <div 
                       className={task.Checked?"mt-3 p-2 d-flex shadow-sm container-fluid rounded bg-success":
                       "mt-3 p-2 d-flex shadow-sm container-fluid rounded bg-warning"}
                        >
                        
                            <p className="flex-grow-1 m-0 p-0 pl-2 text-white">{task.Task}</p>
                            <div>
                                <input type="checkbox"
                                    aria-label="Checkbox for following text input"
                                    className="mr-3" 
                                    onChange={(e)=> HandleCheck(e.target.checked,index)}/>
                                <button type="button" class="btn btn-danger btn-sm"
                                onClick={()=> HandleDelete(index)}
                                ><i className="fas fa-trash"></i></button>
                            </div>
                        </div>
                    )

                })}
            </div>
        </>
    )
}

export default TaskList