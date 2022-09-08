import Create from "./Create.vue";

export type CreateModaInstance = InstanceType<typeof Create> & {
  onDisplay(): any;
};
