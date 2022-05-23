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
  onClose?: boolean;
  open?: boolean;
}

export default function Modal({ onClose }: Props): ReactElement {
  const [open, setOpen] = useState(true);
  const taskCollection = doc(collection(db, "tasks"));
  const [taskInput, setTaskInput] = useState({});

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTaskInput(e.target.value);
  };

  const handleSubmit = async (e?: React.MouseEvent<HTMLInputElement>) => {
    await setDoc(taskCollection, { task: taskInput });
    setOpen(false);
  };

  if (!open) return null;

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
          <button className="close" onClick={() => setOpen(false)}>
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
