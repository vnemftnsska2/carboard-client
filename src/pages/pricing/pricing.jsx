import { Box, Paper, Grid, Stack, TextField, Button } from "@mui/material";
import React from "react";

const Pricing = (props) => {
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
    </Box>
  );
};

export default Pricing;
