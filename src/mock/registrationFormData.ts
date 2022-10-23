import type { IRegistrationFormField } from "../features/registration-form";

export const logPassFields: IRegistrationFormField[] = [
  {
    field: "login",
    required: true,
    label: "Login",
    type: "text",
    placeholder: "Login",
  },
  {
    field: "email",
    required: true,
    label: "Email",
    type: "email",
    placeholder: "Email",
  },
  {
    field: "password",
    required: false,
    label: "Password",
    type: "password",
    placeholder: "Password",
  },
  {
    field: "repeatPassword",
    required: false,
    label: "Repeat password",
    type: "password",
    placeholder: "Repeat password",
  },
];

export const addressFields: IRegistrationFormField[] = [
  {
    field: "country",
    required: false,
    label: "Country",
    type: "text",
    placeholder: "Country",
  },
  {
    field: "city",
    required: false,
    label: "City",
    type: "text",
    placeholder: "City",
  },
  {
    field: "street",
    required: false,
    label: "Street",
    type: "text",
    placeholder: "Street",
  },
  {
    field: "building",
    required: false,
    label: "Building",
    type: "number",
    placeholder: "Building",
  },
];

export const phoneNumberFields: IRegistrationFormField[] = [
  {
    field: "phone",
    required: false,
    label: "Phone number",
    type: "tel",
    placeholder: "Phone number",
  },
];
