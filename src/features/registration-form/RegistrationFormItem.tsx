/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { Field } from "react-final-form";
import { IRegistrationFormField } from "./types/RegistrationFormFieldInterface";
import { required } from "./registrationFormValidators";

interface IRegistrationFormItemProps {
  item: IRegistrationFormField;
}

export default function RegistrationFormItem({
  item,
}: IRegistrationFormItemProps) {
  return (
    <Field
      name={item.field}
      type={item.type}
      component="input"
      validate={item.required ? required : undefined}
    >
      {({ input, meta }) => (
        <div className="mb-3">
          <label className="form-label">{item.label}</label>
          <input
            {...input}
            className="form-control"
            placeholder={item.placeholder}
          />
          {meta.error && meta.touched && <span>{meta.error}</span>}
        </div>
      )}
    </Field>
  );
}
