interface IRegistrationsFormErrors {
  [id: string]: string;
}

const required = (value: string) =>
  value ? undefined : "This field is required.";

const checkCode = (value: string, code?: string) =>
  code && value === code ? undefined : "Verification code is incorrect.";

export { type IRegistrationsFormErrors, required, checkCode };
