import React, { Fragment } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

// more info: https://bluuweb.github.io/react/formularios/#react-hook-form
const FromSignUp = () => {
  const [user, setUser] = useLocalStorage({
    nick: "",
    email: "",
    pasword: "",
  });

  function handleInputChange(element) {
    setUser({
      ...user,
      [element.target.name]: element.target.value,
    });
    user.nick || user.email & user.pasword
      ? console.log(user)
      : console.log("loging...");
  }

  function enviarDatos(event, user) {
    event.preventDefault();
    console.log(
      "enviando datos..." + user.nick + " " + user.email + " " + user.pasword
    );
  }

  return (
    <Fragment>
      <form className="left">
        <input
          type="text"
          name="nick"
          placeholder="name"
          onChange={(element) => handleInputChange(element)}
        />
        <input
          type="text"
          name="email"
          placeholder="E-mail"
          onChange={(element) => handleInputChange(element)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(element) => handleInputChange(element)}
        />
      </form>
      {/* <button type="submit" onClick={enviarDatos}>
        Sign me up
      </button> */}
    </Fragment>
  );
};

export default FromSignUp;
