"use client";
import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

function Footer({
  companyName = "Gemini Solutions",
  add = "119 udhyog vihar",
  phone = "8797987987",
  email = "abc@abc.com",
}) {
  return (
    // <AppBar position="static" color="primary">
    //   <Toolbar>
    //     <Typography variant="body1" color="inherit">
    //       &copy; 2024 {companyName}. All rights reserved.
    //     </Typography>
    //     <Typography variant="body1" color="inherit" sx={{ marginLeft: "auto" }}>
    //       Address:{add}
    //     </Typography>
    //     <Typography variant="body1" color="inherit" sx={{ marginLeft: "20px" }}>
    //       Phone: {phone}
    //     </Typography>
    //     <Typography variant="body1" color="inherit" sx={{ marginLeft: "20px" }}>
    //       Email: {email}
    //     </Typography>
    //   </Toolbar>
    // </AppBar>

    <AppBar position="static" color="primary">
      <Toolbar
        sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}
      >
        <Typography
          variant="body1"
          color="inherit"
          sx={{ mr: { xs: 0, sm: 3 } }}
        >
          &copy; 2024 {companyName}. All rights reserved.
        </Typography>
        <Typography variant="body1" color="inherit" sx={{ mr: 3 }}>
          Address: {add}
        </Typography>
        <Typography variant="body1" color="inherit" sx={{ mr: 3 }}>
          Phone: {phone}
        </Typography>
        <Typography variant="body1" color="inherit">
          Email: {email}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
