import { Fragment } from "react";
import NavBar from "../../components/NavBar";
import FromSignUp from "../../components/FromSignUp";
import DynamicSingUp from "../../components/DynamicSingUp";

function SignUp() {
  return (
    <Fragment>
      <NavBar></NavBar>
      <main>
        <div id="login-box">
          <h2>Sign up</h2>
          <FromSignUp />
          <div className="or">OR</div>
          <DynamicSingUp />
          <button type="submit">Sign me up</button>
        </div>
      </main>
    </Fragment>
  );
}

export default SignUp;
