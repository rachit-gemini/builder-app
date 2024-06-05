"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Card from "./components/Card/Card";
import VideoCard from "./components/VideoCard/VideoCard";
import Footer from "./components/Footer/Footer";
import Images from "./components/Images/Images";
// import Navigation from "./components/Navigation/Navigation";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});
Builder.registerComponent(Card, {
  name: "Card",
  inputs: [
    { name: "title", type: "text" },
    { name: "content", type: "text" },
    { name: "image", type: "text" },
  ],
});
Builder.registerComponent(VideoCard, {
  name: "VideoCard",
  inputs: [
    { name: "title", type: "text" },
    { name: "videoUrl", type: "text" },
  ],
});
Builder.registerComponent(Footer, {
  name: "Footer",
  inputs: [
    { name: "companyName", type: "text" },
    { name: "add", type: "text" },
    { name: "phone", type: "text" },
    { name: "email", type: "text" },
  ],
});
Builder.registerComponent(Footer, {
  name: "Footer",
  inputs: [
    { name: "companyName", type: "text" },
    { name: "add", type: "text" },
    { name: "phone", type: "text" },
    { name: "email", type: "text" },
  ],
});
Builder.registerComponent(Images, {
  name: "Images",
  inputs: [
    { name: "imageUrl", type: "text" },
    { name: "redirectUrl", type: "text" },
  ],
});

// Builder.registerComponent(Navigation, {
//   name: "Navigation",
//   inputs: [
//     { name: "imageUrl", type: "text" },
//     { name: "redirectUrl", type: "text" },
//   ],
// });
