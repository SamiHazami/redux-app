import React from "react";
import UserList from "../Components/UserList";

const UsersPage = ({ users }) => {
  return (
    <div>
      <UserList users={users} />
    </div>
  );
};

export default UsersPage;
