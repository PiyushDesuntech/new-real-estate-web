"use client";
import React, { useState } from "react";
import {
  Grid,
  Box,
  Container,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Button,
  InputLabel,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import HomeCards from "./components/HomeCards";
import MapView from "./components/MapView";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HomeOptions from "./components/HomeOptions";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

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

const PropertyComaprisionIndex = () => {
    const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [selectedLocation, setSelectedLocation] = useState(
    properties[0].locationSrc
  );
  const [filters, setFilters] = useState({
    homeType: "",
    priceRange: [0, 1000000],
    sort: "",
  });

  const [checkedCards, setCheckedCards] = useState({});
  const handleCheckboxChange = (event, id) => {
    setCheckedCards({
      ...checkedCards,
      [id]: event.target.checked,
    });
  };

  const handleCardClick = (locationSrc) => {
    setSelectedLocation(locationSrc);
  };

  const handleSortChange = (event) => {
    setFilters({ ...filters, sort: event.target.value });
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredProperties = properties
    .filter((property) => {
      return (
        (filters.homeType === "" || property.homeType === filters.homeType) &&
        property.price >= filters.priceRange[0] &&
        property.price <= filters.priceRange[1]
      );
    })
    .sort((a, b) => {
      if (filters.sort === "priceLowToHigh") {
        return a.price - b.price;
      } else if (filters.sort === "priceHighToLow") {
        return b.price - a.price;
      } else {
        return 0;
      }
    });

    const handleClick = () => {
        router.push("/property-compare");
      };

  return (
    <Box sx={{ background: "#F7F7F7" }}>
      <Container maxWidth="xl" sx={{ px: { lg: 4, xs: 1 }, py: {xs: 0, md: 2} }}>
        <Grid
          container
        //   spacing={2}
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
              //   py: 2,
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
                flexWrap: "wrap",
                justifyContent: "space-between",
                mb: 2,
                mt: 2,
                flexDirection: { xs: "column", sm: "row" },
                gap: 1,
              }}
            >
              <Typography
                sx={{ fontSize: "26px", fontWeight: 700, color: "#616161" }}
              >
                Pleasant Hill, A
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                <FormControl
                  variant="outlined"
                  size={isMobile ? "small" : "medium"}
                  sx={{
                    background: "#ffffff",
                  }}
                >
                  <InputLabel
                    id="price-select-label"
                    // shrink={true}
                    sx={{
                      backgroundColor: "background.paper",
                      //   padding: "0 4px",
                      "&.Mui-focused": {
                        color: "#616161",
                      },
                    }}
                  >
                    Price
                  </InputLabel>

                  <Select
                    labelId="price-select-label"
                    id="price-select"
                    value={filters.sort}
                    onChange={handleSortChange}
                    sx={{
                      width: { xs: "100%", sm: "147px" },
                      //   height: "54px",
                      "& .MuiSelect-select": {
                        fontSize: "14px",
                        display: "flex",
                        alignItems: "center",
                      },
                      "& fieldset": {
                        border: "1.12px solid #949494",
                      },
                      borderRadius: "4.54px",
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#949494",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#949494",
                      },
                      "& .MuiInputLabel-root": {
                        color: "#222222",
                      },
                      "& .Mui-focused .MuiInputLabel-root": {
                        color: "#222222",
                      },
                    }}
                  >
                    <MenuItem value="priceLowToHigh">Low to High</MenuItem>
                    <MenuItem value="priceHighToLow">High to Low</MenuItem>
                  </Select>
                </FormControl>
                <Button
                onClick={handleClick}
                  size={isMobile ? "small" : "medium"}
                  startIcon={
                    <Icon
                      icon="tabler:transfer"
                      style={{
                        transform: "scaleX(-1)",
                      }}
                    />
                  }
                  sx={{
                    backgroundColor: "#E0D8C3",
                    "&:hover": {
                      backgroundColor: "#3E4C66",
                      color: "#fff",
                    },
                    color: "#000",
                    textTransform: "none",
                    py: { xs: "10px", lg: "10px" },
                    width: "fit-content",
                    whiteSpace: "nowrap",
                    fontSize: { xs: "12px", lg: "16px" },
                    fontWeight: 500,
                    // height: { xs: "30px", lg: "54px" },
                    width: { xs: "100%", sm: "153px" },
                    borderRadius: "4.6px",
                  }}
                >
                  Comparison
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
                border: "2px solid #D8D8D8",
                borderRadius: "8px",
                px: 4,
                py: 1,
                background: "#fff",
                flexWrap: "wrap",
                gap: 0,
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "14px", md: "17px" },
                  fontWeight: 400,
                  color: "#484848",
                }}
              >
                Showing 1 – {filteredProperties.length} of {properties.length}{" "}
                results
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "14px", md: "17px" },
                    fontWeight: 700,
                    color: "#484848",
                  }}
                >
                  Sort By
                </Typography>
                <FormControl
                  variant="outlined"
                  size="small"
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    "& .MuiOutlinedInput-root": {
                      paddingRight: "8px",
                    },
                    "& .MuiSelect-icon": {
                      top: "calc(50% - 12px)",
                      right: "8px",
                    },
                    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                  }}
                >
                  <Select
                    value={filters.sort}
                    onChange={handleSortChange}
                    displayEmpty
                    sx={{
                      "& .MuiSelect-select": {
                        padding: "8px 16px",
                        fontSize: "14px",
                        display: "flex",
                        alignItems: "center",
                      },
                    }}
                  >
                    <MenuItem value="">None</MenuItem>
                    <MenuItem value="priceLowToHigh">
                      Price: Low to High
                    </MenuItem>
                    <MenuItem value="priceHighToLow">
                      Price: High to Low
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Grid container spacing={2}>
              {filteredProperties.map((property) => (
                <Grid item xs={12} sm={6} key={property.id}>
                  <HomeCards
                    property={property}
                    onCardClick={handleCardClick}
                    checked={checkedCards[property.id] || false}
                    handleCheckboxChange={(event) =>
                      handleCheckboxChange(event, property.id)
                    }
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
                // pt: { xs: 0, md: 3 },
              pl: { xs: 0, md: 1 },
              zIndex: 1000,
            }}
          >
            <MapView locationSrc={selectedLocation} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PropertyComaprisionIndex;
