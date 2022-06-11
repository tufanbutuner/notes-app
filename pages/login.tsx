import Image from "next/image";
import LoginForm from "../components/LoginForm";
import Navbar from "../components/Navbar";
import React from "react";
import { RegisterContainer } from "../styles/styles";
import image from "/public/register-image.svg";

export default function Login() {
  return (
    <>
      <Navbar />
      <RegisterContainer>
        <div>
          <Image src={image} alt="" />
        </div>
        <LoginForm />
      </RegisterContainer>
    </>
  );
}
