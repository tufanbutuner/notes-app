import Image from "next/image";
import Navbar from "../components/Navbar";
import React from "react";
import { RegisterContainer } from "../styles/styles";
import SignUpForm from "../components/SignUpForm";
import image from "/public/register-image.svg";

export default function Register() {
  return (
    <>
      <Navbar />
      <RegisterContainer>
        <SignUpForm />
      </RegisterContainer>
    </>
  );
}
