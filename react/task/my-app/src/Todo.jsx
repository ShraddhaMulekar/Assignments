import React, { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([])
  const handleSubmit = () => {
    console.log(task);
    setTodo([...todo, task])
    setTask("");
  };

  const handleDelete = (ind)=>{
    todo.filter((index)=>{
        return index!==ind
    })
  }

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>

      <div>
        {
            todo?.map((i, t)=>{
                console.log({t})
                return(
                    <div key={t}>
                        <li >{i}</li>
                        <button onClick={handleDelete(index)}>Delete</button>
                    </div>
                )
            })
        }
      </div>
    </div>
  );
};

export default Todo;
