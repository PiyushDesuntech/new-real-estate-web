"use client";

import { Box, Container } from "@mui/material";
import React from "react";
import Heading from "./components/Heading";
import LoanCalculator from "./components/LoanCalculator";
import LoanAmount from "./components/LoanAmount";
import AdvancedSearch from "./components/AdvanceSearch";
import LoanInformation from "./components/LoanInformation";

export default function Mortgage() {
  return (
    <Box sx={{ backgroundColor: "#F7F7F7", minHeight: "100vh", minWidth: "51px" }}>
      <Container
        maxWidth="xl"
        sx={{
          padding: { 
            xs: "24px 16px", 
            sm: "32px 24px", 
            md: "48px 32px" 
          },
          minWidth: "51px",
          paddingLeft: { md: "24px", lg: "50px" },
        }}
      >
        {/* Page Heading */}
        <Box sx={{ 
          marginBottom: { xs: 3, md: 4 },
          paddingLeft: { xs: 0, md: "-20px" },
        }}>
          <Heading />
        </Box>

        {/* Main Section */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              lg: "minmax(680px, 2fr) minmax(300px, 1fr)"
            },
            gap: { xs: 3, sm: 4, md: 5, lg: 6 },
            marginBottom: { xs: 4, md: 6 }
          }}
        >
          {/* Left Column: Loan Amount */}
          <Box sx={{ 
            paddingLeft: { xs: 0, lg: "110px" },
            display: 'flex',
            justifyContent: { xs: 'center', lg: 'flex-start' }
          }}>
            <LoanAmount />
          </Box>

          {/* Right Column: Calculator and Advanced Search */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              alignItems: "center",
              width: { xs: "100%", lg: "auto" },
              maxWidth: { xs: "680px", lg: "none" },
              margin: { xs: "0 auto", lg: 0 }
            }}
          >
            <Box sx={{ width: "100%" }}>
              <LoanCalculator />
            </Box>
            <Box sx={{ width: "100%" }}>
              <AdvancedSearch />
            </Box>
          </Box>
        </Box>

        {/* Loan Information Section */}
        <Box
          sx={{
            width: "100%",
            maxWidth: { lg: "calc(100% - 130px)" },
            marginTop: { xs: 4, lg: -13 },
            marginLeft: { xs: 0, lg: "70px" },
            paddingRight: { lg: "45px" }
          }}
        >
          <LoanInformation />
        </Box>
      </Container>
    </Box>
  );
}