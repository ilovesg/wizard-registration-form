import React from "react";
import { Form, Button } from "react-bootstrap";

export default function RegistrationForm() {
  return (
    <Form>
      <Button variant="primary" className="me-3">
        Prev
      </Button>
      <Button variant="primary" className="me-3">
        Next
      </Button>
      <Button variant="primary">Submit</Button>
    </Form>
  );
}
