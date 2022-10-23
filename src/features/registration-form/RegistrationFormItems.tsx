import React from "react";
import { IRegistrationFormField } from "./types/RegistrationFormFieldInterface";
import RegistrationFormItem from "./RegistrationFormItem";
import RegistrationFormPhoneVerification from "./RegistrationFormPhoneVerification";

interface IRegistrationFormItemsProps {
  fields: IRegistrationFormField[];
  phoneCode?: string;
  onPhoneCodeChange?(code: string): void;
}

export default function RegistrationFormItems({
  fields,
  phoneCode,
  onPhoneCodeChange,
}: IRegistrationFormItemsProps) {
  return (
    <>
      {fields.map((item) =>
        item.type === "tel" ? (
          <React.Fragment key={item.field}>
            <RegistrationFormItem item={item} />
            <RegistrationFormPhoneVerification
              code={phoneCode}
              setCode={onPhoneCodeChange}
            />
          </React.Fragment>
        ) : (
          <RegistrationFormItem key={item.field} item={item} />
        )
      )}
    </>
  );
}
