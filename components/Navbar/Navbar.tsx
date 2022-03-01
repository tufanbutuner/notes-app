import {
  AddTaskButton,
  NavbarContainer,
  NavbarLogo,
  NavbarPages,
} from "./styles";
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React, { ReactElement, useState } from "react";

import Modal from "../Modal/Modal";
import { motion } from "framer-motion";

interface Props {}

export default function Navbar({}: Props): ReactElement {
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShowModal((prev) => !prev);
  };

  return (
    <NavbarContainer>
      <NavbarLogo>Take Note</NavbarLogo>

      <NavbarPages>
        <a href="#">Sign in</a>
        <AddTaskButton
          as={motion.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleClick}
        >
          Add Task
          {showModal === true && <Modal />}
        </AddTaskButton>
      </NavbarPages>
    </NavbarContainer>
  );
}
