import { Box, Paper, Grid, Button, Stack } from "@mui/material";
import React, { useState } from "react";

//DataGrid
import { DataGrid } from "@mui/x-data-grid";
import BrandModal from "../../components/brand-modal/brand-modal";

const brandRows = [];

const unitRows = [
  {
    id: 0,
    product: "S5-5%",
    unit: "M",
    unit_min: 0.5,
    unit_max: 29,
    price: "100000",
    description: "설명",
  },
  {
    id: 1,
    product: "S5-15%",
    unit: "M",
    unit_min: 0.5,
    unit_max: 29,
    price: "100000",
    description: "설명",
  },
  {
    id: 2,
    product: "S7-35%",
    unit: "M",
    unit_min: 0.5,
    unit_max: 29,
    price: "100000",
    description: "설명",
  },
];

const Pricing = ({ priceRepository }) => {
  const [brandOpen, setBrandOpen] = useState(false);
  //Table
  const brandColumns = [
    { field: "brand", headerName: "브랜드", width: 150 },
    { field: "description", headerName: "설명" },
    { field: "", headerName: "", width: 100 },
  ];

  const productColumns = [
    { field: "product", headerName: "상품", width: 150 },
    { field: "unit", headerName: "단위", width: 80 },
    { field: "unit_min", headerName: "최소단위", width: 100 },
    { field: "unit_max", headerName: "최대단위", width: 100 },
    { field: "price", headerName: "가격", width: 150 },
    { field: "description", headerName: "설명", width: 300 },
    { field: "", headerName: "", width: 120 },
  ];

  const openBrandModal = () => setBrandOpen(true);
  const closeBrandModal = () => setBrandOpen(false);
  const addBrand = () => {};
  const updateBrand = () => {};
  const deleteBrand = () => {};

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
                onClick={openBrandModal}
              >
                등록
              </Button>
            </Stack>
            <DataGrid
              columns={brandColumns}
              rows={brandRows}
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
              columns={productColumns}
              rows={unitRows}
              sx={{ height: "80vh" }}
            />
          </Paper>
        </Grid>
      </Grid>
      <BrandModal
        open={brandOpen}
        addBrand={addBrand}
        updateInventory={updateBrand}
        deleteInventory={deleteBrand}
        handleClose={closeBrandModal}
      />
    </Box>
  );
};

export default Pricing;
