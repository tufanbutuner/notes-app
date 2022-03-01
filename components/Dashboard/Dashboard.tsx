/* eslint-disable @next/next/no-img-element */
import { DashboardContainer, Task, TaskListContainer } from "./styles";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

import Image from "next/image";
import { db } from "../../server/index";
import image from "/public/undraw_diary_re_4jpc.svg";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DashboardContainer>
      <Image width="100%" height="100%" src={image} alt="" />

      <TaskListContainer>
        <h1 className="font-bold">Your tasks</h1>
        {tasks.map((task) => {
          return <Task key={task}>{task.task}</Task>;
        })}
      </TaskListContainer>
    </DashboardContainer>
  );
}
