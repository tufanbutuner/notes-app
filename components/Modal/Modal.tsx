import "react-toastify/dist/ReactToastify.css";

import {
  CloseButton,
  ModalBackground,
  ModalBody,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  SubmitButton,
} from "./styles";
import { ReactElement, useState } from "react";
import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore";

import ReactDom from "react-dom";
import { db } from "../../server/index";

interface Props {
  setShowModal: any;
}

export default function Modal({ setShowModal }: Props): ReactElement {
  const taskCollection = doc(collection(db, "tasks"));
  const [taskInput, setTaskInput] = useState("");

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTaskInput(e.target.value);
  };

  const handleSubmit = async (e?: React.MouseEvent<HTMLInputElement>) => {
    if (taskInput.length > 0) {
      await setDoc(taskCollection, {
        task: taskInput,
        created: serverTimestamp(),
      });
      setShowModal(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (taskInput.length === 0 && e.key === "Enter") {
      alert("Please enter a task");
    } else if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleClose = async (e?: React.MouseEvent<HTMLInputElement>) => {
    setShowModal(false);
  };

  return ReactDom.createPortal(
    <ModalBackground>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>Add new task</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <input
            type="text"
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            autoFocus
          ></input>
        </ModalBody>
        <ModalFooter>
          <CloseButton onClick={handleClose}>Close</CloseButton>
          <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
        </ModalFooter>
      </ModalContainer>
    </ModalBackground>,
    document.getElementById("ModalPortal")
  );
}
