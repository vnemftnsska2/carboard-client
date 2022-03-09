import React, { useRef, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import useForm from "../use-form/useForm";
import FiberNewOutlinedIcon from "@mui/icons-material/FiberNewOutlined";

const initFormValues = {
  name: "",
  description: "",
};

const BrandModal = ({
  open,
  addBrand,
  updateBrand,
  deleteBrand,
  handleClose,
}) => {
  const brandFormRef = useRef();

  const { values, setValues, handleInputChange } = useForm(initFormValues);

  useEffect(() => {
    setValues({ ...initFormValues, ...updateBrand });
  }, [open, setValues, updateBrand]);

  const handleDeleteBrand = () => {
    if (!window.confirm(`해당 브랜드를 삭제하시겠습니까?`)) return;
    deleteBrand(values);
  };

  const hanldleSubmit = () => {
    addBrand(values);
  };

  return (
    <Dialog maxWidth={"xs"} open={open} onClose={handleClose}>
      <DialogTitle>
        {updateBrand ? (
          "수정"
        ) : (
          <FiberNewOutlinedIcon color="error" fontSize="medium" />
        )}{" "}
        브랜드
      </DialogTitle>
      <DialogContent>
        <form ref={brandFormRef}>
          <input type="hidden" name="idx" value={values?.idx || ""} />
          <Grid container item spacing={2} sx={{ paddingTop: "0.5em" }}>
            <Grid item xs={12} md={12}>
              <TextField
                label="브랜드명"
                margin="dense"
                variant="standard"
                fullWidth
                focused
                name="name"
                onChange={handleInputChange}
                value={values.name || ""}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                label="설명"
                margin="dense"
                variant="standard"
                fullWidth
                focused
                name="description"
                onChange={handleInputChange}
                value={values.description || ""}
              />
            </Grid>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>취소</Button>
        {updateBrand ? <Button onClick={handleDeleteBrand}>삭제</Button> : ""}
        <Button onClick={hanldleSubmit}>{updateBrand ? "수정" : "추가"}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default BrandModal;
