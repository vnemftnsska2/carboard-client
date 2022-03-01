import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Stack, Paper, TextField } from "@mui/material";
import CompanyModal from "../../components/company-modal/company-modal";
import DateRangePicker from "@mui/lab/DateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import dayjs from "dayjs";

const Inventory = (props) => {
  const [value, setValue] = useState([null, null]);
  const setInitRangeDate = () => {
    const today = dayjs().format("YYYY-MM-DD");
    return [today, today];
  };

  useEffect(() => {}, []);

  return (
    <Box>
      <Paper sx={{ marginTop: "10px", padding: "1em 3em 1em 1.5em" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3} lg={3}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateRangePicker
                startText="시작일"
                endText="종료일"
                inputFormat={"yyyy-MM-dd"}
                mask={"____-__-__"}
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
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
          <Grid item xs={6} md={3} lg={3}>
            <Stack direction="row" alignItems="flex-end">
              <TextField
                label="검색"
                type="search"
                variant="standard"
                sx={{ minWidth: 150 }}
              />
              <Button size="small" variant="outlined">
                검색
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={6} md={6} lg={6} sx={{ textAlign: "right" }}>
            <Button
              variant="contained"
              sx={{ minWidth: "7em", marginTop: "12px" }}
              onClick={() => {}}
            >
              작업 추가
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ marginTop: "1em", padding: "1em", minHeight: "80vh" }}>
        <Grid container spacing={2}></Grid>

        {/* Modal */}
        <CompanyModal />
      </Paper>
    </Box>
  );
};

export default Inventory;
