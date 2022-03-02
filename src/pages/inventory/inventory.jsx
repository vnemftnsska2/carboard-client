import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
} from "@mui/material";
import CompanyModal from "../../components/company-modal/company-modal";
import DateRangePicker from "@mui/lab/DateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import dayjs from "dayjs";

//DataTable
import { DataGrid } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/AddCircleOutline";
import RemoveIcon from "@mui/icons-material/RemoveCircleOutline";
import InventoryModal from "../../components/inventory-modal/inventory-modal";

const rows = [
  {
    id: 0,
    type: 1,
    date: "2022-01-01",
    company: "민수네마을",
    item: "레이노 (70%)",
    quantity: "2M",
    amount: "2,000,000 원",
  },
  {
    id: 1,
    type: 2,
    date: "2022-01-01",
    company: "민수네마을",
    item: "레이노 (70%)",
    quantity: "2M",
    amount: "2,000,000 원",
  },
  {
    id: 2,
    type: 2,
    date: "2022-01-01",
    company: "민수네마을",
    item: "레이노 (70%)",
    quantity: "2M",
    amount: "2,000,000 원",
  },
  {
    id: 3,
    type: 1,
    date: "2022-01-01",
    company: "민수네마을",
    item: "레이노 (70%)",
    quantity: "2M",
    amount: "2,000,000 원",
  },
  {
    id: 4,
    type: 1,
    date: "2022-01-01",
    company: "민수네마을",
    item: "레이노 (70%)",
    quantity: "2M",
    amount: "2,000,000 원",
  },
];

const Inventory = ({ inventoryRepository }) => {
  const [rangeDate, setRangeDate] = useState([null, null]);
  const [type, setType] = useState(0);

  const [open, setOpen] = useState(false);

  //Header
  const setInitRangeDate = () => {
    const endDate = dayjs();
    const startDate = dayjs().subtract(1, "month");
    return [startDate, endDate];
  };

  const renderType = (params) => {
    const type = params.row.type;
    if (type === 1) {
      return (
        <Chip color="success" size="small" label="입고" icon={<AddIcon />} />
      );
    } else if (type === 2) {
      return (
        <Chip color="error" size="small" label="출고" icon={<RemoveIcon />} />
      );
    }
  };

  //Table
  const columns = [
    { field: "type", headerName: "구분", width: 110, renderCell: renderType },
    { field: "date", headerName: "날짜", width: 120 },
    { field: "company", headerName: "업체명", width: 200 },
    { field: "item", headerName: "제품명(옵션)", width: 400 },
    { field: "quantity", headerName: "수량", width: 150 },
    { field: "amount", headerName: "금액", width: 200 },
  ];

  useEffect(() => {
    setRangeDate(setInitRangeDate);
  }, [inventoryRepository]);

  const openInventoryModal = () => setOpen(true);
  const closeInventoryModal = () => setOpen(false);
  const addInventory = () => {};
  const updateInventory = () => {};
  const deleteInventory = () => {};

  return (
    <Box>
      <Paper sx={{ marginTop: "10px", padding: "1em 3em 0 1.5em" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={3}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateRangePicker
                startText="시작일"
                endText="종료일"
                inputFormat={"yyyy-MM-dd"}
                mask={"____-__-__"}
                value={rangeDate}
                onChange={(newValue) => {
                  setRangeDate(newValue);
                }}
                renderInput={(startProps, endProps) => (
                  <React.Fragment>
                    <TextField {...startProps} />
                    <Box sx={{ mx: 1 }}> - </Box>
                    <TextField {...endProps} />
                  </React.Fragment>
                )}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={4} md={3} lg={1}>
            <FormControl
              fullWidth
              variant="standard"
              sx={{ m: 1, minWidth: 120 }}
            >
              <InputLabel id="type-select-label">구분</InputLabel>
              <Select
                labelId="type-select-label"
                id="type-select"
                name="type"
                label="구분"
                value={type}
                onChange={({ target: { value } }) => setType(value)}
              >
                <MenuItem value={0}>전체</MenuItem>
                <MenuItem value={1}>입고</MenuItem>
                <MenuItem value={2}>출고</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4} md={3} lg={2}>
            <FormControl
              fullWidth
              variant="standard"
              sx={{ m: 1, minWidth: 120 }}
            >
              <InputLabel id="company-select-label">업체명</InputLabel>
              <Select
                labelId="company-select-label"
                id="company-select"
                name="company"
                label="업체명"
                value={0}
              >
                <MenuItem value={0}>전체</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4} md={3} lg={6} sx={{ textAlign: "right" }}>
            <Button
              variant="contained"
              sx={{ minWidth: "7em", marginTop: "12px" }}
              onClick={openInventoryModal}
            >
              입출고
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ marginTop: "1em", padding: "1em", minHeight: "80vh" }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={12}
            sx={{ minHeight: "80vh", maxHeight: "80vh" }}
          >
            <DataGrid rows={rows} columns={columns} />
          </Grid>
        </Grid>

        {/* Modal */}
        <CompanyModal />
        <InventoryModal
          open={open}
          addInventory={addInventory}
          updateInventory={updateInventory}
          deleteInventory={deleteInventory}
          handleClose={closeInventoryModal}
        />
      </Paper>
    </Box>
  );
};

export default Inventory;
