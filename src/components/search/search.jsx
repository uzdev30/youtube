import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { ApiServise } from "../../service/api_service";
import { Box, Container, Typography } from "@mui/material";
import { colors } from "../.././constants/colors";
import Videos from ".././videos/videos";
function Search() {
  const [videos, setVideo] = useState([]);
  const id = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiServise.fetching(
          `search?part=snippet&q=${id.id}`
        );
        setVideo(data.items);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  return (
    <Box className={` h-[90vh] `}>
      <Container maxWidth={"90%"}>
        <Typography variant="h4" fontWeight={"bold"} mb={2}>
          Search result for{" "}
          <span style={{ color: colors.secondary }}>{id.id}</span> Videos
        </Typography>
        <Videos video={videos} />
      </Container>
    </Box>
  );
}

export default Search;
