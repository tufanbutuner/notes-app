import Navbar from "../components/Navbar";
import React from "react";
import { RegisterContainer } from "../styles/styles";
import SignUpForm from "../components/SignUpForm";

export default function register() {
  return (
    <>
      <Navbar />
      <RegisterContainer>
        <SignUpForm />
      </RegisterContainer>
    </>
  );
}
