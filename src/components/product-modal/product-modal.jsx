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

const ProductModal = ({
  open,
  addProduct,
  updateProduct,
  deleteProduct,
  handleClose,
}) => {
  const productFormRef = useRef();
  const { values, setValues, handleInputChange } = useForm(initFormValues);

  useEffect(() => {
    setValues({ ...initFormValues, ...updateProduct });
  }, [open, setValues, updateProduct]);

  const handleDeleteProduct = () => {
    if (!window.confirm(`해당 브랜드를 삭제하시겠습니까?`)) return;
    deleteProduct(values);
  };

  const hanldleSubmit = () => {
    addProduct(values);
  };

  return (
    <Dialog maxWidth={"xs"} open={open} onClose={handleClose}>
      <DialogTitle>
        {updateProduct ? (
          "수정"
        ) : (
          <FiberNewOutlinedIcon color="error" fontSize="medium" />
        )}{" "}
        브랜드
      </DialogTitle>
      <DialogContent>
        <form ref={productFormRef}>
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
        {updateProduct ? (
          <Button onClick={handleDeleteProduct}>삭제</Button>
        ) : (
          ""
        )}
        <Button onClick={hanldleSubmit}>
          {updateProduct ? "수정" : "추가"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductModal;
