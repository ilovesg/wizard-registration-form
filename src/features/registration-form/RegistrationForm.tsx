import React, { useState } from "react";
import { Form, FormSpy } from "react-final-form";
import { LocalStorage } from "../../lib/storage";
import RegistrationFormItems from "./RegistrationFormItems";
import type { IRegistrationFormField } from "./types/RegistrationFormFieldInterface";

type FormStore = {
  step: number;
  values: Record<string, unknown>;
};

const formStore = new LocalStorage<FormStore>("formStore");

const INITIAL_VALUES = formStore.get("values") ?? {};

interface RegistrationFormProps {
  fields: IRegistrationFormField[][];
}

export const RegistrationForm = ({ fields = [] }: RegistrationFormProps) => {
  const [step, setStep] = useState<number>(() => formStore.get("step") ?? 1);
  const [phoneCode, setPhoneCode] = useState<string>("");

  const changeStep = (delta: number) => {
    const nextStep = step + delta;

    if (nextStep < 1) {
      setStep(1);
      return;
    }

    if (nextStep > fields.length) {
      setStep(fields.length);
      return;
    }

    setStep(nextStep);
  };

  const isLastStep = step === fields.length;

  const onSubmit = (valuesRaw: Record<string, unknown>) => {
    if (isLastStep) {
      return alert(
        `Submitted with values: ${JSON.stringify(valuesRaw, null, 2)}`
      );
    }

    return changeStep(1);
  };

  React.useEffect(
    function handleStepForSaveToStore() {
      formStore.set("step", step);
    },
    [step]
  );

  return (
    <Form
      initialValues={INITIAL_VALUES}
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} noValidate>
          <FormSpy
            onChange={(formState) => {
              formStore.set("values", formState.values);
            }}
          />
          <RegistrationFormItems
            fields={fields[step - 1]}
            phoneCode={phoneCode}
            onPhoneCodeChange={setPhoneCode}
          />
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
};
