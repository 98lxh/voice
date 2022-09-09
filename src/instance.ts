import { Form } from "useless-ui";

export type FormInstance = InstanceType<typeof Form> & {
  validate(callback: (hasError: boolean) => any): any;
};
