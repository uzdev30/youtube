import React from "react";
import { Stack, Box } from "@mui/material";
import { logo } from "../../constants/index";
import { colors } from "../../constants/colors";
import { Link } from "react-router-dom";
import { SearchBar } from "../index";

function Navbar() {
  return (
    <Stack
      className=" h-[10vh]"
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={"2"}
      sx={{ position: "sticky", top: 0, zIndex: 999, bgcolor: colors.primary }}
    >
      <Link to={"/"}>
        <img src={logo} alt="logo" height={50} width={50} />
      </Link>
      <SearchBar />
      <Box />
    </Stack>
  );
}

export default Navbar;
