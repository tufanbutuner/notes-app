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
import { auth } from "../../server/index";
import { motion } from "framer-motion";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const logout = async () => {
    await signOut(auth);
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
          <li>
            <button type="submit" className="btn" onClick={logout}>
              Logout
            </button>
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
