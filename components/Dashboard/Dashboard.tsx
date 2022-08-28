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
import { getAuth, onAuthStateChanged } from "firebase/auth";

import Image from "next/image";
import { db } from "../../server/index";
import image from "/public/undraw_diary_re_4jpc.svg";

export default function Dashboard() {
  const auth = getAuth();
  const user = auth.currentUser;
  const uid = auth?.currentUser?.uid;
  const [tasks, setTask] = useState<any>([]);

  const getTasks = async () => {
    const data = await onSnapshot(
      query(
        collection(db, "tasks"),
        where("userId", "==", uid),
        orderBy("created", "desc")
      ),
      (snapshot) => {
        const task = snapshot.docs.map((doc) => ({
          user: uid,
          id: doc.id,
          ...doc.data(),
        }));
        setTask(task);
      }
    );
    return data;
  };

  useEffect(() => {
    if (uid) {
      getTasks();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

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

      {!user?.uid ? (
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
