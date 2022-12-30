import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../server/index";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";
import Link from "next/link";

export default function SignUpForm() {
  const router = useRouter();
  const { register } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await register(email, password);
      router.push("/");
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}
      {loading && <p className="loading">Loading...</p>}
      <div className="form">
        <h1>Register</h1>
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
          <input type="submit" className="btn" value="Register" />
        </div>
        <div>
          <p>
            Already have an account?{" "}
            <Link href="/login" style={{ color: "blue" }}>
              Log in here
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
}
