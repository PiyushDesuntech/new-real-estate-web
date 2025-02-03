import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Heading from "./Components/Heading";
import Main_image from "./Components/Main_image";

export default function Image_viewer() {
  return (
    <Box sx={{ backgroundColor: "#F7F7F7", py: 1 }}>
      <Container maxWidth="xl" sx={{ px: 1 }}>
        {/* Box around Heading with margin bottom */}
        <Box sx={{ 
          marginBottom: 10,
          mt:3,
          ml:{ xs: '-5px', sm: '-13px', lg: '-15px' },
          }}>
          <Heading />
        </Box>

        {/* Box around Main_image with margin top */}
        <Box sx={{ 
          marginTop: 2,
          ml:-2,
           }}>
          <Main_image />
        </Box>
      </Container>
    </Box>
  );
}
