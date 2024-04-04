import React from "react";

function LoginPage() {
  return (
    <>
      <div>
        <form>
          <label><b>Username</b></label>
          <input type="text" placeholder="Enter Username" />
          <br/><br/>
          <label ><b>Password</b></label>
          <input type="password" placeholder="Enter Password"  />
          <br/><br/>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}
export default LoginPage;
