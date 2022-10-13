export type TFieldsData<T> = {
  [K in keyof T]: {
    label: string;
    defaultCheck?: Record<string, unknown>;
  };
};
