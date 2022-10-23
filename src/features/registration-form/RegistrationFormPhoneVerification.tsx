import React from "react";
import { Field } from "react-final-form";
import { checkCode } from "./registrationFormValidators";

interface IRegistrationFormPhoneVerificationProps {
  code?: string;
  setCode?(code: string): void;
}

export default function RegistrationFormPhoneVerification({
  code,
  setCode,
}: IRegistrationFormPhoneVerificationProps) {
  const generateCode = (): string => {
    const digits = [];

    for (let i = 0; i < 4; i += 1) {
      digits.push(Math.floor(Math.random() * 9) + 1);
    }

    return digits.join("");
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary mb-3"
        onClick={() => setCode?.(generateCode())}
      >
        Get code
      </button>
      <Field
        name="verificationCode"
        type="text"
        component="input"
        validate={(value) => checkCode(value, code)}
      >
        {({ input, meta }) => (
          <div className="mb-3">
            <label className="form-label">Verification code</label>
            <input {...input} className="form-control" placeholder="1234" />
            {meta.error && meta.touched && <span>{meta.error}</span>}
            {code ? <div className="form-text">Your code is: {code}.</div> : ""}
          </div>
        )}
      </Field>
    </>
  );
}
