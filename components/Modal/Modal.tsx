import {
  ModalBackground,
  ModalBody,
  ModalContainer,
  ModalFooter,
  ModalHeader,
} from "./styles";
import { ReactElement, useState } from "react";
import { collection, doc, setDoc } from "firebase/firestore";

import ReactDom from "react-dom";
import { db } from "../../server/index";

interface Props {
  setShowModal: any;
  open?: boolean;
}

export default function Modal({ setShowModal }: Props): ReactElement {
  const taskCollection = doc(collection(db, "tasks"));
  const [taskInput, setTaskInput] = useState({});

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTaskInput(e.target.value);
  };

  const handleSubmit = async (e?: React.MouseEvent<HTMLInputElement>) => {
    await setDoc(taskCollection, { task: taskInput });
    setShowModal(false);
  };

  const handleClose = async (e?: React.MouseEvent<HTMLInputElement>) => {
    setShowModal(false);
  };

  return ReactDom.createPortal(
    <ModalBackground>
      <ModalContainer>
        <ModalHeader>
          <h4 className="modal-title">Add new task</h4>
        </ModalHeader>
        <ModalBody>
          <input type="text" onChange={handleChange}></input>
        </ModalBody>
        <ModalFooter>
          <button className="close" onClick={handleClose}>
            Close
          </button>
          <button className="submit" onClick={handleSubmit}>
            Submit
          </button>
        </ModalFooter>
      </ModalContainer>
    </ModalBackground>,
    document.getElementById("ModalPortal")
  );
}
