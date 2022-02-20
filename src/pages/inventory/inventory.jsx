import React from "react";
import {
  Box,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  Paper,
  TextField,
} from "@mui/material";
import CompanyModal from "../../components/company-modal/company-modal";

const Inventory = () => {
  return (
    <Box>
      <Paper sx={{ marginTop: "10px", padding: "1em 3em 1em 1.5em" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3} lg={1}>
            <FormControl variant="standard" sx={{ minWidth: 120 }}>
              <InputLabel id="task-status-select-label">작업상태</InputLabel>
              <Select
                labelId="task-status-select-label"
                id="task-status-select"
                name="status_search"
                label="작업상태"
                defaultValue=""
              >
                <MenuItem value={0}>전체</MenuItem>
                <MenuItem value={1}>입고예정</MenuItem>
                <MenuItem value={2}>작업전</MenuItem>
                <MenuItem value={3}>금일작업</MenuItem>
                <MenuItem value={4}>작업완료</MenuItem>
                <MenuItem value={5}>기재완료</MenuItem>
              </Select>
            </FormControl>
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
          <Grid item xs={6} md={6} lg={8} sx={{ textAlign: "right" }}>
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
