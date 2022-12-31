import Navbar from "../components/Navbar";
import React from "react";
import { RegisterContainer } from "../styles/styles";
import SignUpForm from "../components/SignUpForm";
import { AuthContextProvider } from "../context/AuthContext";

export default function Register() {
  return (
    <AuthContextProvider>
      <Navbar />
      <RegisterContainer>
        <SignUpForm />
      </RegisterContainer>
    </AuthContextProvider>
  );
}
