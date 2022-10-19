/* eslint-disable react/require-default-props */
import React from "react";
import { IRegistrationFormField } from "./types/RegistrationFormFieldInterface";
import RegistrationFormItem from "./RegistrationFormItem";

interface IRegistrationFormItemsProps {
  fields: IRegistrationFormField[];
  children?: React.ReactNode;
}

export default function RegistrationFormItems({
  fields,
  children = null,
}: IRegistrationFormItemsProps) {
  return (
    <>
      {fields.map((item) => (
        <RegistrationFormItem key={item.field} item={item} />
      ))}
      {children}
    </>
  );
}
