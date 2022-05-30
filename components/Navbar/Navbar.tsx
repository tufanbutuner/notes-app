import {
  AddTaskButton,
  NavbarContainer,
  NavbarLogo,
  NavbarPages,
} from "./styles";
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

import Modal from "../Modal/Modal";
import { motion } from "framer-motion";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <NavbarContainer>
      <NavbarLogo>Take Note</NavbarLogo>
      <NavbarPages>
        <AddTaskButton
          as={motion.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleClick}
          open={showModal}
        >
          Add Task
        </AddTaskButton>
      </NavbarPages>
      {showModal === true && <Modal setShowModal={setShowModal} />}
    </NavbarContainer>
  );
}
