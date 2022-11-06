import { Button, Dialog, DialogActions, DialogContent, DialogContentText } from '@mui/material';
import React, { FC, PropsWithChildren, useCallback } from 'react';

type TDeletePopupProps = {
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
} & PropsWithChildren;

const DeletePopup: FC<TDeletePopupProps> = ({ open, onClose, onDelete, children }) => {
  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogContent>
          <DialogContentText>{children ?? 'Вы уверены, что хотите удалить?'}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onDelete}>Удалить</Button>
          <Button onClick={onClose} variant="outlined">
            Не удалять
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeletePopup;
