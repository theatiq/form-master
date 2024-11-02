import React from "react";
import useInputState from "../../Hooks/useInputState";

const Hookform = () => {
  //   const [name, handelNameChange] = useInputState("atiq");
  const emailState = useInputState("atiq@gmail.com");
  const handleSubmit = (e) => {
    console.log("Form data", emailState.value);
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input
          value={name}
          onChange={handelNameChange}
          type="text"
          name="name"
        /> */}
        <br />
        <input {...emailState} type="email" name="email" />
        <br />
        <input type="password" name="password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Hookform;
