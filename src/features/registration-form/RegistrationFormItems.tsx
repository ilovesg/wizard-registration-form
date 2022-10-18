import React from "react";
import { IRegistrationFormField } from "./types/RegistrationFormFieldInterface";
import RegistrationFormItem from "./RegistrationFormItem";

interface IRegistrationFormItemsProps {
  fields: IRegistrationFormField[];
}

export default function RegistrationFormItems({
  fields,
}: IRegistrationFormItemsProps) {
  return (
    <>
      {fields.map((item) => (
        <RegistrationFormItem key={item.field} item={item} />
      ))}
    </>
  );
}
