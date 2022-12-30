import Image from "next/image";
import LoginForm from "../components/LoginForm";
import Navbar from "../components/Navbar";
import React from "react";
import { RegisterContainer } from "../styles/styles";
import { AuthContextProvider } from "../context/AuthContext";

export default function Login() {
  return (
    <AuthContextProvider>
      <Navbar />
      <RegisterContainer>
        <LoginForm />
      </RegisterContainer>
    </AuthContextProvider>
  );
}
