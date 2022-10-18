import { IRegistrationForm } from "./RegistrationFormInterface";

export interface IRegistrationFormField {
  field: keyof IRegistrationForm;
  required: boolean;
  label: string;
  type: "text" | "number" | "email" | "password" | "tel";
  placeholder?: string;
}
