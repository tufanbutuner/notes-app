/* eslint-disable @next/next/no-img-element */
import {
  DashboardContainer,
  ImageContainer,
  Task,
  TaskListContainer,
} from "./styles";
import React, { useEffect, useState } from "react";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

import Image from "next/image";
import { db } from "../../server/index";
import image from "/public/undraw_diary_re_4jpc.svg";

export default function Dashboard() {
  const [tasks, setTask] = useState<any>([]);
  const [sortBy, setSortBy] = useState("ascending");
  const ascendingQuery = query(collection(db, "tasks"), orderBy("task"));
  const descendingQuery = query(
    collection(db, "tasks"),
    orderBy("task", "desc")
  );

  const getTasks = async () => {
    const data = await onSnapshot(ascendingQuery, (snapshot) => {
      const task = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTask(task);
    });
  };

  const handleChange = (e) => {
    setSortBy(e.target.value);
  };

  useEffect(() => {
    getTasks();
    console.log(tasks);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteTask = async (task) => {
    const taskDelete = doc(db, "tasks", task.id);
    const data = await deleteDoc(taskDelete);
    // return data;
  };

  return (
    <DashboardContainer>
      <ImageContainer>
        <Image src={image} alt="" />
      </ImageContainer>

      <TaskListContainer>
        <h1>Your tasks</h1>
        {/* <select value={sortBy} onChange={handleChange}>
          <option>Ascending</option>
          <option>Descending</option>
        </select> */}

        {tasks.map((task) => {
          return (
            <Task key={task.id}>
              {task.task}
              {task.task.created}
              <input
                onClick={() => deleteTask(task).then()}
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
