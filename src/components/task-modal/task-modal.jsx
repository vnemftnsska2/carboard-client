import React from 'react';
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
  FormControlLabel,
  Radio,
  RadioGroup,
  Checkbox,
} from '@mui/material';

const TaskModal = ({ open, handleClose }) => {

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          작업지시서 등록
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={1}>
            <Grid item xs={12} md={5}>
              <TextField
                label="카마스터"
                margin="dense"
                variant="standard"
                fullWidth
                focused
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <TextField
                label="차종"
                margin="dense"
                variant="standard"
                fullWidth
                focused
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <TextField
                label="고객성명"
                margin="dense"
                variant="standard"
                fullWidth
                focused
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <TextField
                label="고객번호"
                margin="dense"
                variant="standard"
                fullWidth
                focused
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <TextField
                label="전면"
                margin="dense"
                variant="standard"
                focused
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <TextField
                label="측면(1열)"
                margin="dense"
                variant="standard"
                fullWidth
                focused
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <TextField
                label="측면(2/3열)"
                margin="dense"
                variant="standard"
                fullWidth
                focused
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <TextField
                label="후면"
                margin="dense"
                variant="standard"
                fullWidth
                focused
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <TextField
                label="파노라마"
                margin="dense"
                variant="standard"
                fullWidth
                focused
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <TextField
                label="블랙박스"
                margin="dense"
                variant="standard"
                fullWidth
                focused
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <TextField
                label="PPF"
                margin="dense"
                variant="standard"
                fullWidth
                focused
              />
            </Grid>
            <Grid item xs={6} md={12}>
              <TextField
                label="기타"
                margin="dense"
                variant="standard"
                fullWidth
                focused
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl component="fieldset">
                <FormLabel component="legend" style={{ fontSize: '0.7rem', color: '#1976d2'}}>코일매트</FormLabel>
                <RadioGroup row aria-label="coil-matt" name="row-radio-buttons-group">
                  <FormControlLabel value="D" control={<Radio size=""/>} label="딜러" />
                  <FormControlLabel value="C" control={<Radio size=""/>} label="카보드" />
                  <FormControlLabel value="E" control={<Radio size=""/>} label="없음" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend" style={{ fontSize: '0.7rem', color: '#1976d2'}}>보증서</FormLabel>
                <FormGroup aria-label="position" row>
                  <FormControlLabel
                    value="G"
                    control={<Checkbox size=""/>}
                    label="유리막 보증서"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="S"
                    control={<Checkbox size=""/>}
                    label="썬팅 보증서"
                    labelPlacement="end"
                  />
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid item xs={6} md={12}>
              <TextField
                label="출고서류"
                margin="dense"
                variant="standard"
                focused
              />
            </Grid>
            <Grid item xs={6} md={12}>
              <TextField
                label="출고서류 (복사)"
                margin="dense"
                variant="standard"
                focused
              />
              <TextField
                label="출고날짜"
                margin="dense"
                variant="standard"
                focused
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>취소</Button>
          <Button onClick={handleClose}>저장</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TaskModal;