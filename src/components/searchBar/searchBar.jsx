import { useState } from "react";
import { Paper, IconButton } from "@mui/material";
import { colors } from "../../constants/colors";
import { Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
function SearchBar() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (value) {
      navigate(`/search/${value}`);
      setValue("ooo");
    }
  };

  return (
    <Paper
      component={"form"}
      onSubmit={submitHandler}
      sx={{
        border: `1px solid  ${colors.secondary}`,
        pl: 2,
        boxShadow: "none",
        mr: 5,
      }}
    >
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setValue(e.target.value)}
        className="border-none w-[350px] outline-none max-[600px]:w-[200px]"
      />

      <IconButton type="submit">
        <Search />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
