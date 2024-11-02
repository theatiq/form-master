import React, { useState } from "react";

const StateFullForm = () => {
  const [name, setName] = useState("Atiqur");
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if(password.length<6){
        setError('Password must be 6 character of larger')
    }else{
        setError('')
    }
    console.log(name, email, password);
  };
  const handelNameChange = (e) => {
    setName(e.target.value);
  };
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={handelNameChange}
          type="text"
          name="name"
        />
        <br />
        <input onChange={handleChange} type="email" name="email" />
        <br />
        <input
          onChange={handlePasswordChange}
          type="password"
          name="password"
          required
        />
        <br />
        <input type="submit" value="Submit" />
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default StateFullForm;
