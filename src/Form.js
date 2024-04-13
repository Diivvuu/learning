import React, { useState } from "react";
import "./Form.css";
const Form = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // const handleName = (e) => {
  //   console.log(e.target.value);
  //   setName(e.target.value);
  // };
  // const handleEmail = (e) => {
  //   console.log(e.target.value);
  //   setEmail(e.target.value);
  // };
  // const handlePassword = (e) => {
  //   console.log(e.target.value);
  //   setPassword(e.target.value);
  // };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    console.log(e.target.value);
    e.preventDefault();
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInput}
        ></input>
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInput}
        ></input>
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInput}
        ></input>
      </label>
      <button type="Submit">Submit</button>
    </form>
  );
};

export default Form;
