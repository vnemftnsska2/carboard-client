import React, { useRef, } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  TextField,
  DialogActions,
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  FormHelperText,
  FormControlLabel,
  Radio,
  RadioGroup,
  Checkbox,
} from '@mui/material';

import NumbersIcon from '@mui/icons-material/Numbers';
import FiberNewOutlinedIcon from '@mui/icons-material/FiberNewOutlined';

const TaskModal = ({ open, addTask, updateTask, handleClose }) => {
  const taskFormRef = useRef();
  const hanldleSubmit = () => {
    const param = {};
    const taskForm = new FormData(taskFormRef.current);
    taskForm.forEach((v, k) => param[k] = v);
    addTask(param, resetForm);
  };

  const resetForm = () => {
    const taskForm = taskFormRef.current;
    taskForm.reset();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        {updateTask ? `no. ${updateTask.rowno}` : <FiberNewOutlinedIcon color='error' fontSize='medium'/>} 작업표
      </DialogTitle>
      <DialogContent>
        <form ref={taskFormRef}>
          <input type="hidden" name="idx" value={updateTask?.idx || ''}/>
          <Grid container spacing={2}>
            <Grid item xs={6} md={3}>
              <TextField
                label="입고날짜"
                type="date"
                margin="dense"
                variant="standard"
                focused
                name="delivery_date"
                value={updateTask?.delivery_date ? updateTask.delivery_date.substr(0, 10) : ''}
              />
            </Grid>
            <Grid item md={2}></Grid>
            <Grid item xs={6} md={5} >
              <TextField
                label="담당자"
                margin="dense"
                variant="standard"
                focused
                name="manager"
                value={updateTask?.manager || ''}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <TextField
                label="카마스터"
                margin="dense"
                variant="standard"
                fullWidth
                focused
                name="car_master"
                value={updateTask?.car_master || ''}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <TextField
                label="차종"
                margin="dense"
                variant="standard"
                fullWidth
                focused
                name="car_type"
                value={updateTask?.car_type || ''}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <TextField
                label="고객성명"
                margin="dense"
                variant="standard"
                fullWidth
                focused
                name="customer_name"
                value={updateTask?.customer_name || ''}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <TextField
                label="고객번호"
                margin="dense"
                variant="standard"
                fullWidth
                focused
                name="customer_phone"
                value={updateTask?.customer_phone || ''}
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <TextField
                label="전면"
                margin="dense"
                variant="standard"
                focused
                name="car_front"
                value={updateTask?.car_front || ''}
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <TextField
                label="측면(1열)"
                margin="dense"
                variant="standard"
                fullWidth
                focused
                name="car_side_a"
                value={updateTask?.car_side_a || ''}
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <TextField
                label="측면(2/3열)"
                margin="dense"
                variant="standard"
                fullWidth
                focused
                name="car_side_b"
                value={updateTask?.car_side_b || ''}
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <TextField
                label="후면"
                margin="dense"
                variant="standard"
                fullWidth
                focused
                name="car_back"
                value={updateTask?.car_back || ''}
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <TextField
                label="파노라마"
                margin="dense"
                variant="standard"
                fullWidth
                focused
                name="panorama"
                value={updateTask?.panorama || ''}
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <TextField
                label="블랙박스"
                margin="dense"
                variant="standard"
                fullWidth
                focused
                name="blackbox"
                value={updateTask?.blackbox || ''}
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <TextField
                label="PPF"
                margin="dense"
                variant="standard"
                fullWidth
                focused
                name="ppf"
                value={updateTask?.ppf || ''}
              />
            </Grid>
            <Grid item xs={6} md={12}>
              <TextField
                label="기타"
                margin="dense"
                variant="standard"
                fullWidth
                focused
                name="etc"
                value={updateTask?.etc || ''}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl component="fieldset">
                <FormLabel component="legend" style={{ fontSize: '0.7rem', color: '#1976d2'}}>코일매트</FormLabel>
                <RadioGroup
                  row
                  aria-label="coil-matt"
                  defaultValue="D"
                  value={updateTask?.coil_matt || ''}
                  name="coil_matt">
                  <FormControlLabel value="D" control={<Radio size="small" />} label="딜러" />
                  <FormControlLabel value="C" control={<Radio size="small" />} label="카보드" />
                  <FormControlLabel value="E" control={<Radio size="small" />} label="없음" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend" style={{fontSize: '0.7rem', color: '#1976d2'}}>보증서</FormLabel>
                <FormGroup aria-label="position" row>
                  <FormControlLabel
                    label="유리막"
                    name="glass_film"
                    value="Y"
                    labelPlacement="end"
                    checked={updateTask?.glass_film === 'Y' ? true : false }
                    control={<Checkbox size="small" />}
                  />
                  <FormControlLabel
                    label="썬팅"
                    name="tinting"
                    value="Y"
                    labelPlacement="end"
                    checked={updateTask?.tinting === 'Y' ? true : false }
                    control={<Checkbox size="small" />}
                  />
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid item xs={6} md={4}>
              <TextField
                label="출고날짜"
                type="date"
                margin="dense"
                variant="standard"
                focused
                name="release_date"
                value={updateTask?.release_date ? updateTask.release_date.substr(0, 10) : ''}
              />
            </Grid>
            <Grid item xs={6} md={2}>
              <FormHelperText style={{paddingTop:'3px', fontSize: '0.75rem', color: '#1976d2'}}>출고서류</FormHelperText>
              <FormControl>
                <Checkbox
                  size=""
                  style={{marginLeft: '8px', verticalAlign: 'middle'}}
                  name="release_doc"
                  value={updateTask?.release_doc || ''}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6} md={4}>
              <TextField
                label="결제방식"
                margin="dense"
                variant="standard"
                fullWidth
                focused
                name="payment_type"
                value={updateTask?.payment_type || ''}
              />
            </Grid>
            <Grid item xs={6} md={2}>
              <FormHelperText style={{paddingTop:'3px', fontSize: '0.75rem', color: '#1976d2'}}>결재완료</FormHelperText>
              <FormControl>
                <Checkbox
                  size=""
                  style={{marginLeft: '8px', verticalAlign: 'middle'}}
                  name="payment_completed"
                />
              </FormControl>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>취소</Button>
        <Button onClick={hanldleSubmit}>{updateTask ? '수정' : '추가'}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default TaskModal;