import React from 'react';
import { Box, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';

const CompareProperty = ({ projects, handleRemoveProject, handleAddProject }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  // Define features to compare
  const features = [
    { label: 'Price', key: 'price' },
    { label: 'BHK', key: 'bhk' },
  ];

  return (
    <Box
      sx={{
        width: '100%',
        height: { xs: 'auto', md: 'auto' },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        bgcolor: 'white',
        boxShadow: '0 10px 10px rgba(0,0,0,0.12)',
        overflow: 'hidden',
        mb: 3,
        border: '1px solid #000000',
      }}
    >
      {/* Features Label */}
      <Box
        sx={{
          flex: { xs: '0 0 auto', md: '0.8' },
          display: 'flex',
          alignItems: 'center',
          p: 4.7,
          borderRight: { xs: 'none', md: '1px solid #e0e0e0' },
          borderBottom: { xs: '1px solid #e0e0e0', md: 'none' },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '16px', md: '18px' },
            color: '#303030',
            fontWeight: 400,
          }}
        >
          Features
        </Typography>
      </Box>

      {/* Project Cards and Comparison Table */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          flex: { xs: '1', md: '3.2' },
        }}
      >
        {projects.map((project, index) => (
          <Box
            key={project.name}
            sx={{
              flex: '1',
              borderLeft: { xs: 'none', md: '1px solid #e0e0e0' },
              borderBottom: { xs: '1px solid #e0e0e0', md: 'none' },
              p: 3,
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Project Header */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 1,
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '16px', md: '18px' },
                  color: '#303030',
                  fontWeight: 500,
                }}
              >
                {project.name}
              </Typography>
              <CloseIcon
                onClick={() => handleRemoveProject(index)}
                sx={{
                  fontSize: { xs: '20px', md: '25px' },
                  color: '#909090',
                  cursor: 'pointer',
                }}
              />
            </Box>

            {/* Project Location */}
            <Typography
              sx={{
                fontSize: '14px',
                color: '#666',
                mb: 2,
              }}
            >
              {project.location}
            </Typography>

            {/* Project Image */}
            <Box
              sx={{
                width: '100%',
                height: { xs: '180px', sm: '200px' },
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '6px',
              }}
            >
              <Image
                src={project.image}
                alt={project.name}
                layout="fill"
                objectFit="cover"
                priority
              />
            </Box>

            {/* Feature Comparison Table */}
            <Box sx={{ mt: 2 }}>
              {features.map((feature) => (
                <Box
                  key={feature.key}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '14px',
                      color: '#606060',
                    }}
                  >
                    {feature.label}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '14px',
                      color: '#333',
                      fontWeight: 500,
                    }}
                  >
                    {project[feature.key]}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* VS Badge */}
            {index === 1 && (
              <Box
                sx={{
                  position: { xs: 'absolute', md: 'absolute' },
                  left: { xs: '50%', md: '-18px' },
                  top: { xs: '-18px', md: '50%' },
                  transform: {
                    xs: 'translateX(-50%)',
                    md: 'translateY(-50%)',
                  },
                  width: '36px',
                  height: '36px',
                  bgcolor: '#dcefec',
                  border: '1px solid #B2DFD8',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#009681',
                  fontSize: '14px',
                  fontWeight: 500,
                  zIndex: 1,
                }}
              >
                VS
              </Box>
            )}
          </Box>
        ))}

        {/* Add Project Section */}
        <Box
          sx={{
            flex: '1',
            borderLeft: { xs: 'none', md: '1px solid #e0e0e0' },
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: { xs: '200px', md: 'auto' },
          }}
        >
          <Typography
            sx={{
              fontSize: '14px',
              color: '#909090',
              mb: 2,
              textAlign: 'center',
            }}
          >
            Add Project to Compare
          </Typography>
          <Button
            variant="outlined"
            startIcon={<span>+</span>}
            onClick={handleAddProject}
            sx={{
              height: '32px',
              borderRadius: '16px',
              border: '1px solid #000',
              color: '#000000',
              textTransform: 'none',
              fontSize: '14px',
              padding: '4px 16px',
              fontWeight: 400,
              '&:hover': {
                borderColor: '#000',
                bgcolor: 'transparent',
              },
            }}
          >
            Add Project
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CompareProperty;
