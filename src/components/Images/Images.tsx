"use client";
import React from "react";
import { Card, CardActionArea, CardMedia } from "@mui/material";

function Images({
  imageUrl = "https://www.travelandleisure.com/thmb/RQ3JmT8V2y2fhwr7NY0cgUumcCE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/phuket-thailand-karst-formation-phuket0327-92bd3ce9266148dba74cba5e36c711e2.jpg",
  redirectUrl = "https://www.booking.com/region/th/phuket.en-gb.html?aid=1148957&label=th-zkk47jQr29fpOEuip2XXzwS589181018154%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-300032342869%3Alp1007765%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YYriJK-Ikd_d_R21tvRGSUo&sid=8ea35a05d0e81ed53dad13c4557376d7",
}) {
  const handleClick = () => {
    window.open(redirectUrl, "_blank");
  };

  return (
    <Card>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          component="img"
          height="400"
          image={imageUrl}
          alt="Image"
          style={{ width: "400px" }}
        />
      </CardActionArea>
    </Card>
  );
}

export default Images;
