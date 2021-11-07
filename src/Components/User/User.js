import React from "react";
import { Link } from "react-router-dom";
import "../User/User.css";
const User = ({ el }) => {
  return (
    <div>
      <Link to={`/User/${el.id}`}>
        <div class="card">
          <img
            src="https://www.netclipart.com/pp/m/135-1353105_img-avatar-2-png-illustration.png"
            alt="Avatar"
          />
          <div class="container">
            <h4>
              <b>{el.name}</b>
            </h4>
            <p>{el.mail}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default User;
