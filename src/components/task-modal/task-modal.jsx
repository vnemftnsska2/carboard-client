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

const TaskModal = ({ open, handleClose }) => {
  const deliveryDateRef = useRef();
  const managerRef = useRef();
  const carMasterRef = useRef();
  const carTypeRef = useRef();
  const customerNameRef = useRef();
  const customerPhoneRef = useRef();
  const carFrontRef = useRef();
  const carSideARef = useRef();
  const carSideBRef = useRef();
  const carBackRef = useRef();
  const panoramaRef = useRef();
  const blackBoxRef = useRef();
  const ppfRef = useRef();
  const etcRef = useRef();
  const glassFilmRef = useRef();
  const tintingRef = useRef();
  const releaseDateRef = useRef();
  const paymentTypeRef = useRef();

  const hanldleConsole = () => {
    console.log(carMasterRef.current.value);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          작업지시서 등록
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={6} md={3}>
              <TextField
                label="입고날짜"
                margin="dense"
                variant="standard"
                focused
                inputRef={deliveryDateRef}
              />
            </Grid>
            <Grid item md={2}></Grid>
            <Grid item xs={6} md={5} >
              <TextField
                label="담당자"
                margin="dense"
                variant="standard"
                focused
                inputRef={managerRef}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <TextField
                label="카마스터"
                margin="dense"
                variant="standard"
                fullWidth
                focused
                inputRef={carMasterRef}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <TextField
                label="차종"
                margin="dense"
                variant="standard"
                fullWidth
                focused
                inputRef={carTypeRef}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <TextField
                label="고객성명"
                margin="dense"
                variant="standard"
                fullWidth
                focused
                inputRef={customerNameRef}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <TextField
                label="고객번호"
                margin="dense"
                variant="standard"
                fullWidth
                focused
                inputRef={customerPhoneRef}
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <TextField
                label="전면"
                margin="dense"
                variant="standard"
                focused
                inputRef={carFrontRef}
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <TextField
                label="측면(1열)"
                margin="dense"
                variant="standard"
                fullWidth
                focused
                inputRef={carSideARef}
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <TextField
                label="측면(2/3열)"
                margin="dense"
                variant="standard"
                fullWidth
                focused
                inputRef={carSideBRef}
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <TextField
                label="후면"
                margin="dense"
                variant="standard"
                fullWidth
                focused
                inputRef={carBackRef}
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <TextField
                label="파노라마"
                margin="dense"
                variant="standard"
                fullWidth
                focused
                inputRef={panoramaRef}
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <TextField
                label="블랙박스"
                margin="dense"
                variant="standard"
                fullWidth
                focused
                inputRef={blackBoxRef}
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <TextField
                label="PPF"
                margin="dense"
                variant="standard"
                fullWidth
                focused
                inputRef={ppfRef}
              />
            </Grid>
            <Grid item xs={6} md={12}>
              <TextField
                label="기타"
                margin="dense"
                variant="standard"
                fullWidth
                focused
                inputRef={etcRef}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl component="fieldset">
                <FormLabel component="legend" style={{ fontSize: '0.7rem', color: '#1976d2'}}>코일매트</FormLabel>
                <RadioGroup row aria-label="coil-matt" defaultValue="D" name="row-radio-buttons-group">
                  <FormControlLabel value="D" control={<Radio size="small" />} label="딜러" />
                  <FormControlLabel value="C" control={<Radio size="small"/>} label="카보드" />
                  <FormControlLabel value="E" control={<Radio size="small"/>} label="없음" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend" style={{fontSize: '0.7rem', color: '#1976d2'}}>보증서</FormLabel>
                <FormGroup aria-label="position" row>
                  <FormControlLabel
                    value="G"
                    control={<Checkbox size="small" inputRef={glassFilmRef} />}
                    label="유리막"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="S"
                    control={<Checkbox size="small" inputRef={tintingRef} />}
                    label="썬팅"
                    labelPlacement="end"
                  />
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid item xs={6} md={3}>
              <TextField
                label="출고날짜"
                margin="dense"
                variant="standard"
                focused
                inputRef={releaseDateRef}
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <FormHelperText style={{paddingTop:'3px', fontSize: '0.75rem', color: '#1976d2'}}>출고서류</FormHelperText>
              <FormControl>
                <Checkbox size="" style={{marginLeft: '8px', verticalAlign: 'middle'}}/>
              </FormControl>
            </Grid>
            <Grid item xs={6} md={3}>
              <TextField
                label="결제방식"
                margin="dense"
                variant="standard"
                fullWidth
                focused
                inputRef={paymentTypeRef}
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <FormHelperText style={{paddingTop:'3px', fontSize: '0.75rem', color: '#1976d2'}}>결재완료</FormHelperText>
              <FormControl>
                <Checkbox size="" style={{marginLeft: '8px', verticalAlign: 'middle'}}/>
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>취소</Button>
          <Button onClick={hanldleConsole}>저장</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TaskModal;