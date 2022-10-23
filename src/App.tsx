import React from "react";
import { Container } from "react-bootstrap";
import {
  type IRegistrationFormField,
  RegistrationForm,
} from "./features/registration-form";
import {
  logPassFields,
  addressFields,
  phoneNumberFields,
} from "./mock/registrationFormData";
import "./App.scss";

const mockedFields: IRegistrationFormField[][] = [
  logPassFields,
  addressFields,
  phoneNumberFields,
];

function App() {
  return (
    <main>
      <Container>
        <h1>Registration</h1>
        <RegistrationForm fields={mockedFields} />
      </Container>
    </main>
  );
}

export default App;
