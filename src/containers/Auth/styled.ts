import { styled } from '@mui/material';

// import { ReactComponent as Logo } from '../../assets/logo.svg';

// export const AuthLogo = styled(Logo)`
//   width: 162px;
// `;

export const AuthBlock = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 96px;

  margin: auto;
  width: 420px;
`;

export const AuthForm = styled('form')`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const AuthFields = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
`;
