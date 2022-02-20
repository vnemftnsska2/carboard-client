import React, { useRef } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  DialogActions,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
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

const CompanyModal = ({}) => {
  const companyRef = useRef();
  return (
    <Dialog open={false}>
      <DialogTitle>업체명</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} sx={{ paddingTop: "0.5em" }}>
          <Grid item xs={12} md={12}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 400 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>지점</TableCell>
                    <TableCell align="right">업체명</TableCell>
                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
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
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
        <form ref={companyRef}></form>
      </DialogContent>
      <DialogActions>
        <Button>취소</Button>
        <Button>저장</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CompanyModal;
