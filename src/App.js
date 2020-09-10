import React from "react";

function App() {
  function login() {
    console.log("login");
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
