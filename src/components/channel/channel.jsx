import React, { useEffect, useState } from "react";
import { ApiServise } from "../../service/api_service";
import { useParams } from "react-router-dom";
import { Box, Container } from "@mui/material";
// import ChannelCard from "..//channel-card/channel-card";
import { Videos, ChannelCard } from "../index";
function Channel() {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState();
  const [video, setVideo] = useState([]);
  useEffect(() => {
    const getaData = async () => {
      try {
        const dataChannelDetail = await ApiServise.fetching(
          `channels?part=snippet&id=${id}`
        );
        setChannelDetail(dataChannelDetail.items[0]);
        const dataVideo = await ApiServise.fetching(
          `search?channelId=${id}&part=snippet`
        );

        setVideo(dataVideo?.items);
      } catch (error) {
        console.log(error);
      }
    };
    getaData();
  }, [id]);

  return (
    <Box minHeight={"95vh"} mt={"1vh"}>
      <Box>
        <Box
          width={"100%"}
          height={"200px"}
          zIndex={10}
          sx={{
            backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
            backgroundPosition: "center",
            brandingSize: "cover",
            objectFit: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <ChannelCard video={channelDetail} marginTop={`-100px`} />
      </Box>
      <Container maxWidth={"90%"}>
        <Videos video={video} />
      </Container>
    </Box>
  );
}

export default Channel;
