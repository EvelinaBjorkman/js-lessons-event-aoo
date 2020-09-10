import React, { useRef, useState } from "react";

const ROOT_URL = "http://yoshi.willandskill.eu:8999/api/v1/";
const LOGIN_URL = `${ROOT_URL}auth/api-token-auth/`;

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    });
  }

  return (
    <div>
      <h1>Event App</h1>
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
    </div>
  );
}

export default App;
