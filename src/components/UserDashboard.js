import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Button, Col} from "react-bootstrap";

function UserDashboard() {
  return(
    <div>
      <Card as={Col}>
        <Row className="mx-0">
          <Button as={Col} variant="primary">
            Button #1
          </Button>
          <Button as={Col} variant="secondary" className="mx-2">
            Button #2
          </Button>
          <Button as={Col} variant="danger">
            Button #3
          </Button>
        </Row>
      </Card>
    </div>
  );
}
export default UserDashboard;
