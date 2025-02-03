"use client";
import React from "react";
import { Box } from "@mui/material";
import Heading from "./components/Heading";
import ProjectComparison from "./components/CompareProperty";
import ComparisonSection from "./components/ComparisonSection";

export default function PropertyCompare() {
  return (
    <Box
      sx={{
        backgroundColor: '#F7F7F7',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: '32px', sm: '48px' },
        overflow: 'hidden',
        position: 'relative',
        paddingBottom: { xs: '50px', sm: '200px', lg: '250px' },
      }}
    >
      <Box
        sx={{
          paddingLeft: { xs: '5px', sm: '8px', lg: '8px' },
          paddingRight: { xs: '26px', sm: '57px', lg: '80px' },
          paddingTop: { xs: '24px', sm: '32px' },
          marginBottom: { xs: '10px', sm: '5px',lg:'5px' },
          zIndex: { sm: 2 },
          boxSizing: 'border-box',
          width: '100%',
        }}
      >
        <Heading />
      </Box>
      <Box
        sx={{
          maxWidth: { xs: '90%', sm: '95%', lg: '1250px' },
          width: '100%',
          margin: '0', // Removed auto margin to align left
          paddingLeft: { xs: '30px', sm: '35px', lg: '70px' },
          '& > *': {
            width: '100%',
            marginBottom: { xs: '24px', sm: '32px' },
            '&:last-child': {
              marginBottom: 0
            }
          }
        }}
      >
        <Box sx={{ paddingLeft: { sm: '-20px', lg: '-40px' } }}> {/* Shift components slightly left on tablet and desktop */}
          <ProjectComparison />
          <ComparisonSection />
        </Box>
      </Box>
    </Box>
  );
}
