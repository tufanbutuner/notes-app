/* eslint-disable @next/next/no-img-element */
import { DashboardContainer, Task, TaskListContainer } from "./styles";
import React, { useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";

import Image from "next/image";
import { db } from "../../server/index";
import image from "/public/undraw_diary_re_4jpc.svg";

export default function Dashboard() {
  const [tasks, setTask] = useState<any>([]);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [deleteTask, setDeleteTask] = useState();

  const taskCollection = collection(db, "tasks");
  // const taskDelete = doc(db, "tasks", tasks: tasks.id);
  console.log(tasks);

  // useEffect(() => {
  //   const deleteTask = async () => {
  //     const data = await deleteDoc(taskDelete);
  //     console.log(data);
  //   };
  //   deleteTask();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

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
      <Image src={image} alt="" />

      <TaskListContainer>
        <h1>Your tasks</h1>
        {tasks.map((task) => {
          return (
            <Task key={task.id}>
              {task.task}
              <input
                onClick={() => setIsComplete(true)}
                type="checkbox"
                id=""
                name="task"
                value=""
              />
            </Task>
          );
        })}
      </TaskListContainer>
    </DashboardContainer>
  );
}
