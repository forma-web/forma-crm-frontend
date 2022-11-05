import { TFieldsData } from '../../types/form';

export type TFields = {
  [x: string]: unknown;
};

export type TFieldsWithID<T> = T & { id: number };

export type TDictionary<F extends TFields, T extends TFieldsWithID<F>> = {
  data: T[];
  fields: TFieldsData<F>;
};

export type TItem<F extends TFields, T extends TFieldsWithID<F>> = {
  data: T;
  fields: (keyof F)[];
  onEdit: (id: number) => void;
};
