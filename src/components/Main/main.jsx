import { Typography, Container, Box, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { colors } from "../../constants/colors";
import { Category, Videos } from "../index";
import { ApiServise } from "../../service/api_service";
function Main() {
  const [select, setSelect] = useState("New");
  const [video, setVideo] = useState([]);
  const selectCategoryFn = (category) => {
    setSelect(category);
  };

  useEffect(() => {
    const getaData = async () => {
      try {
        const data = await ApiServise.fetching(
          `search?part=snippet&q=${select}`
        );
        setVideo(data.items);
     
      } catch (error) {
        console.log(error);
      }
    };
    getaData();
  }, [select]);

  return (
    <Stack>
      <Category selectCategoryFn={selectCategoryFn} select={select} />
      <Box className={` h-[90vh] `}>
        <Container maxWidth={"90%"}>
          <Typography variant="h4" fontWeight={"bold"} mb={2}>
            {select} <span style={{ color: colors.secondary }}>videos</span>
          </Typography>
          <Videos video={video} />
        </Container>
      </Box>
    </Stack>
  );
}

export default Main;
