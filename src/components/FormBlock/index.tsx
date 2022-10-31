import React, { PropsWithChildren } from 'react';
import { Control, FieldErrorsImpl, FieldValues } from 'react-hook-form';

import { BlockBodyStyled } from '../../styles/containers';
import { TFieldsData } from '../../types/form';
import Block from '../Block';

type TFormBlockProps<T extends FieldValues> = {
  control: Control<T, unknown>;
  errors: FieldErrorsImpl<T>;
  fieldsData: TFieldsData<T>;
} & PropsWithChildren;

const FormBlock = <T extends FieldValues>(props: TFormBlockProps<T>) => {
  const { control, errors, fieldsData, children } = props;

  return (
    <Block>
      <BlockBodyStyled twoColumns>
        {React.Children.map(children, (child) => {
          if (!React.isValidElement<{ name: string }>(child)) {
            return child;
          }

          const { name } = child.props;

          const { label, defaultCheck: rules } = fieldsData[name];
          const errorData = errors[name];

          return React.createElement(child.type, {
            ...{
              ...child.props,
              label,
              control,
              rules,
              error: errorData?.message,
              key: name,
            },
          });
        })}
      </BlockBodyStyled>
    </Block>
  );
};

export default FormBlock;
