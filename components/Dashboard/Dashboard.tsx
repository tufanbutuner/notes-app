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
import image from "/public/undraw_diary_re_4jpc.svg";
import { useAuth } from "../../context/AuthContext";
import LoginForm from "../LoginForm";

export default function Dashboard() {
  const [tasks, setTask] = useState<any>([]);
  const { currentUser } = useAuth();

  const getTasks = async () => {
    const data = await onSnapshot(
      query(
        collection(db, "tasks"),
        where("userId", "==", currentUser?.uid),
        orderBy("created", "desc")
      ),
      (snapshot) => {
        const task = snapshot.docs.map((doc) => ({
          user: currentUser?.uid,
          id: doc.id,
          ...doc.data(),
        }));
        setTask(task);
      }
    );
    return data;
  };

  const deleteTask = async (task) => {
    const taskDelete = doc(db, "tasks", task.id);
    const data = await deleteDoc(taskDelete);
    return data;
  };

  useEffect(() => {
    if (currentUser?.uid) {
      getTasks();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser?.uid]);

  return (
    <>
      <DashboardContainer>
        <ImageContainer>
          <Image src={image} alt="" />
        </ImageContainer>
        {!currentUser?.uid ? (
          <LoginForm />
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
    </>
  );
}
