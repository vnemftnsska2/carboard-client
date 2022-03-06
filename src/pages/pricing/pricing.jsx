import { Box, Paper, Grid, Button, Stack } from "@mui/material";
import React from "react";

//DataGrid
import { DataGrid } from "@mui/x-data-grid";

const productRows = [
  {
    id: 0,
    brand: "레이노",
    description: "필름 취급",
  },
  {
    id: 1,
    brand: "블랙박스브랜드",
    description: "블랙박스만 취급",
  },
  {
    id: 2,
    brand: "브이클",
    description: "설명",
  },
  {
    id: 3,
    brand: "버텍스",
    description: "설명",
  },
  {
    id: 4,
    brand: "파인뷰",
    description: "설명",
  },
];

const unitRows = [
  {
    id: 0,
    product: "S5-5%",
    price: "100000",
    description: "설명",
  },
  {
    id: 1,
    product: "S5-15%",
    price: "100000",
    description: "설명",
  },
  {
    id: 2,
    product: "S7-35%",
    price: "100000",
    description: "설명",
  },
];

const Pricing = (props) => {
  //Table
  const productColumns = [
    { field: "brand", headerName: "브랜드", width: "20%" },
    { field: "description", headerName: "설명", width: "65%" },
    { field: "", headerName: "", width: "15%" },
  ];

  const unitColumns = [
    { field: "product", headerName: "상품", width: 150 },
    { field: "price", headerName: "가격", width: 200 },
    { field: "description", headerName: "설명", width: 400 },
    { field: "", headerName: "", width: 120 },
  ];

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={4} md={4} lg={4}>
          <Paper sx={{ marginTop: "1em", padding: "1em" }}>
            <Stack
              mb={2}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ padding: "0 0.3em 0 0.3em" }}
            >
              <font size="5">
                <strong>브랜드</strong>
              </font>
              <Button
                variant="contained"
                sx={{ width: "5em", textAlign: "right" }}
                onClick={() => {}}
              >
                등록
              </Button>
            </Stack>
            <DataGrid
              columns={productColumns}
              rows={productRows}
              sx={{ height: "80vh" }}
            />
          </Paper>
        </Grid>
        <Grid item xs={8} md={8} lg={8}>
          <Paper sx={{ marginTop: "1em", padding: "1em" }}>
            <Stack
              mb={2}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ padding: "0 0.3em 0 0.3em" }}
            >
              <font size="5">
                <strong>레이노</strong>
              </font>
              <Button
                variant="contained"
                sx={{ width: "5em", textAlign: "right" }}
                onClick={() => {}}
              >
                추가
              </Button>
            </Stack>
            <DataGrid
              columns={unitColumns}
              rows={unitRows}
              sx={{ height: "80vh" }}
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Pricing;
