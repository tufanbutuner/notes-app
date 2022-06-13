import {
  AddTaskButton,
  NavbarContainer,
  NavbarLogo,
  NavbarPages,
  Router,
} from "./styles";
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

import Link from "next/link";
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
        <Router>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>

          <li>
            <Link href="/register">
              <a>Register</a>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </li>
        </Router>
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
