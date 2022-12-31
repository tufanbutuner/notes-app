import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/router";
import Link from "next/link";
import { FormContainer, SubmitButton } from "./styles";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      router.push("/");
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}
        {loading && <p className="loading">Loading...</p>}

        <h1>Login</h1>
        <div className="form-body">
          <div className="email">
            <label className="form__label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form__input"
              placeholder="Email"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(event.target.value)
              }
            />
          </div>
          <div className="password">
            <label className="form__label" htmlFor="password">
              Password
            </label>
            <input
              className="form__input"
              type="password"
              id="password"
              placeholder="Password"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(event.target.value)
              }
            />
          </div>
        </div>
        <div className="footer">
          <SubmitButton type="submit" className="btn" value="Login" />
        </div>
        <div>
          <p>
            Don&apos;t have an account?{" "}
            <Link href="/register" style={{ color: "blue" }}>
              Sign up here
            </Link>
          </p>
        </div>
      </form>
    </FormContainer>
  );
}
