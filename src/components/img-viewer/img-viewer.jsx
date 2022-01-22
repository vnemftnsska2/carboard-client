import { Dialog, DialogContent, } from '@mui/material';
import React from 'react';

const ImgViewer = ({open, fileName, handleClose}) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="lg">
      <DialogContent>
        <img
          src={`http://localhost:3030/image/${fileName}`}
          alt={fileName}
        />
      </DialogContent>
    </Dialog>
  );
}

export default ImgViewer;