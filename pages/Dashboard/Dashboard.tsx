/* eslint-disable @next/next/no-img-element */
import { DashboardContainer, Task, TaskListContainer } from "./styles";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

import Navbar from "../../components/Navbar/Navbar";
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
    <DashboardContainer>
      <img width="250px" height="250px" src="./task-image.svg" alt="" />

      <TaskListContainer>
        <h1 className="font-bold">Your tasks</h1>
        {tasks.map((task) => {
          return <Task key={task}>{task.task}</Task>;
        })}
      </TaskListContainer>
    </DashboardContainer>
  );
}
