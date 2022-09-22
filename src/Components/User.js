import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

const User = ({ user }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{`${user.name} ${user.username}`}</Card.Title>
          <Card.Text>{user.email}</Card.Text>
          <Button variant="primary">
            <Link to={`/users/${user.id}`}>User Details</Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default User;
