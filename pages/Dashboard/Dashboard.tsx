import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

import Navbar from "../../components/Navbar/Navbar";
import { Task } from "./styles";
import { db } from "../../server/index";

export default function Dashboard() {
  const [tasks, setTask] = useState<any>([]);
  const taskCollection = collection(db, "tasks");

  useEffect(() => {
    const getTasks = async () => {
      const data = await getDocs(taskCollection);
      setTask(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data);
    };
    getTasks();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto block justify-center p-5">
        <h1 className="font-bold">Your tasks</h1>
        {tasks.map((task) => {
          return <Task key={task}>{task.task}</Task>;
        })}
      </div>
    </>
  );
}
