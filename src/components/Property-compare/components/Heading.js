"use client";

import { Breadcrumbs, Typography, Link as MuiLink, Box, Container } from "@mui/material";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Heading() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  const breadcrumbLinks = pathSegments.map((segment, index) => {
    const isLast = index === pathSegments.length - 1;
    const routePath = "/" + pathSegments.slice(0, index + 1).join("/");

    const displayName = segment
      .replace(/-/g, " ") 
      .replace(/\b\w/g, (char) => char.toUpperCase()); 

    return isLast ? (
      <Typography 
        key={routePath} 
        sx={{
          fontSize: { 
            xs: '12px',
            sm: '13px',
            md: '14px',
            lg: '16px' 
          },
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          color: '#B3A87A'
        }}
      >
        {displayName}
      </Typography>
    ) : (
      <MuiLink
        key={routePath}
        component={Link}
        href={routePath}
        underline="hover"
        color="inherit"
        sx={{
          fontSize: { 
            xs: '12px',
            sm: '13px',
            md: '14px',
            lg: '16px' 
          },
          whiteSpace: 'nowrap',
          '&:hover': {
            color: '#3E4C66'
          }
        }}
      >
        {displayName}
      </MuiLink>
    );
  });

  return (
    <Container maxWidth="xl" sx={{px: {xs: 3,md: 4, lg: 8}, py: 4}}>
      <Box 
      sx={{ 
        minWidth: '51px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Breadcrumbs 
        aria-label="breadcrumb" 
        separator={
          <ArrowForwardIosIcon 
            sx={{
              fontSize: {
                xs: '8px',
                sm: '9px',
                md: '10px'
              },
              color: '#666'
            }}
          />
        }
        sx={{
          '& .MuiBreadcrumbs-ol': {
            flexWrap: 'nowrap',
            overflow: 'auto',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
              display: 'none'
            }
          },
          '& .MuiBreadcrumbs-li': {
            minWidth: 'auto',
            whiteSpace: 'nowrap'
          }
        }}
      >
        <MuiLink 
          component={Link} 
          href="/" 
          underline="hover" 
          color="inherit"
          sx={{
            fontSize: { 
              xs: '12px',
              sm: '13px',
              md: '14px',
              lg: '16px' 
            },
            whiteSpace: 'nowrap',
            '&:hover': {
              color: '#3E4C66'
            }
          }}
        >
          Home
        </MuiLink>
        {breadcrumbLinks}
      </Breadcrumbs>

      <Typography 
        sx={{ 
          fontSize: { 
            xs: '26px',
            sm: '28px',
            md: '32px',
            lg: '37px' 
          },
          fontWeight: 600,
          color: '#484848',
          lineHeight: {
            xs: 1.2,
            sm: 1.25,
            md: 1.3
          },
          letterSpacing: {
            xs: '-0.5px',
            sm: '-0.75px',
            md: '-1px'
          }
        }}
      >
        Property Compare
      </Typography>
    </Box>
    </Container>
  );
}

export default Heading;