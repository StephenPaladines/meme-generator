import { useEffect, useState } from "react";

export default function ListOfTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("/tasks")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setTasks(data.tasks);
      });
  }, []);

  return (
    <ul>
      {/* {tasks.map(({ done, due_date, id, task, user }) => {
        <li key={id}>{task}</li>;
        <input type="checkbox" checked={done}></input>;
      })} */}
    </ul>
  );
}
