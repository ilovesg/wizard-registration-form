interface IRegistrationsFormErrors {
  [id: string]: string;
}

const required = (value: string) =>
  value ? undefined : "This field is required.";

export { type IRegistrationsFormErrors, required };
