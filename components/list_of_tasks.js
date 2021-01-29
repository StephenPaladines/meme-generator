import { useEffect, useState } from "react";

export default function ListOfTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data.tasks));
  }, []);

  return (
    <>
      <ul className="list-disc">
        {tasks.map(({ done, due_date, id, task, user }) => (
          <li key={id}>
            <label>{task}</label>
            <input type="checkbox" checked={!done} onChange={!done}></input>
          </li>
        ))}
      </ul>
    </>
  );
}
