"use client";
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

function VideoCard({
  title = "title",
  //   videoUrl = "https://videos.pexels.com/video-files/7565438/7565438-hd_1080_1920_25fps.mp4",
  videoUrl = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <video controls width="100%" height="auto">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default VideoCard;
