import React, { useState } from "react";
import { Form, FormSpy } from "react-final-form";
import RegistrationFormItems from "./RegistrationFormItems";
import {
  logPassFields,
  addressFields,
  phoneNumberFields,
} from "./registrationFormData";
import { IRegistrationFormField } from "./types/RegistrationFormFieldInterface";
import RegistrationFormPhoneVerification from "./RegistrationFormPhoneVerification";

export default function RegistrationForm() {
  const [step, setStep] = useState<number>(+localStorage.step || 1);
  const [code, setCode] = useState<string>("");

  const fieldsArr: IRegistrationFormField[][] = [
    logPassFields,
    addressFields,
    phoneNumberFields,
  ];

  const changeStep = (delta: number) => {
    const nextStep = step + delta;

    if (nextStep < 1) {
      setStep(1);

      localStorage.setItem("step", "1");

      return;
    }

    if (nextStep > fieldsArr.length) {
      setStep(fieldsArr.length);

      localStorage.setItem("step", String(fieldsArr.length));

      return;
    }

    localStorage.setItem("step", String(nextStep));

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
      initialValues={
        (localStorage.values && JSON.parse(localStorage.values)) || {}
      }
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <>
          <FormSpy
            onChange={(formState) => {
              localStorage.setItem("values", JSON.stringify(formState.values));
            }}
          />
          <form onSubmit={handleSubmit} noValidate>
            <RegistrationFormItems fields={fieldsArr[step - 1]}>
              {step === fieldsArr.length && (
                <RegistrationFormPhoneVerification
                  code={code}
                  setCode={setCode}
                />
              )}
            </RegistrationFormItems>
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
        </>
      )}
    />
  );
}
