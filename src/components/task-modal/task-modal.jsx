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
import { FormatAlignRightTwoTone } from '@mui/icons-material';

const TaskModal = ({ open, addTask, handleClose }) => {
  const taskFormRef = useRef();

  const hanldleConsole = () => {
    const param = {};
    const formData = new FormData(taskFormRef.current);
    formData.forEach((v, k) => param[k] = v);
    addTask(param, resetForm);
  };

  const resetForm = () => {
    const taskForm = taskFormRef.current;
    taskForm.reset();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        작업지시서 등록
      </DialogTitle>
      <DialogContent>
        <form ref={taskFormRef} onSubmit={hanldleConsole}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={3}>
              <TextField
                label="입고날짜"
                type="date"
                margin="dense"
                variant="standard"
                focused
                name="delivery_date"
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
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <TextField
                label="전면"
                margin="dense"
                variant="standard"
                focused
                name="car_front"
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
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl component="fieldset">
                <FormLabel component="legend" style={{ fontSize: '0.7rem', color: '#1976d2'}}>코일매트</FormLabel>
                <RadioGroup
                  row
                  aria-label="coil-matt"
                  defaultValue="D"
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
                    control={<Checkbox size="small" />}
                  />
                  <FormControlLabel
                    label="썬팅"
                    name="tinting"
                    value="Y"
                    labelPlacement="end"
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
              />
            </Grid>
            <Grid item xs={6} md={2}>
              <FormHelperText style={{paddingTop:'3px', fontSize: '0.75rem', color: '#1976d2'}}>출고서류</FormHelperText>
              <FormControl>
                <Checkbox
                  size=""
                  style={{marginLeft: '8px', verticalAlign: 'middle'}}
                  name="release_doc"
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
        <Button onClick={hanldleConsole}>저장</Button>
      </DialogActions>
    </Dialog>
  );
};

export default TaskModal;