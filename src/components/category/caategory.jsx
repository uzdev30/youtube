import React from "react";
import { Stack } from "@mui/material";
import { category } from "../../constants/index";
import { colors } from "../../constants/colors";

function Category({ selectCategoryFn, select }) {
  return (
    <Stack direction={"row"} sx={{ overflowX: "scroll" }}>
      {category.map((item) => (
        <button
          onClick={() => selectCategoryFn(item.name)}
          key={item.name}
          className={`${
            select === item.name && "bg-secondary text-primary"
          } text border-none  cursor-pointer items-center justify-center flex font-bold capitalize px-[14px] py-[7px] border-[0px] transition-all `}
        >
          <span className="text-scondary mr-[15px]  ">{item.icon}</span>
          <span style={{ opacity: "1" }}>{item.name}</span>

        </button>
      ))}
    </Stack>
  );
}

export default Category;
