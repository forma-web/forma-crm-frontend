import React, { FC, PropsWithChildren } from 'react';

import { TitleH4 } from '../../styles/typography';
import { BlockStyled } from './styled';

type TBlockProps = {
  title?: string;
} & PropsWithChildren;

const Block: FC<TBlockProps> = ({ title, children }) => {
  return (
    <BlockStyled>
      {title && <TitleH4>{title}</TitleH4>}
      {children}
    </BlockStyled>
  );
};

export default Block;
