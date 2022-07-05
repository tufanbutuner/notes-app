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
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";

import Image from "next/image";
import { db } from "../../server/index";
import { getAuth } from "firebase/auth";
import image from "/public/undraw_diary_re_4jpc.svg";

export default function Dashboard() {
  const auth = getAuth();
  const user = auth.currentUser;
  const [tasks, setTask] = useState<any>([]);
  const dateQuery = query(
    collection(db, "tasks"),
    where("userId", "==", user.uid),
    orderBy("created", "desc")
  );

  const getTasks = async () => {
    const data = await onSnapshot(dateQuery, (snapshot) => {
      const task = snapshot.docs.map((doc) => ({
        user: user.uid,
        id: doc.id,
        ...doc.data(),
      }));
      setTask(task);
    });
  };

  useEffect(() => {
    if (user) {
      getTasks();
    } else {
      console.log("User not logged in");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.currentUser]);

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

      {!user ? (
        <h1>Please log in</h1>
      ) : (
        <TaskListContainer>
          <h1>Your tasks</h1>
          {tasks.map((task) => {
            return (
              <Task key={task.id}>
                {task.task}
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
      )}
    </DashboardContainer>
  );
}
