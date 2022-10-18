import React, { useState } from "react";
import { Form } from "react-final-form";
import RegistrationFormItems from "./RegistrationFormItems";
import { logPassFields } from "./registrationFormData";
import { IRegistrationFormField } from "./types/RegistrationFormFieldInterface";

export default function RegistrationForm() {
  const [step, setStep] = useState<number>(1);

  let fields: IRegistrationFormField[] = [];

  switch (step) {
    default:
      fields = logPassFields;
  }

  const onSubmit = (): void => {
    alert("Submitted!");
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <RegistrationFormItems fields={fields} />
          <button type="button" className="btn btn-primary me-3">
            Prev
          </button>
          <button type="button" className="btn btn-primary me-3">
            Next
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      )}
    />
  );
}
