import React from "react";
import { Box, Stack } from "@mui/material";
import VideoCard from "..//Video_Card/Video_Card";
import ChannelCard from "../channel-card/channel-card";

function Videos({ video }) {
  return (
    <Stack
      width={"100%"}
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={"start"}
      alignItems={"center"}
      gap={2}
    >
      {video.map((item) => (
        <Box key={item.id.videoId}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard video={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
