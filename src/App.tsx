import React from "react";
import { Container } from "react-bootstrap";
import "./App.scss";
import RegistrationForm from "./features/registration-form/RegistrationForm";

function App() {
  return (
    <main>
      <Container>
        <h1>Registration</h1>
        <RegistrationForm />
      </Container>
    </main>
  );
}

export default App;
