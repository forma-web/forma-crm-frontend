import { styled } from '@mui/material';

export const HeaderStyled = styled('header')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;

  width: 100%;
  padding: 20px 32px;

  position: fixed;
  top: 0;
  left: 0;
`;

export const HeaderBlock = styled('div')`
  display: flex;
  align-items: center;

  gap: 12px;
`;

export const HeaderLogo = styled('div')`
  width: 60px;
  height: 30px;
  border-radius: 15px;
  background-color: #ccc;
`;
