"use client";
import React, { useState } from "react";
import { Grid, Box, Container, Typography } from "@mui/material";
import HomeCards from "./components/HomeCards";
import Filter from "./components/Filter";
import MapView from "./components/MapView";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HomeOptions from "./components/HomeOptions";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  useMediaQuery,
} from "@mui/material";

const handleFilterChange = (field) => (event) => {
  setFilters({ ...filters, [field]: event.target.value });
};

const properties = [
  {
    id: 1,
    title: "Diamond Manor Apartment",
    type: "For Rent",
    address: "145 Willow St #2, Cambridge, MA 02141",
    beds: 2,
    baths: 2,
    sqft: 0,
    dateAvailable: "12/10/2025",
    price: 3000,
    homeType: "Apartment",
    image: "/Images/mapview1.svg",
    locationSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.550029100468!2d-71.0940433240291!3d42.373427971191546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370b41ff4d93d%3A0xd01743bec9a431df!2s145%20Willow%20St%20%232%2C%20Cambridge%2C%20MA%2002141%2C%20USA!5e0!3m2!1sen!2sin!4v1737012416802!5m2!1sen!2sin",
  },
  {
    id: 2,
    title: "Villa Bay",
    type: "For Sale",
    address: "137 Willow St #2, Cambridge, MA 02141",
    beds: 2,
    baths: 2,
    sqft: 150,
    price: 500000,
    homeType: "Condo",
    image: "/Images/mapview2.svg",
    locationSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d736.8877161996699!2d-71.09211213039339!3d42.373410164426055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370b41fb83f01%3A0xa59eb07b5f4331e6!2s137%20Willow%20St%2C%20Cambridge%2C%20MA%2002141%2C%20USA!5e0!3m2!1sen!2sin!4v1737013795316!5m2!1sen!2sin",
  },
  {
    id: 3,
    title: "Diamond Manor Apartment",
    type: "For Rent",
    address: "145 Willow St #2, Cambridge, MA 02141",
    beds: 2,
    baths: 2,
    sqft: 0,
    dateAvailable: "12/10/2025",
    price: 3000,
    homeType: "Apartment",
    image: "/Images/mapview3.svg",
    locationSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.550029100468!2d-71.0940433240291!3d42.373427971191546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370b41ff4d93d%3A0xd01743bec9a431df!2s145%20Willow%20St%20%232%2C%20Cambridge%2C%20MA%2002141%2C%20USA!5e0!3m2!1sen!2sin!4v1737012416802!5m2!1sen!2sin",
  },
  {
    id: 4,
    title: "Villa Bay",
    type: "For Sale",
    address: "145 Willow St #2, Cambridge, MA 02141",
    beds: 2,
    baths: 2,
    sqft: 150,
    price: 500000,
    homeType: "Condo",
    image: "/Images/mapview4.svg",
    locationSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.550029100468!2d-71.0940433240291!3d42.373427971191546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370b41ff4d93d%3A0xd01743bec9a431df!2s145%20Willow%20St%20%232%2C%20Cambridge%2C%20MA%2002141%2C%20USA!5e0!3m2!1sen!2sin!4v1737012416802!5m2!1sen!2sin",
  },
  {
    id: 5,
    title: "Diamond Manor Apartment",
    type: "For Rent",
    address: "145 Willow St #2, Cambridge, MA 02141",
    beds: 2,
    baths: 2,
    sqft: 0,
    dateAvailable: "12/10/2025",
    price: 3000,
    homeType: "Apartment",
    image: "/Images/mapview5.svg",
    locationSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.550029100468!2d-71.0940433240291!3d42.373427971191546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370b41ff4d93d%3A0xd01743bec9a431df!2s145%20Willow%20St%20%232%2C%20Cambridge%2C%20MA%2002141%2C%20USA!5e0!3m2!1sen!2sin!4v1737012416802!5m2!1sen!2sin",
  },
  {
    id: 6,
    title: "Villa Bay",
    type: "For Sale",
    address: "145 Willow St #2, Cambridge, MA 02141",
    beds: 2,
    baths: 2,
    sqft: 150,
    price: 500000,
    homeType: "Condo",
    image: "/Images/mapview6.svg",
    locationSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.550029100468!2d-71.0940433240291!3d42.373427971191546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370b41ff4d93d%3A0xd01743bec9a431df!2s145%20Willow%20St%20%232%2C%20Cambridge%2C%20MA%2002141%2C%20USA!5e0!3m2!1sen!2sin!4v1737012416802!5m2!1sen!2sin",
  },
  {
    id: 7,
    title: "Diamond Manor Apartment",
    type: "For Rent",
    address: "145 Willow St #2, Cambridge, MA 02141",
    beds: 2,
    baths: 2,
    sqft: 0,
    dateAvailable: "12/10/2025",
    price: 3000,
    homeType: "Apartment",
    image: "/Images/mapview3.svg",
    locationSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.550029100468!2d-71.0940433240291!3d42.373427971191546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370b41ff4d93d%3A0xd01743bec9a431df!2s145%20Willow%20St%20%232%2C%20Cambridge%2C%20MA%2002141%2C%20USA!5e0!3m2!1sen!2sin!4v1737012416802!5m2!1sen!2sin",
  },
  {
    id: 8,
    title: "Villa Bay",
    type: "For Sale",
    address: "145 Willow St #2, Cambridge, MA 02141",
    beds: 2,
    baths: 2,
    sqft: 150,
    price: 500000,
    homeType: "Condo",
    image: "/Images/mapview4.svg",
    locationSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.550029100468!2d-71.0940433240291!3d42.373427971191546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370b41ff4d93d%3A0xd01743bec9a431df!2s145%20Willow%20St%20%232%2C%20Cambridge%2C%20MA%2002141%2C%20USA!5e0!3m2!1sen!2sin!4v1737012416802!5m2!1sen!2sin",
  },
];

