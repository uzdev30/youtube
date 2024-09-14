import { Box, CircularProgress, Stack } from "@mui/material";
import React from "react";

function Loader() {
  return (
    <Box>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"100%"}
      >
        <CircularProgress />
      </Stack>
    </Box>
  );
}

export default Loader;
