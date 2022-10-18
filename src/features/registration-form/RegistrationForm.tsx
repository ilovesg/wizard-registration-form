import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import RegistrationFormItems from "./RegistrationFormItems";
import {
  logPassFields,
  addressFields,
  phoneNumberFields,
} from "./registrationFormData";
import { IRegistrationFormField } from "./types/RegistrationFormFieldInterface";

export default function RegistrationForm() {
  const [step, setStep] = useState<number>(1);

  const fieldsArr: IRegistrationFormField[][] = [
    logPassFields,
    addressFields,
    phoneNumberFields,
  ];

  const changeStep = (delta: number) => () => {
    const nextStep = step + delta;

    if (nextStep < 1) {
      setStep(1);

      return;
    }

    if (nextStep > fieldsArr.length) {
      setStep(fieldsArr.length);

      return;
    }

    setStep(nextStep);
  };

  const onSubmit = (): void => {
    alert("Submitted!");
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit}>
          <RegistrationFormItems fields={fieldsArr[step - 1]} />
          <button
            type="button"
            className="btn btn-primary me-3"
            onClick={changeStep(-1)}
            disabled={step === 1}
          >
            Prev
          </button>
          <button
            type="button"
            className="btn btn-primary me-3"
            onClick={changeStep(1)}
            disabled={step === fieldsArr.length}
          >
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