const MapViewIndex = () => {
  const [filters, setFilters] = useState({
    type: "",
    price: "",
    beds: "",
    baths: "",
    homeType: "",
  });
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [currentView, setCurrentView] = useState({
    sort: "Recommended",
    view: "Photos",
  });

  const filteredProperties = properties.filter((property) => {
    return (
      (filters.type === "" || property.type === filters.type) &&
      (filters.price === "" ||
        (filters.price === "<3000" && property.price < 3000) ||
        (filters.price === "3000-5000" &&
          property.price >= 3000 &&
          property.price <= 5000) ||
        (filters.price === ">5000" && property.price > 5000)) &&
      (filters.beds === "" || property.beds === filters.beds) &&
      (filters.baths === "" || property.baths === filters.baths) &&
      (filters.homeType === "" || property.homeType === filters.homeType)
      //   (filters.address === "" ||
      //     property.address.toLowerCase().includes(filters.address.toLowerCase()))
    );
  });

  const handleCardClick = (locationSrc) => {
    setSelectedLocation(locationSrc);
  };
  const handleSortChange = (sortType) => {
    setCurrentView({ ...currentView, sort: sortType });
  };

  const handleViewChange = (viewType) => {
    setCurrentView({ ...currentView, view: viewType });
  };

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ background: "#F7F7F7" }}>
      <Container maxWidth="xl" sx={{ px: { lg: 4, xs: 1 }, py: 3 }}>
        {/* <Filter filters={filters} setFilters={setFilters} /> */}
        <Grid
          container
          // spacing={3}
          sx={{
            display: "flex",
            flexWrap: "wrap-reverse",
            mt: -1,
            height: { xs: "100%", md: "100vh" },
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{
              height: "100%",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              py: 2,
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
              pr: { xs: 0, md: 1 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column", // Stack items in a column
                gap: "20px", // Space between sections
                // border: "1px solid red",
                mb: "10px",
              }}
            >
              {/* First Row */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap", // Ensures responsiveness
                  gap: "18px",
                  // border: "1px solid blue",
                }}
              >
                {/* Location Text */}
                <Typography
                  sx={{ fontSize: "26px", fontWeight: 700, color: "#616161" }}
                >
                  Pleasant Hill, A
                </Typography>

                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={2.5}
                  position="relative"
                  left={{ xs: 0, sm: 0, md: "50px" }}
                >
                  <FormControl fullWidth size="small">
                    <InputLabel
                      sx={{
                        color: "#222222",
                        "&.Mui-focused": {
                          color: "#222222",
                        },
                      }}
                    >
                      Price range
                    </InputLabel>
                    <Select
                      value={filters.homeType || ""}
                      onChange={handleFilterChange("homeType")}
                      label="Home Type"
                      sx={{
                        "& fieldset": {
                          border: "1.12px solid #949494",
                        },
                        borderRadius: "4px",
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#949494",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#949494",
                        },
                      }}
                    >
                      <MenuItem value="">All</MenuItem>
                      <MenuItem value="Apartment">Less than $3000</MenuItem>
                      <MenuItem value="Condo">$3000-$5000</MenuItem>
                      <MenuItem value="House">$5000-$10000</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                {/* Save Search Button */}
                <Grid item xs={12} sm={6} md={2.5}>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      bgcolor: "#E8E1C4",
                      color: "#484848", // This will apply the text and icon color
                      boxShadow: "none",
                      "&:hover": {
                        bgcolor: "#3E4C66",
                        color: "#fff", // This will change the color of both text and icon on hover
                        boxShadow: "none",
                      },
                      textTransform: "none",
                      borderRadius: "4px",
                      whiteSpace: "nowrap",
                      fontSize: { xs: "14px", md: "12px", lg: "16px" },
                      fontWeight: 500,
                      py: { xs: 1, md: 1, lg: 0.8 },
                      display: "flex", // Flex to align icon and text
                      alignItems: "center", // Vertically align the items
                      gap: 1, // Adds space between icon and text
                    }}
                  >
                    <CompareArrowsIcon sx={{ color: "#484848" }} />{" "}
                    {/* Ensuring the icon color matches */}
                    Comparison
                  </Button>
                </Grid>
              </Box>

              {/* Search Bar Below - Full Width */}
              <Box sx={{ width: "100%" }}>
                <Box
                  sx={{
                    width: "100%",
                    border: "2px solid #C7C7C7",
                    borderRadius: "6px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems:"center",
                   padding:"9px"
                  }}
                >
                  <Typography sx={{
                    fontSize:{xs:"12px",sm:"12px",md:"16px"},
                    color:"#616161",
                    fontWeight:"500",
                    fontFamily:"Lato"
                  }}>Showing 1-9 of 14 results</Typography>

                  <Box
                    sx={{

                      display: "flex",
                      alignItems:"center",
                      gap:"8px",
                      
                  
                    }}
                  >
                    <Typography sx={{
                         fontSize:{xs:"10px",sm:"10px",md:"15px"},
                       whiteSpace: "nowrap",    // Prevent wrapping
                       flexShrink: 0, 
                      
                    color:"#616161",
                    fontWeight:"700",
                    fontFamily:"Lato"
                    
                  }}>sort By:</Typography>
                    <select
                      defaultValue=""
                      style={{
                        width: "100%",
                        padding: "4px",
                      border:"none",
                        backgroundColor: "transparent",
                        fontSize: "14px",
                        outline:"none"
                      }}
                    >
                      <option value="">Default</option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Grid container spacing={2}>
              {filteredProperties.map((property) => (
                <Grid item xs={12} sm={6} key={property.id}>
                  <HomeCards
                    property={property}
                    onCardClick={handleCardClick}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{
              position: "sticky",
              top: 0,
              height: "100%",
              overflow: "hidden",
              pt: { xs: 0, md: 3 },
              pl: { xs: 0, md: 1 },
            }}
          >
            <MapView locationSrc={selectedLocation} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MapViewIndex;
