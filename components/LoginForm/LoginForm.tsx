import React, { useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth } from "../../server/index";
import { useRouter } from "next/router";

export default function LoginForm() {
  const router = useRouter();
  const [user, setUser] = useState<any>({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  useEffect(() => {
    if (user) {
      onAuthStateChanged(auth, (currentUser?: any) => {
        setUser(currentUser);
        console.log(`${currentUser} has logged in`);
      });
    } else {
      console.log("User not logged in");
    }
  }, [user]);

  return (
    <>
      <span>Welcome {user?.email}!</span>

      <div className="form">
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
          <button type="submit" className="btn" onClick={login}>
            Login
          </button>
        </div>
      </div>
      <button type="submit" className="btn" onClick={logout}>
        Logout
      </button>
    </>
  );
}
