import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
const AddUser = (props) => {
  const [entredUsername, setEntredUsername] = useState("");
  const [entredAge, setEntredAge] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
    if (entredUsername.trim().length === 0 || entredAge.trim().length === 0) {
      return;
    }
    if (+entredAge < 1) {
      return;
    }
    props.onAddUser(entredUsername,entredAge);
    setEntredUsername("");
    setEntredAge("");
  };
  const usernameChangeHandler = (event) => {
    setEntredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEntredAge(event.target.value);
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={entredUsername}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="username">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={entredAge}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};
export default AddUser;
