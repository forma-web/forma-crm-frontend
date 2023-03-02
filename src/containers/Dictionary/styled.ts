import styled from '@emotion/styled';
import { Table } from '@mui/material';

export const TableStyled = styled(Table)`
  .MuiTableRow-root {
    td:last-child {
      width: 1px;
      white-space: nowrap;
    }

    &:last-child {
      td,
      th {
        border: none;
      }
    }
  }
`;
