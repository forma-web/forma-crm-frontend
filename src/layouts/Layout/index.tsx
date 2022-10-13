import React, { FC, memo, PropsWithChildren } from 'react';

import Header from './components/Header';
import { ContextStyled, LayoutStyled } from './styled';

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <LayoutStyled>
      <Header />
      <ContextStyled>{children}</ContextStyled>
    </LayoutStyled>
  );
};

export default memo(AppLayout);
