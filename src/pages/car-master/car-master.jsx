import React from "react";
import {
  Grid,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Stack,
  TextField,
  Button,
} from "@mui/material";

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData("강서", 159, 6.0, 24, 4.0),
  createData("양천", 237, 9.0, 37, 4.3),
  createData("김포", 262, 16.0, 24, 6.0),
  createData("영등포", 305, 3.7, 67, 4.3),
  createData("여의도", 356, 16.0, 49, 3.9),
];

const CarMaster = ({}) => {
  return (
    <Box>
      <Paper sx={{ marginTop: "10px", padding: "1em 3em 1em 1.5em" }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6} lg={4}>
            <Stack direction="row" alignItems="flex-end">
              <TextField
                label="검색"
                type="search"
                variant="standard"
                sx={{ minWidth: 150 }}
                inputRef={null}
                onKeyDown={() => {}}
              />
              <Button size="small" variant="outlined" onClick={() => {}}>
                검색
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={6} md={6} lg={8} sx={{ textAlign: "right" }}>
            <Button
              ref={null}
              variant="contained"
              sx={{ minWidth: "7em", marginTop: "12px" }}
              onClick={() => {}}
            >
              업체 등록
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ marginTop: "1em", padding: "1em", minHeight: "80vh" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 400 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>지점</TableCell>
                    <TableCell>업체명</TableCell>
                    <TableCell>대표자</TableCell>
                    <TableCell>연락처</TableCell>
                    <TableCell>주소</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell>{row.calories}</TableCell>
                      <TableCell>{row.fat}</TableCell>
                      <TableCell>{row.carbs}</TableCell>
                      <TableCell>{row.carbs}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>

        {/* Modal */}
      </Paper>
    </Box>
  );
};

export default CarMaster;
