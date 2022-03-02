import { Box, Paper, Grid, Stack, TextField, Button } from "@mui/material";
import React from "react";

//DataGrid
import { DataGrid } from "@mui/x-data-grid";

const rows = [
  {
    id: 0,
    name: "(서울강서) 우장산카보드",
    ceo: "문경민",
    phone_number_1: "010-4223-9166",
    phone_number_2: "02-2663-4668",
    address: "서울 강서구 강서로 266 (화곡동, 우장산아이파크) 121동 1201호",
  },
  {
    id: 1,
    name: 1,
    ceo: "2022-01-01",
    phone_number_1: "민수네마을",
    phone_number_2: "레이노 (70%)",
    address: "2M",
  },
  {
    id: 2,
    name: 1,
    ceo: "2022-01-01",
    phone_number_1: "민수네마을",
    phone_number_2: "레이노 (70%)",
    address: "2M",
  },
  {
    id: 3,
    name: 1,
    ceo: "2022-01-01",
    phone_number_1: "민수네마을",
    phone_number_2: "레이노 (70%)",
    address: "2M",
  },
  {
    id: 4,
    name: 1,
    ceo: "2022-01-01",
    phone_number_1: "민수네마을",
    phone_number_2: "레이노 (70%)",
    address: "2M",
  },
];

const Store = (props) => {
  //Table
  const columns = [
    { field: "name", headerName: "업체명", width: 280 },
    { field: "ceo", headerName: "대표자명", width: 180 },
    { field: "phone_number_1", headerName: "연락처1", width: 200 },
    { field: "phone_number_2", headerName: "연락처2", width: 200 },
    { field: "address", headerName: "주소", width: 700 },
  ];

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
          <Grid
            item
            xs={12}
            md={12}
            sx={{ minHeight: "80vh", maxHeight: "80vh" }}
          >
            <DataGrid columns={columns} rows={rows} />
          </Grid>
        </Grid>

        {/* Modal */}
      </Paper>
    </Box>
  );
};

export default Store;
