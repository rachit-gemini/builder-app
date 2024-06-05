"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";
import Card from "@mui/material/Card";
import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface CounterProps {
  initialCount?: number;
}

function Counter({
  title = "Thailand",
  content = "Thailand is a Southeast Asian country. It's known for tropical beaches, opulent royal palaces, ancient ruins and ornate temples displaying figures of Buddha. In Bangkok, the capital, an ultramodern cityscape rises next to quiet canalside communities and the iconic temples of Wat Arun, Wat Pho and the Emerald Buddha Temple (Wat Phra Kaew).",
  image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCM4xgR5SMSqTaTNdnggZHUlLXO4ynT1j9rQ&s",
}) {
  const imgUrl = image;

  return (
    // <Row className="justify-content-center">
    //   <Col xs={12} md={6}>
    //     <Card style={{ width: "300px", height: "200px", padding: "30px" }}>
    //       <Card.Img
    //         variant="top"
    //         src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpickyourtrail.com%2Fthailand-in-september&psig=AOvVaw17EDnu62ow8Ks8bOQuMo2-&ust=1717662187503000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPCC4LeExIYDFQAAAAAdAAAAABAE"
    //       />
    //       <Card.Body>
    //         <Card.Title>Card Title</Card.Title>
    //         <Card.Text>
    //           Some quick example text to build on the card title and make up the
    //           bulk of the card's content.
    //         </Card.Text>
    //         <Button variant="primary">Go somewhere</Button>
    //       </Card.Body>
    //     </Card>
    //   </Col>
    // </Row>

    <Card sx={{ maxWidth: 345, maxHeight: 400 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={imgUrl} alt="image" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Counter;
