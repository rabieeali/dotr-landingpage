import LoginForm from "components/LoginForm/LoginForm";
import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <LoginForm />
      </div>
    </>
  );
}
