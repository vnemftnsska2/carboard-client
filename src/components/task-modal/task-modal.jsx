import React from 'react';
import { Modal, Box, Typography, } from '@mui/material';
import TaskMemo from '../task-memo/task-memo';

const TaskModal = ({ open, handleClose }) => {
  const style = {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 3,
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <TaskMemo />
      </Box>
    </Modal>
  );
};

export default TaskModal;