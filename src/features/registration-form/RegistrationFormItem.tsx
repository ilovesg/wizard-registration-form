/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { Field } from "react-final-form";
import { IRegistrationFormField } from "./types/RegistrationFormFieldInterface";

interface IRegistrationFormItemProps {
  item: IRegistrationFormField;
}

export default function RegistrationFormItem({
  item,
}: IRegistrationFormItemProps) {
  return (
    <div className="mb-3">
      <label className="form-label">{item.label}</label>
      <Field
        type={item.type}
        className="form-control"
        name={item.field}
        component="input"
        placeholder={item.placeholder || ""}
      />
    </div>
  );
}
