import { useEffect, useState } from "react";

export default function ListOfTasks() {
  const [tasks, setTasks] = useState([]);

  const tasksPlaceholder = [
    {
      done: false,
      id: 123,
      task: "shower",
    },
    {
      done: true,
      id: 456,
      task: "eat",
    },
    {
      done: false,
      id: 789,
      task: "sleep",
    },
  ];

  const setCheck = (index) => {
    const check = tasks[index].done;
    console.log(index, check);
    setTasks((previous) => {
      const updatedTasks = [...previous];
      updatedTasks[index].done = !check;
      return updatedTasks;
    });
  };

  const submitData = () => {
    fetch("task", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: { tasks },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetch("/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data.tasks))
      .catch((error) => {
        setTasks([...tasksPlaceholder])
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="w-100% m-10">
      <h1 className="mb-10 text-center bg-gray-400 border border-b-2 heading-1">
        Tasks
      </h1>
      <form className="bg-gray-200" onSubmit={submitData}>
        <ul className="block w-40 m-auto mx-auto list-none">
          {tasks.map(({ due_date, id, task, user }, index) => (
            <li key={id}>
              <input
                type="checkbox"
                onChange={() => setCheck(index)}
                checked={tasks[index].done}
              ></input>
              <label
                className={`ml-4 ${
                  tasks[index].done === true ? `line-through` : ``
                }`}
              >
                {task}
              </label>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}
