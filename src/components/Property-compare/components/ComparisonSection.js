import React, { useState } from 'react';
import { Box, Typography, IconButton, useTheme, Divider } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

const TableRow = ({ label, value1, value2, isHeader = false, showDash = false, noBorder = false, isLastAmenity = false }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        '&::before': {
          content: '""',
          left: 0,
          top: 0,
          bottom: 0,
          width: '1px',
          backgroundColor: '#e0e0e0',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          bgcolor: 'white',
          borderBottom: '1px solid #e0e0e0',
          borderLeft: '1px solid #e0e0e0',
          minWidth: '768px',
        }}
      >
        <Box
          sx={{
            width: '240px',
            minWidth: '240px',
            maxWidth: '240px',
            borderRight: '1px solid #e0e0e0',
            display: 'flex',
            alignItems: 'center',
            bgcolor: isHeader ? 'white' : '#F5F5F5',
            p: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: isHeader ? '20px' : '14px',
              color: '#303030',
              fontWeight: isHeader ? 750 : 500,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              ...(isLastAmenity && {
                textAlign: 'center',
                margin: 'auto',
              }),
            }}
          >
            {label}
            {isHeader && (
              <IconButton size="small" sx={{ ml: 1, minWidth: '24px', width: '24px' }}>
                <KeyboardArrowUpIcon sx={{ color: '#303030' }} />
              </IconButton>
            )}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'row', flex: 1, minWidth: '528px' }}>
          {[value1, value2, '-'].map((value, index) => (
            <Box
              key={index}
              sx={{
                width: '33.33%',
                minWidth: '176px',
                bgcolor: 'white',
                borderRight: '1px solid #e0e0e0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              {showDash ? (
                <>
                  <Box
                    sx={{
                      p: 2,
                      borderBottom: isLastAmenity ? '1px solid #e0e0e0' : 'none',
                      display: 'flex',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: index === 0 ? '16px' : '14px',
                        color: '#009681',
                        fontWeight: index === 0 ? 600 : 500,
                        textAlign: 'left',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                      }}
                    >
                      {typeof value === 'boolean' ? (
                        value ? (
                          <DoneIcon sx={{ color: '#009681' }} />
                        ) : (
                          <CloseIcon sx={{ color: 'black' }} />
                        )
                      ) : value}
                    </Typography>
                  </Box>
                  {isLastAmenity && (
                    <Box sx={{ p: 2 }}>
                      <Typography
                        component="span"
                        sx={{
                          fontSize: '14px',
                          color: '#303030',
                          cursor: 'pointer',
                          '&:hover': {
                            textDecoration: 'underline',
                          },
                          ...(index === 2 && {
                            visibility: 'hidden',
                          }),
                        }}
                      >
                        See All 8 Amenities
                      </Typography>
                    </Box>
                  )}
                </>
              ) : (
                <Box sx={{ p: 2 }}>
                  <Typography sx={{ fontSize: '14px', color: '#303030', textAlign: 'left' }}>
                    {value}
                  </Typography>
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

const ComparisonSection = () => {
  const [expandedPanels, setExpandedPanels] = useState({
    propertyDetails: true,
    masterPlan: true,
    amenities: true,
    floorPlan: false,
    unitPlan: false,
    localityComparison: false,
    builderRepute: false,
  });

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpandedPanels((prev) => ({ ...prev, [panel]: isExpanded }));
  };

  const accordionStyles = {
    '&:before': { display: 'none' },
    '&:not(:last-child)': { borderBottom: '1px solid #e0e0e0' },
  };

  const accordionSummaryStyles = {
    bgcolor: 'white',
    minWidth: '768px',
    borderLeft: '1px solid #e0e0e0',
    borderRight: '1px solid #e0e0e0',
    pl: 3.2,
    '& .MuiAccordionSummary-content': { margin: '16px 0', pl: 0 },
    '& .MuiTypography-root': { fontSize: '18px', fontWeight: 600, paddingLeft: 0, marginLeft: '-8px' },
  };

  const sections = [
    {
      id: 'propertyDetails',
      title: 'Property Details',
      content: [
        { label: 'Developer Name', value1: 'ATS Infrastructure', value2: 'Mahagun Group' },
        { label: 'Price/Sqft', value1: '$3566', value2: '$3566' },
        { label: 'Maintenance/Sqft', value1: '$566', value2: '$366' },
        { label: 'Possession Date & Status', value1: '20 Jan 2022', value2: '17 Jan 2024' },
        { label: 'Project Land Area', value1: 'Ready to Move', value2: 'Under construction', noBorder: true },
      ],
    },
    {
      id: 'masterPlan',
      title: 'Master Plan',
      content: [
        { label: "Fuss'e justo libero", value1: 'Pellentesque quis', value2: 'Pellentesque quis' },
        { label: 'Land Area', value1: '50 Acres', value2: '30 Acres' },
        { label: 'Open Area', value1: '6 Acres', value2: '5 Acres' },
        { label: 'Total Number of Flats', value1: '355', value2: '5545' },
        { label: 'Density Factor - Units/Acre', value1: '35/Acre', value2: '25/Acre', noBorder: true },
      ],
    },
    {
      id: 'amenities',
      title: 'Amenities',
      content: [
        { label: 'Power Backup', value1: true, value2: false, showDash: true },
        { label: 'Piped Gas', value1: true, value2: false, showDash: true },
        { label: 'Clubhouse', value1: true, value2: false, showDash: true },
        { label: "Children's / toddler's Play Area", value1: true, value2: false, showDash: true, isLastAmenity: true, noBorder: true },
      ],
    },
    {
      id: 'floorPlan',
      title: 'Floor Plan',
      content: [
        { label: 'Sed et mollis leo', value1: true, value2: false, showDash: true },
        { label: 'Curabitur lacinia nisi', value1: true, value2: false, showDash: true },
        { label: 'Lorem ipsum dolor', value1: true, value2: false, showDash: true, noBorder: true },
      ],
    },
    {
      id: 'unitPlan',
      title: 'Unit Plan',
      content: [
        { label: 'Sed et mollis leo', value1: true, value2: false, showDash: true },
        { label: 'Curabitur lacinia nisi', value1: true, value2: false, showDash: true },
        { label: 'Lorem ipsum dolor', value1: true, value2: false, showDash: true, noBorder: true },
      ],
    },
    {
      id: 'localityComparison',
      title: 'Locality Comparison',
      content: [
        { label: 'Sed et mollis leo', value1: true, value2: false, showDash: true },
        { label: 'Curabitur lacinia nisi', value1: true, value2: false, showDash: true },
        { label: 'Lorem ipsum dolor', value1: true, value2: false, showDash: true, noBorder: true },
      ],
    },
    {
      id: 'builderRepute',
      title: 'Builder Repute',
      content: [
        { label: 'Sed et mollis leo', value1: true, value2: false, showDash: true },
        { label: 'Curabitur lacinia nisi', value1: true, value2: false, showDash: true },
        { label: 'Lorem ipsum dolor', value1: true, value2: false, showDash: true, noBorder: true },
      ],
    },
  ];

  return (
    <Box sx={{ width: '100%', overflowX: 'auto', '& .MuiAccordionDetails-root': { padding: 0 } }}>
      <Divider />
      {sections.map((section) => (
        <React.Fragment key={section.id}>
          <Accordion
            expanded={expandedPanels[section.id]}
            onChange={handleAccordionChange(section.id)}
            disableGutters
            elevation={0}
            sx={accordionStyles}
          >
            <AccordionSummary expandIcon={<KeyboardArrowDownIcon />} sx={accordionSummaryStyles}>
              <Typography>{section.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Divider />
              {section.content.map((row, index) => (
                <TableRow
                  key={index}
                  label={row.label}
                  value1={row.value1}
                  value2={row.value2}
                  showDash={row.showDash}
                  noBorder={row.noBorder}
                  isLastAmenity={row.isLastAmenity}
                />
              ))}
            </AccordionDetails>
          </Accordion>
          <Divider />
        </React.Fragment>
      ))}
    </Box>
  );
};

export default ComparisonSection;