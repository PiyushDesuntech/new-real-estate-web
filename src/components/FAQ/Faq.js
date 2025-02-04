import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Heading from "@/components/FAQ/components/Heading";
import Frequently_asked_ques from "@/components/FAQ/components/Frequently-asked-ques";
import Questions_container from "@/components/FAQ/components/Questions-container";
import JoinUs from "../Home/compoments/JoinUs";

export default function Faq() {
  return (
    <Box>
      <Container maxWidth="xl" sx={{ minHeight: "100vh", pb: 10, px: {xs: 1, md: 1 } }}>
      <Box
        sx={{
          paddingLeft: { xs: '0px', sm: '0px', lg: '0px' },
          paddingTop: { xs: '24px', sm: '32px' },
          marginBottom: { xs: '10px', sm: '10px', lg: '10px' },
        }}
      >
        <Heading />
      </Box>
      <Box sx={{
          marginBottom: { xs: '1px', sm: '1px', md:'4px', lg: '5px' },
          }}>
        <Frequently_asked_ques />
        </Box>
        <Box sx={{
          px: {xs: 0, md: 4}}}>
        <Questions_container />
        </Box>
      </Container>
      <JoinUs/>
    </Box>
  );
}
