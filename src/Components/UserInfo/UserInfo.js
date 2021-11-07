import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const UserInfo = (props) => {
  const userFound = props.listOfUSer.find(
    (user) => user.x == props.match.params.title
  );
  return (
    <div>
      <div class="name">
        <h6 class="f-w-600">{userFound && userFound.name}</h6>
        <p>{userFound && userFound.company.name}</p>{" "}
      </div>

      <div class="email">
        <p class="m-b-10 f-w-600">Email</p>
        <h6>{userFound && userFound.email}</h6>
      </div>
      <div class="phone">
        <p>Phone</p>
        <h6>{userFound && userFound.phone}</h6>
      </div>

      <div class="city">
        <p>City</p>
        <h6> {userFound && userFound.address.city}</h6>
      </div>
      <div class="street">
        <p>street</p>
        <h6> {userFound && userFound.address.street}</h6>
      </div>

      <div>
        <h6 class="website">website</h6>

        <h6> {userFound && userFound.website}</h6>
      </div>

      <Link to="/">
        {" "}
        <Button variant="secondary" style={{ marginLeft: "700px" }}>
          Home
        </Button>{" "}
      </Link>
    </div>
  );
};
