import { Dialog, DialogContent, } from '@mui/material';
import React from 'react';

const ImgViewer = ({open, fileName, handleClose}) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="lg">
      <DialogContent>
        <img
          src={`${process.env.REACT_APP_API_SERVER || 'http://localhost:3030'}/image/${fileName}`}
          width={800}
          alt={fileName}
        />
      </DialogContent>
    </Dialog>
  );
}

export default ImgViewer;