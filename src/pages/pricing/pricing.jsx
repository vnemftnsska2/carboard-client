import { Box, Paper, Grid, Button, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

//DataGrid
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import BrandModal from "../../components/brand-modal/brand-modal";
import ProductModal from "../../components/product-modal/product-modal";

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
  //Brand
  const [brandList, setBrandList] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [brandOpen, setBrandOpen] = useState(false);
  //Product
  const [productList, setProductList] = useState([]);
  const [productOpen, setProductOpen] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getBrandList = async () => {
    const data = await priceRepository.asyncBrandList();
    if (!data?.fatal) {
      setBrandList(data);

      //최초실행
      if (!selectedBrand && data.length > 0) {
        setSelectedBrand(data[0].name);
      }
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getProductList = async () => {
    const data = await priceRepository.asyncBrandList();
    if (!data?.fatal) {
      setBrandList(data);

      //최초실행
      if (!selectedBrand && data.length > 0) {
        setSelectedBrand(data[0].name);
      }
    }
  };

  const selectBrand = (idx) => {
    const brand = brandList.find((brand) => brand.idx === idx);
    if (brand) {
      setSelectedBrand(brand.name);
    }
  };

  //Table
  const brandColumns = [
    { field: "name", headerName: "브랜드", minWidth: 150, flex: 1 },
    { field: "description", headerName: "설명", minWidth: 200, flex: 1 },
    {
      field: "actions",
      type: "actions",
      width: 100,
      getActions: () => [
        <GridActionsCellItem icon={<EditIcon />} label="Edit" />,
        <GridActionsCellItem icon={<DeleteIcon />} label="Delete" />,
      ],
    },
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

  //Init
  useEffect(() => {
    getBrandList();
  }, [priceRepository]);

  //Brand Func
  const openBrandModal = () => setBrandOpen(true);
  const closeBrandModal = () => setBrandOpen(false);
  const addBrand = async (brand) => {
    if (brand.name) {
      const result = await priceRepository.ayncAddBrand(brand);
      if (result.status === 200) {
        alert("브랜드가 추가되었습니다 🏢 💫");
        closeBrandModal();
        getBrandList();
      } else {
        alert("진행중 에러가 발생하였습니다 😡");
      }
    } else {
      return alert("브랜드명을 입력해주세요 😡");
    }
  };
  const updateBrand = () => {};
  const deleteBrand = () => {};

  // Prodct Func
  const openProductModal = () => setProductOpen(true);
  const closeProductModal = () => setProductOpen(false);
  const addProduct = async (brand) => {
    if (brand.name) {
      const result = await priceRepository.ayncAddProduct(brand);
      if (result.status === 200) {
        alert("브랜드가 추가되었습니다 🏢 💫");
        closeProductModal();
        getProductList();
      } else {
        alert("진행중 에러가 발생하였습니다 😡");
      }
    } else {
      return alert("브랜드명을 입력해주세요 😡");
    }
  };
  const updateProduct = () => {};
  const deleteProduct = () => {};

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
              rows={brandList}
              getRowId={(r) => r.idx}
              isRowSelectable={(r) => {
                selectBrand(r.id);
              }}
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
                <strong>{selectedBrand}</strong>
              </font>
              <Button
                variant="contained"
                sx={{ width: "5em", textAlign: "right" }}
                onClick={openProductModal}
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

      {/* Modal */}
      <BrandModal
        open={brandOpen}
        addBrand={addBrand}
        updateBrand={updateBrand}
        deleteBrand={deleteBrand}
        handleClose={closeBrandModal}
      />
      <ProductModal
        open={productOpen}
        addProduct={addProduct}
        updateProduct={updateProduct}
        deleteProduct={deleteProduct}
        handleClose={closeProductModal}
      />
    </Box>
  );
};

export default Pricing;
