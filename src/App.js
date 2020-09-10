import React from "react";

const ROOT_URL = "http://yoshi.willandskill.eu:8999/api/v1/";
const LOGIN_URL = `${ROOT_URL}auth/api-token-auth/`;

function App() {
  function login() {
    const email = emailInput.current.value
    const password = passwordInput.current.value
    console.log(email, password);
    fetch(LOGIN_URL);
  }

  return (
    <div>
      <h1>Event App</h1>
      <div>
        <div>
          <label>Email</label>
          <input name="email" placeholder="jhon.doe@company.com"/>
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password"/>
        </div>
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}

export default App;
