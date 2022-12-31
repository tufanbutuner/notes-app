import {
  AddTaskButton,
  NavbarContainer,
  NavbarLogo,
  NavbarPages,
  Router,
  MenuIcon,
} from "./styles";
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";

import Modal from "../Modal/Modal";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";
import { AuthContextProvider, useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");
  const [showLinks, setShowLinks] = useState(true);
  const { logout, currentUser } = useAuth();

  const handleClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleMenu = (e) => {
    e.preventDefault();
    setShowLinks(!showLinks);
  };

  const handleLogout = (e) => {
    setError("");

    try {
      logout();
      router.push("/login");
      console.log("You have been logged out");
    } catch (error) {
      setError("Failed to log out");
    }
  };

  return (
    <>
      <NavbarContainer>
        <NavbarLogo>Take Note</NavbarLogo>
        <NavbarPages>
          {showLinks && (
            <AuthContextProvider>
              {currentUser ? (
                <Router>
                  <li>{currentUser.email}</li>
                  <li>
                    <button
                      type="submit"
                      className="btn"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </Router>
              ) : (
                <Router>
                  <li>
                    <Link href="/register">Register</Link>
                  </li>
                  <li>
                    <Link href="/login">Login</Link>
                  </li>
                </Router>
              )}

              {currentUser && (
                <AddTaskButton
                  as={motion.button}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleClick}
                  open={showModal}
                >
                  Add Task
                </AddTaskButton>
              )}
            </AuthContextProvider>
          )}
        </NavbarPages>
        {showModal === true && <Modal setShowModal={setShowModal} />}
      </NavbarContainer>
      <MenuIcon onClick={handleMenu} size={36} />
    </>
  );
}
