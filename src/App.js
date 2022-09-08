import React, { useState } from "react";
import AddUser from "./components/User/AddUser";
import UserList from "./components/User/UserList";

function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (uname, uage) => {
    setUserList((prev) => {
      return [
        ...prev,
        { name: uname, age: uage, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
