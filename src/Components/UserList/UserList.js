import React from "react";

import User from "../User/User";
import "../User/User.css";

const UserList = ({ listOfUSer }) => {
  return (
    <div>
      <div class="container">
        //{" "}
        {listOfUSer.map((el, i) => (
          <User el={el} key={i} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
