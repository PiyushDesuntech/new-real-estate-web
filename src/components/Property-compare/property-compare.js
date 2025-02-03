"use client";
import React, { useState } from "react";
import { Box } from "@mui/material";
import Heading from "./components/Heading";
import CompareProperty from "./components/CompareProperty";
import ComparisonSection from "./components/ComparisonSection";

export default function PropertyCompare() {
  const [projects, setProjects] = useState([
    {
      name: 'ATS Pristine City',
      location: 'Sector 1, Any Street, Canada',
      image: '/Images/Propertycompare2.png',
      price: '$84.0 Lac - 1.54 Cr',
      bhk: '2, 3 BHK',
      developerName: 'ATS Infrastructure',
      pricePerSqft: '$3566',
      maintenancePerSqft: '$566',
      possessionDate: '20 Jan 2022',
      landArea: '50 Acres',
      openArea: '6 Acres',
      totalFlats: '355',
      densityFactor: '35/Acre',
      powerBackup: true,
      pipedGas: true,
      clubhouse: true,
      childrensPlayArea: true,
      sedEtMollisLeo: true,
      curabiturLaciniaNisi: true,
      loremIpsumDolor: true,
    },
    {
      name: 'Mahagun Mantra',
      location: 'Sector 3, ABC, Canada',
      image: '/Images/Propertycompare2.png',
      price: '$75.0 Lac - 1.45 Cr',
      bhk: '2, 3, 4 BHK',
      developerName: 'Mahagun Group',
      pricePerSqft: '$3566',
      maintenancePerSqft: '$366',
      possessionDate: '17 Jan 2024',
      landArea: '30 Acres',
      openArea: '5 Acres',
      totalFlats: '5545',
      densityFactor: '25/Acre',
      powerBackup: false,
      pipedGas: false,
      clubhouse: false,
      childrensPlayArea: false,
      sedEtMollisLeo: false,
      curabiturLaciniaNisi: false,
      loremIpsumDolor: false,
    },
  ]);

  const handleRemoveProject = (index) => {
    const newProjects = [...projects];
    newProjects.splice(index, 1);
    setProjects(newProjects);
  };

  const handleAddProject = () => {
    alert('Add Project functionality to be implemented.');
  };

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
          marginBottom: { xs: '10px', sm: '5px', lg: '5px' },
          zIndex: { sm: 2 },
          boxSizing: 'border-box',
          width: '100%',
        }}
      >
        <Heading />
      </Box>
      <Box
        sx={{
          maxWidth: { xs: '90%', sm: '95%', lg: '1350px' },
          width: '100%',
          margin: '0',
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
        <Box sx={{ paddingLeft: { sm: '-20px', lg: '-40px' } }}>
          <CompareProperty
            projects={projects}
            handleRemoveProject={handleRemoveProject}
            handleAddProject={handleAddProject}
          />
          <ComparisonSection projects={projects} />
        </Box>
      </Box>
    </Box>
  );
}
