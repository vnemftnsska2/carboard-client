import React, { useRef, useEffect } from "react";
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
  Input,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
} from "@mui/material";
import useForm from "../use-form/useForm";
import FiberNewOutlinedIcon from "@mui/icons-material/FiberNewOutlined";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import dayjs from "dayjs";

const initFormValues = {
  id: 0,
  name: "(서울강서) 우장산카보드",
  ceo: "문경민",
  phone_number_1: "010-4223-9166",
  phone_number_2: "02-2663-4668",
  address: "서울 강서구 강서로 266 (화곡동, 우장산아이파크) 121동 1201호",
};

const StoreModal = ({
  open,
  addInventory,
  updateInventory,
  deleteInventory,
  handleClose,
}) => {
  const inventoryFormRef = useRef();

  const {
    values,
    setValues,
    handleInputChange,
    handleCheckBoxChange,
    handleCurrencyChange,
    handleDatePicker,
  } = useForm(initFormValues);

  useEffect(() => {
    setValues({ ...initFormValues, ...updateInventory });
  }, [open, setValues, updateInventory]);

  const handleDeleteTask = () => {
    if (!window.confirm(`해당 재고관리 목록을 삭제하시겠습니까?`)) return;
    deleteInventory(values);
  };

  const hanldleSubmit = () => {
    addInventory(values);
  };

  return (
    <Dialog maxWidth={"xs"} open={open} onClose={handleClose}>
      <DialogTitle>
        {updateInventory ? (
          "수정"
        ) : (
          <FiberNewOutlinedIcon color="error" fontSize="medium" />
        )}{" "}
        재고
      </DialogTitle>
      <DialogContent>
        <form ref={inventoryFormRef}>
          <input type="hidden" name="idx" value={values?.idx || ""} />
          <Grid container spacing={2} sx={{ paddingTop: "0.5em" }}>
            <Grid item xs={6} md={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="날짜"
                  inputFormat={"yyyy-MM-dd"}
                  mask={"____-__-__"}
                  value={values.date}
                  onChange={handleDatePicker}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={6} md={6}>
              <FormControl
                fullWidth
                variant="standard"
                sx={{ m: 1, minWidth: 120 }}
              >
                <InputLabel id="inventory-type-select-label">구분</InputLabel>
                <Select
                  labelId="inventory-type-select-label"
                  id="inventory-type-select"
                  name="type"
                  label="구분"
                  defaultValue=""
                  value={values.type}
                  onChange={handleInputChange}
                >
                  <MenuItem value={1}>입고</MenuItem>
                  <MenuItem value={2}>출고</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container item spacing={3}>
            <Grid item xs={6} md={6}>
              <FormControl
                fullWidth
                variant="standard"
                sx={{ m: 1, minWidth: 120 }}
              >
                <InputLabel id="task-status-select-label">업체명</InputLabel>
                <Select
                  labelId="task-status-select-label"
                  id="task-status-select"
                  name="company"
                  label="업체명"
                  defaultValue=""
                  value={values.company}
                  onChange={handleInputChange}
                >
                  <MenuItem value={1}>고강카보드</MenuItem>
                  <MenuItem value={2}>김포카보드</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} md={6}>
              <FormControl
                fullWidth
                variant="standard"
                sx={{ m: 1, minWidth: 120 }}
              >
                <InputLabel id="task-status-select-label">제품명</InputLabel>
                <Select
                  labelId="task-status-select-label"
                  id="task-status-select"
                  name="item"
                  label="제품명"
                  defaultValue=""
                  value={values.item}
                  onChange={handleInputChange}
                >
                  <MenuItem value={1}>고강카보드</MenuItem>
                  <MenuItem value={2}>김포카보드</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container item spacing={3}>
            <Grid item xs={6} md={6}>
              <FormControl
                fullWidth
                variant="standard"
                sx={{ m: 1, minWidth: 120 }}
              >
                <InputLabel id="task-status-select-label">옵션</InputLabel>
                <Select
                  labelId="task-status-select-label"
                  id="task-status-select"
                  name="item_option"
                  label="옵션"
                  defaultValue=""
                  value={values.item_option}
                  onChange={handleInputChange}
                >
                  <MenuItem value={1}>고강카보드</MenuItem>
                  <MenuItem value={2}>김포카보드</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} md={6}>
              <TextField
                label="수량"
                margin="dense"
                variant="standard"
                fullWidth
                focused
                name="quantity"
                onChange={handleInputChange}
                value={values.quantity || ""}
              />
            </Grid>
          </Grid>
          <Grid container item spacing={3} sx={{ paddingTop: "0.5em" }}>
            <Grid item xs={6} md={6} />
            <Grid item xs={6} md={6}>
              <FormControl fullWidth variant="standard">
                <InputLabel htmlFor="standard-adornment-amount">
                  금액
                </InputLabel>
                <Input
                  id="standard-adornment-amount"
                  name="payment_amount"
                  value={values?.payment_amount.toLocaleString("kr-KO") || 0}
                  onChange={handleCurrencyChange}
                  readOnly
                  endAdornment={
                    <InputAdornment position="end">원</InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>취소</Button>
        {updateInventory ? (
          <Button onClick={handleDeleteTask}>삭제</Button>
        ) : (
          ""
        )}
        <Button onClick={hanldleSubmit}>
          {updateInventory ? "수정" : "추가"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default StoreModal;
