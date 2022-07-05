import Image from "next/image";
import Navbar from "../components/Navbar";
import React from "react";
import { RegisterContainer } from "../styles/styles";
import SignUpForm from "../components/SignUpForm";
import image from "/public/register-image.svg";

export default function Account() {
  return (
    <>
      <Navbar />
      <RegisterContainer>
        <div>
          <Image src={image} alt="" />
        </div>
        {/* <SignUpForm {variant === "login" ? "login" : "register"}/> */}
        <SignUpForm />
      </RegisterContainer>
    </>
  );
}
