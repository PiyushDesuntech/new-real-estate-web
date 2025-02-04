"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

export default function MainImage() {
  const images = [
    "/Images/imageviewmain.png",
    "/Images/view_imagechanger2.png",
    "/Images/Popular3.svg",
    "/Images/imageviewmain.png",
    "/Images/imageviewmain.png",
    "/Images/view_imagechanger2.png",
    "/Images/Popular3.svg",
    "/Images/imageviewmain.png",
    "/Images/imageviewmain.png",
    "/Images/view_imagechanger2.png",
    "/Images/Popular3.svg",
    "/Images/imageviewmain.png",
    "/Images/imageviewmain.png",
    "/Images/view_imagechanger2.png",
    "/Images/Popular3.svg",
    "/Images/imageviewmain.png",
    "/Images/imageviewmain.png",
    "/Images/view_imagechanger2.png",
    "/Images/Popular3.svg",
    "/Images/imageviewmain.png",
    "/Images/imageviewmain.png",
    "/Images/view_imagechanger2.png",
    "/Images/Popular3.svg",
    "/Images/imageviewmain.png",
    "/Images/imageviewmain.png",
    "/Images/view_imagechanger2.png",
    "/Images/Popular3.svg",
    "/Images/imageviewmain.png",
    "/Images/imageviewmain.png",
    "/Images/view_imagechanger2.png",
    "/Images/Popular3.svg",
    "/Images/imageviewmain.png",
    "/Images/imageviewmain.png",
    "/Images/view_imagechanger2.png",
    "/Images/Popular3.svg",
    "/Images/imageviewmain.png",
  ];

  // Paginate images into sets of 4
  const imageSets = [];
  for (let i = 0; i < images.length; i += 4) {
    imageSets.push(images.slice(i, i + 4));
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImageSetIndex, setCurrentImageSetIndex] = useState(0);

  const handlePrevClick = () => {
    const newIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
    
    // Update image set index based on the new image index
    const newSetIndex = Math.floor(newIndex / 4);
    setCurrentImageSetIndex(newSetIndex);
  };

  const handleNextClick = () => {
    const newIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
    
    // Update image set index based on the new image index
    const newSetIndex = Math.floor(newIndex / 4);
    setCurrentImageSetIndex(newSetIndex);
  };

  const handlePrevImageSetClick = () => {
    const newSetIndex = currentImageSetIndex === 0 ? imageSets.length - 1 : currentImageSetIndex - 1;
    setCurrentImageSetIndex(newSetIndex);
    
    // Update current image index to the first image in the new set
    const newImageIndex = newSetIndex * 4;
    setCurrentImageIndex(newImageIndex);
  };

  const handleNextImageSetClick = () => {
    const newSetIndex = currentImageSetIndex === imageSets.length - 1 ? 0 : currentImageSetIndex + 1;
    setCurrentImageSetIndex(newSetIndex);
    
    // Update current image index to the first image in the new set
    const newImageIndex = newSetIndex * 4;
    setCurrentImageIndex(newImageIndex);
  };

  return (
    <Box sx={{ position: "relative", bottom: { md: "40px", xs: "50px", sm: "50px" } }}>
      {/* Main Image Slider */}
      <Box
        sx={{
          width: { xs: "100%", sm: "100%", lg: "100%" },
          display: "flex",
          gap: "1px",
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
          // p: 1,
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: "5px", sm: "5px", md: "5px" },
            flexWrap: "wrap",
            padding: "4px",
          }}
        >
          <Box
            sx={{
              width: { xs: "30px", sm: "50px", md: "53px" },
              height: { xs: "30px", sm: "50px", md: "53px" },
              border: "1px solid #ADADAD",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={handlePrevClick}
          >
            <Image src="/Images/preview_prev.png" alt="Previous" width={20} height={24} />
          </Box>
          <Box
            sx={{
              flex: 1,
              width: "100%",
              maxWidth: "100%",
              minHeight: "200px",
              height: "100%",
              aspectRatio: { xs: "4/3", sm: "16/9", md: "1440/588" },
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Image
              src={images[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </Box>
          <Box
            sx={{
              width: { xs: "30px", sm: "50px", md: "53px" },
              height: { xs: "30px", sm: "50px", md: "53px" },
              border: "1px solid #ADADAD",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={handleNextClick}
          >
            <Image src="/Images/preview_next.png" alt="Next" width={20} height={24} />
          </Box>
        </Box>
      </Box>
      {/* Lower Image Navigator */}
      <Box
        sx={{
          // width: "90%",
          margin: "auto",
          display: "flex",
          flexDirection: { xs: "column",  lg: "row" },
          mt: { md: "30px", sm: "0px", xs: "10px" },
          position: "relative",
          bottom: { xs: "2px", sm: "2px" },
          alignItems: "center",
          // gap: { lg: "90px", sm: "2px", xs: "2px" },
          px: {xs: "20px", lg: "40px"},
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            position: "relative",
            mt: "10px",
            mb: "10px",
            bottom: { md: "17px", sm: "1px", xs: "1px" },
            left: { md: "20px" },
            display: "flex",
            flexDirection: { lg: "column", sm: "row", xs: "column" },
            alignItems: { xs: "center", md: "flex-start" },
            gap: { md: "10px", sm: "2px", xs: "2px" },
            alignItems: {xs: "unset", md: "center", lg: "unset"}
          }}
        >
          <Typography sx={{ fontSize: { sm: "30px", xs: "30px", md: "40px" }, fontWeight: "500" }}>
            $5500
          </Typography>
          <Box sx={{ display: "flex", alignItems: {xs: "flex-start", sm: "center"},flexDirection: {xs: "column", sm: "row"}, gap: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px", }}>
            <LocationOnOutlinedIcon sx={{ fontSize: { xs: 20, md: 35 } }} />
            <Typography sx={{ fontSize: { xs: "10px", sm: "16px", md: "18px" }, color: "#484848", lineHeight: "1.2" }}>
              22-05 Astoria Blvd, Astoria
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <Typography sx={{ fontSize: { xs: "10px", sm: "16px", md: "18px" }, color: "#484848" }}>Beds: 4</Typography>
            <Typography sx={{ fontSize: { xs: "10px", sm: "16px", md: "18px" }, color: "#484848" }}>Baths: 2</Typography>
          </Box>
          </Box>
        </Box>
        {/* Lower Slider Images */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: "5px", sm: "10px", md: "15px" },
            marginBottom: "20px",
            justifyContent: "center",
            flexWrap: "nowrap",
            overflowX: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: "5px", sm: "10px", md: "15px" },
              flexWrap: "nowrap",
              overflowX: "auto",
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            <Box
              sx={{
                width: { xs: "25px", md: "33px" },
                height: { xs: "25px", md: "33px" },
                border: "1px solid #ADADAD",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
                cursor: "pointer",
              }}
              onClick={handlePrevImageSetClick}
            >
              <Image src="/Images/preview_prev.png" alt="Previous" width={10} height={14} />
            </Box>
            {imageSets[currentImageSetIndex].map((image, index) => {
              const absoluteIndex = currentImageSetIndex * 4 + index;
              return (
                <Box
                  key={absoluteIndex}
                  sx={{
                    width: { xs: "50px", sm: "120px",md: "140px", lg: "167px" },
                    height: { xs: "40px", sm: "100px", md: "127px" },
                    border: currentImageIndex === absoluteIndex ? "2px solid #E8E1C4" : "1px solid",
                    position: "relative",
                    borderRadius: "4px",
                    overflow: "hidden",
                    cursor: "pointer",
                    flexShrink: 0,
                  }}
                  onClick={() => setCurrentImageIndex(absoluteIndex)}
                >
                  <Image src={image} alt={`Image ${absoluteIndex + 1}`} layout="fill" objectFit="cover" />
                </Box>
              );
            })}
            <Box
              sx={{
                width: { xs: "25px", md: "33px" },
                height: { xs: "25px", md: "33px" },
                border: "1px solid #ADADAD",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
                cursor: "pointer",
              }}
              onClick={handleNextImageSetClick}
            >
              <Image src="/Images/preview_next.png" alt="Next" width={10} height={14} />
            </Box>
          </Box>
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: { xs: "14px", md: "20px" },
              textAlign: "center",
              marginTop: { xs: "10px", md: "0" },
            }}
          >
            {currentImageIndex + 1}/{images.length}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}