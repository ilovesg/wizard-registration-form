import React, { useState } from "react";
import { Form } from "react-final-form";
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

  const changeStep = (delta: number) => {
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

  const isLastStep = step === fieldsArr.length;

  const onSubmit = (values: Record<string, any>) => {
    if (isLastStep) {
      return alert(`Submitted with values: ${JSON.stringify(values, null, 2)}`);
    }

    return changeStep(1);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} noValidate>
          <RegistrationFormItems fields={fieldsArr[step - 1]} />
          <button
            type="button"
            className="btn btn-primary me-3"
            disabled={step === 1}
            onClick={() => changeStep(-1)}
          >
            Prev
          </button>
          <button type="submit" className="btn btn-primary me-3">
            {isLastStep ? "Submit" : "Next"}
          </button>
        </form>
      )}
    />
  );
}
