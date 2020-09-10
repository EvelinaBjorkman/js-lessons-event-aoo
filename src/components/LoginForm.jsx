import React, { useState } from "react";

const ROOT_URL = "http://yoshi.willandskill.eu:8999/api/v1/";
const LOGIN_URL = `${ROOT_URL}auth/api-token-auth/`;

export default function LoginForm() {
  const [email, setEmail] = useState("test.user@willandskill.se");
  const [password, setPassword] = useState("js-lesson-10");
  const [token, setToken] = useState(null);

  function login() {
    const payload = {
      email: email,
      password: password,
    };
    fetch(LOGIN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        setToken(data.token);
      });
  }

  return (
    <div>
      <div>
        <label>Email</label>
        <input
          name="email"
          value={email}
          onChange={(event) => setEmail(event.currentTarget.value)}
          placeholder="jhon.doe@company.com"
        />
      </div>
      <div>
        <label>Password</label>
        <input
          name="password"
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
          type="password"
        />
      </div>
      <button onClick={login}>Login</button>
    </div>
  );
}
