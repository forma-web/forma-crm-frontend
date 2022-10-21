import React, { FC, memo, PropsWithChildren } from 'react';

import Header from './components/Header';
import { ContextStyled, LayoutStyled } from './styled';

type TLayoutProps = {
  isAuth?: boolean;
} & PropsWithChildren;

const Layout: FC<TLayoutProps> = ({ children, isAuth }) => {
  return (
    <LayoutStyled>
      <Header isAuth={isAuth} />
      <ContextStyled>{children}</ContextStyled>
    </LayoutStyled>
  );
};

export default memo(Layout);
