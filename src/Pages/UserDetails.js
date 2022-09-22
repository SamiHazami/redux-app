import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  //useState Hook
  const [user, setUser] = useState({});
  // user : state of our data
  const { id } = useParams();

  // console.log(user);

  const getUser = async () => {
    const getRespond = await Axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    setUser(getRespond.data);
    console.log(getRespond.data);

    // .catch((err) => {
    //   console.log(err);
    // });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>{user.email}</Card.Text>
          <Card.Text>{user.address?.street}</Card.Text>
          <Card.Text>{user.address?.geo?.lng}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserDetails;
