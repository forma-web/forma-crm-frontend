import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import React, { FC, PropsWithChildren, useCallback } from 'react';

type TDeletePopupProps = {
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
} & PropsWithChildren;

const DeletePopup: FC<TDeletePopupProps> = ({ open, onClose, onDelete, children }) => {
  const handleOnDelete = useCallback(() => {
    onClose();
    onDelete();
  }, []);

  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        {children && (
          <DialogContent>
            <DialogContentText>{children}</DialogContentText>
          </DialogContent>
        )}
        <DialogActions>
          <Button onClick={onClose}>Не удалять</Button>
          <Button onClick={handleOnDelete} autoFocus>
            Удалить
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeletePopup;
