import React, { useRef, useEffect, useState, } from 'react';
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
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from '@mui/material';
import useForm from '../use-form/useForm';
import FiberNewOutlinedIcon from '@mui/icons-material/FiberNewOutlined';
import ClearIcon from '@mui/icons-material/HighlightOff';

const initFormValues = {
  status: 1,
  delivery_date: '',
  manager: '',
  car_master: '',
  car_type: '',
  customer_name: '',
  customer_phone: '',
  car_front: '',
  car_side_a: '',
  car_side_b: '',
  car_back: '',
  panorama: '',
  blackbox: '',
  ppf: '',
  etc: '',
  coil_matt: 'D',
  glass_film: 'N',
  tinting: 'N',
  release_date: '',
  release_doc: 'N',
  payment_type: '',
  payment_amount: 0,
  payment_completed: 'N',
};

const TaskModal = ({ open, addTask, updateTask, deleteTask, deleteImg, handleClose }) => {
  const taskFormRef = useRef();
  const [releaseImg, setReleaseImg] = useState('');

  const {
    values,
    setValues,
    handleInputChange,
    handleCheckBoxChange,
    handleCurrencyChange,
    handleFileUpload,
  } = useForm(initFormValues);

  useEffect(() => {
    setReleaseImg(updateTask?.release_img || '');
    setValues({ ...initFormValues, ...updateTask });
  }, [open, setValues, updateTask])

  const handleDeleteTask = () => {
    if (!window.confirm(`해당 작업지시서를 삭제하시겠습니까?`)) return;
    deleteTask(values);
  };

  const hanldleSubmit = () => {
    const {payment_amount} = values;
    if (payment_amount && typeof payment_amount !== 'number') {
      values.payment_amount = payment_amount.replace(/,/gi, '');
    }
    addTask(values);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        {updateTask ? '수정' : <FiberNewOutlinedIcon color='error' fontSize='medium'/>} 작업지시서
      </DialogTitle>
      <DialogContent>
        <form ref={taskFormRef}>
          <input type="hidden" name="idx" value={values?.idx || ''}/>
          <Grid container spacing={2}>
            <Grid item xs={6} md={4}>
              <TextField
                label="입고날짜"
                type="date"
                margin="dense"
                variant="standard"
                focused
                name="delivery_date"
                onChange={handleInputChange}
                value={values.delivery_date ? values.delivery_date : ''}
              />
            </Grid>
            <Grid item xs={6} md={4} >
              <FormControl fullWidth variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="task-status-select-label">작업상태</InputLabel>
                <Select
                  labelId="task-status-select-label"
                  id="task-status-select"
                  name="status"
                  label="작업상태"
                  defaultValue=''
                  value={values.status}
                  onChange={handleInputChange}
                >
                  <MenuItem value={1}>입고예정</MenuItem>
                  <MenuItem value={2}>작업전</MenuItem>
                  <MenuItem value={3}>금일작업</MenuItem>
                  <MenuItem value={4}>작업완료</MenuItem>
                  <MenuItem value={5}>출고</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} md={4} />
            <Grid item xs={6} md={3} >
              <TextField
                label="담당자"
                margin="dense"
                variant="standard"
                focused
                name="manager"
                onChange={handleInputChange}
                value={values.manager || ''}
              />
            </Grid>
            <Grid item xs={6} md={5}>
              <TextField
                label="차종"
                margin="dense"
                variant="standard"
                fullWidth
                focused
                name="car_type"
                onChange={handleInputChange}
                value={values.car_type || ''}
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <TextField
                label="카마스터"
                margin="dense"
                variant="standard"
                fullWidth
                focused
                name="car_master"
                onChange={handleInputChange}
                value={values.car_master || ''}
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <TextField
                label="고객성명"
                margin="dense"
                variant="standard"
                fullWidth
                focused
                name="customer_name"
                onChange={handleInputChange}
                value={values.customer_name || ''}
              />
            </Grid>
            <Grid item xs={6} md={5}>
              <TextField
                label="고객 연락처"
                margin="dense"
                variant="standard"
                fullWidth
                focused
                name="customer_phone"
                onChange={handleInputChange}
                value={values.customer_phone || ''}
              />
            </Grid>
            <Grid item md={4}></Grid>
            <Grid item xs={6} md={3}>
              <TextField
                label="전면"
                margin="dense"
                variant="standard"
                focused
                name="car_front"
                onChange={handleInputChange}
                value={values.car_front || ''}
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
                onChange={handleInputChange}
                value={values.car_side_a || ''}
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
                onChange={handleInputChange}
                value={values.car_side_b || ''}
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
                onChange={handleInputChange}
                value={values.car_back || ''}
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
                onChange={handleInputChange}
                value={values.panorama || ''}
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
                onChange={handleInputChange}
                value={values.blackbox || ''}
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
                onChange={handleInputChange}
                value={values.ppf || ''}
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
                onChange={handleInputChange}
                value={values.etc || ''}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl component="fieldset">
                <FormLabel component="legend" style={{ fontSize: '0.7rem', color: '#1976d2'}}>코일매트</FormLabel>
                <RadioGroup
                  row
                  aria-label="coil-matt"
                  defaultValue="D"
                  name="coil_matt"
                  onChange={handleInputChange}
                  value={values.coil_matt}
                >
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
                    labelPlacement="end"
                    value="Y"
                    onChange={handleCheckBoxChange}
                    checked={values.glass_film === 'Y' ? true : false }
                    control={<Checkbox size="small" />}
                  />
                  <FormControlLabel
                    label="썬팅"
                    name="tinting"
                    labelPlacement="end"
                    value="Y"
                    onChange={handleCheckBoxChange}
                    checked={values.tinting === 'Y' ? true : false }
                    control={<Checkbox size="small" />}
                  />
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid item xs={10} md={6}>
            <TextField
              label="출고 날짜&시간"
              type="datetime-local"
              name="release_date"
              onChange={handleInputChange}
              value={values.release_date || ''}
              sx={{ width: 270 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            </Grid>
            <Grid item xs={2} md={2}>
              <FormHelperText style={{paddingTop:'3px', fontSize: '0.75rem', color: '#1976d2'}}>출고서류</FormHelperText>
              <FormControl
                onChange={handleCheckBoxChange}
                >
                <Checkbox
                  size=""
                  value="Y"
                  name="release_doc"
                  checked={values.release_doc === 'Y' ? true : false}
                  style={{marginLeft: '8px', verticalAlign: 'middle'}}
                />
              </FormControl>
            </Grid>
            <Grid item xs md={4}></Grid>
            <Grid item xs={5} md={5}>
              <TextField
                label="결제방식"
                margin="dense"
                variant="standard"
                fullWidth
                focused
                name="payment_type"
                onChange={handleInputChange}
                value={values.payment_type || ''}
              />
            </Grid>
            <Grid item xs={5} md={5}>
              <TextField
                label="결제금액"
                margin="dense"
                variant="standard"
                focused
                name="payment_amount"
                onChange={handleCurrencyChange}
                value={values?.payment_amount.toLocaleString('kr-KO') || 0}
                InputProps={{
                  endAdornment: <InputAdornment position="end">원</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item xs={2} md={2}>
              <FormHelperText style={{paddingTop:'3px', fontSize: '0.75rem', color: '#1976d2'}}>기재완료</FormHelperText>
              <FormControl
                  onChange={handleCheckBoxChange}
                >
                <Checkbox
                  size=""
                  value="Y"
                  name="payment_completed"
                  checked={values.payment_completed === 'Y' ? true : false}
                  style={{marginLeft: '8px', verticalAlign: 'middle'}}
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            {releaseImg ?
            <ImageListItem>
              <img
                src={`http://localhost:3030/image/${releaseImg}`}
                alt={releaseImg}
                width={200}
                height={100}
                loading="lazy"
                sx={{display: 'block'}}
              />
              <ImageListItemBar
                sx={{
                  background:
                    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                }}
                position="top"
                actionIcon={
                  <IconButton
                    sx={{ color: 'white' }}
                    onClick={() => {
                      if (window.confirm('이미지를 삭제하시겠습니까?')) {
                        values.release_img = '';
                        setReleaseImg('');
                        deleteImg(values.idx);
                      }
                    }}
                  >
                    <ClearIcon />
                  </IconButton>
                }
                actionPosition="right"
              />
            </ImageListItem>
            :
            <TextField
              type="file"
              name="release_img"
              onChange={handleFileUpload}
            />}
          </Grid>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>취소</Button>
        {updateTask ? <Button onClick={handleDeleteTask}>삭제</Button> : ''}
        <Button onClick={hanldleSubmit}>{updateTask ? '수정' : '추가'}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default TaskModal;