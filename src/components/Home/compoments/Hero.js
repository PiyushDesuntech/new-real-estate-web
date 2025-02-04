"use client"
import { Box, Typography, Button, Container, keyframes } from "@mui/material";
import React, { useState } from "react";
import PropertySearch from "./PropertySearch";

const scrollAnimation = keyframes`
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(20px); opacity: 0; }
`;

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [blur, setBlur] = useState(false);

  const backgroundImages = [
    "/Images/HomeBg.svg",
    "/Images/HomeBg.svg",
    "/Images/HomeBg.svg",
    "/Images/HomeBg.svg",
  ];

  const handleBackgroundChange = (index) => {
    if (index !== currentImageIndex) {
      setBlur(true); 
      setTimeout(() => {
        setCurrentImageIndex(index); 
        setBlur(false);
      }, 500);
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        width: "100%",
        mt: -14,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          zIndex: -10, 
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "100%",
            width: "100%",
            transition: "filter 0.5s ease-in-out",
            filter: blur ? "blur(10px)" : "none", 
          }}
        />
      </Box>

      <Container maxWidth="xl" sx={{px: {md: 6}}}>
      <Box
        sx={{
          display: "flex",
          // justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "#fff",
          textAlign: "center",
          height: "100%",
          pt: {xs: 15, sm: 20,md: 20, lg: 33},
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: {xs:"10px", lg: "100px"}, pb: 3, width: "100%", justifyContent: "center", alignItems: "center"}}>
          <Box>
          <Typography
            sx={{
              color: "white",
              fontWeight: 800,
              fontSize: {
                xs: "1.5rem",
                sm: "2rem",
                md: "2.5rem",
                lg: "75px",
              },
            }}
          >
            Your Property, Our Priority.
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "0.875rem",
                sm: "1rem",
                md: "1.125rem",
                lg: "26px",
              },
              fontWeight: 500
            }}
          >
            from as low as $10 per day with limited time offer
          </Typography>
          </Box>
          <PropertySearch />
          <Box sx={{display: "flex", justifyContent: "flex-end", width: "100%", mt:{md: 1, lg:  -10 }, gap: 1, mr: {xs: 0, lg: -2}, }}>
          <Box>
          <Typography sx={{fontSize: "16px", fontWeight: 700}}>Scroll Down</Typography>
          <Typography sx={{fontSize: "13px", fontWeight: 400}}>to discover more</Typography>
          </Box>
          <Box
        sx={{
          border: "3px solid #ffffff",
          height: "40px",
          width: "25px",
          borderRadius: "20px",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: "6px",
            height: "10px",
            backgroundColor: "#ffffff",
            borderRadius: "3px",
            position: "absolute",
            top: "5px",
            animation: `${scrollAnimation} 1.5s ease-in-out infinite`,
          }}
        />
      </Box>
        </Box>
        </Box>
        
      </Box>

      <Box
        sx={{
          position: "absolute",
          right: {sm: "20px"},
          top: {xs: "97%",sm:  "35%", md: "50%"},
          transform: "translateY(-50%)",
          display: {xs: "none", sm: "flex"},
          flexDirection: {xs: "row", sm: "column"},
          gap: "10px",
        }}
      >
        {backgroundImages.map((_, index) => (
          <Button
            key={index}
            onClick={() => handleBackgroundChange(index)}
            sx={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: currentImageIndex === index ? "transparent" : "transparent", // Active button styling
              color: currentImageIndex === index ? "#fff" : "#C9C9C9",
              fontSize: currentImageIndex === index ? "22px" : "18px",
              // fontWeight: "bold",
              "&:hover": {
                // backgroundColor: currentImageIndex === index ? "#333" : "#ddd",
                fontSize: "22px",
              },
            }}
          >
           0{index + 1}
          </Button>
        ))}
      </Box>
      </Container>
    </Box>
  );
}
