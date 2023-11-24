import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useAppSelector } from "../../app/hooks";
import { useNavigate } from "react-router-dom";

const UserView: React.FC = () => {
  const navigate = useNavigate();
  const { singleUser } = useAppSelector((state) => state.user);

  console.log("singleUser=>", singleUser);

  useEffect(() => {}, []);

  return (
    <>
      {singleUser && (
        <Card>
          <Card.Header>User Details</Card.Header>
          <Card.Body>
            <Card.Title>{singleUser.name}</Card.Title>
            <Card.Text>
              Email: {singleUser.email}
              <br />
              Phone: {singleUser.phone}
              <br />
            </Card.Text>
            {/* <Button onClick={() => navigate(-1)} variant="primary"> */}
            <Button onClick={() => navigate("/")} variant="primary">
              Go Back
            </Button>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default UserView;
