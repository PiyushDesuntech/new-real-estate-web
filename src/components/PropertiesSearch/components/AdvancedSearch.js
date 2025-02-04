"use client";
import React, { useState } from "react";
import {
  Box,
  TextField,
  Slider,
  Select,
  MenuItem,
  Button,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const AdvancedSearch = () => {
  const [distance, setDistance] = useState(50);
  const [price, setPrice] = useState([0, 8000]);
  const [region, setRegion] = useState("");
  const [moveInDate, setMoveInDate] = useState("");
  const [type, setType] = useState("");
  const [beds, setBeds] = useState("");
  const [baths, setBaths] = useState("");
  const [pets, setPets] = useState("");

  const handleSliderChange = (event, newValue) => {
    setPrice(newValue);
  };
  const filters = [
    {
      label: "Regions",
      value: region,
      setter: setRegion,
      options: [
        { value: "region1", label: "Region 1" },
        { value: "region2", label: "Region 2" },
      ],
    },
    {
      label: "Move-in Date",
      value: moveInDate,
      setter: setMoveInDate,
      options: [
        { value: "date1", label: "Date 1" },
        { value: "date2", label: "Date 2" },
      ],
    },
    {
      label: "Type",
      value: type,
      setter: setType,
      options: [
        { value: "apartment", label: "Apartment" },
        { value: "house", label: "House" },
      ],
    },
    {
      label: "Beds",
      value: beds,
      setter: setBeds,
      options: [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
      ],
    },
    {
      label: "Baths",
      value: baths,
      setter: setBaths,
      options: [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
      ],
    },
    {
      label: "Pets",
      value: pets,
      setter: setPets,
      options: [
        { value: "dogs-okay", label: "Dogs Okay" },
        { value: "cats-okay", label: "Cats Okay" },
        { value: "other-pets", label: "Other pets" },
      ],
    },
  ];

  return (
    <Box p={3}>
      <Box
        sx={{
          // width: "300px",
          padding: { xs: "20px", lg: "30px" },
          borderRadius: "8px",
          // boxShadow: 1,
          border: "2px solid #D8D8D8",
          bgcolor: "background.paper",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Advanced Search
        </Typography>

        {/* Keyword Field */}
        <Box display="flex" alignItems="center">
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Keyword"
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: "7.63px",
                "&:hover fieldset": {
                  borderColor: "#C0C0C0",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#C0C0C0",
                },
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#C0C0C0",
              },
              "& .MuiInputLabel-root": {
                color: "#A0A0A0",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#A0A0A0",
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Location Field */}
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Location"
          sx={{
            mb: 2,
            "& .MuiOutlinedInput-root": {
              borderRadius: "7.63px",
              "&:hover fieldset": {
                borderColor: "#C0C0C0",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#C0C0C0",
              },
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#C0C0C0",
            },
            "& .MuiInputLabel-root": {
              color: "#A0A0A0",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#A0A0A0",
            },
          }}
        />

        {/* Distance Slider */}
        {/* <Typography gutterBottom>Distance: {distance} miles</Typography>
      <Slider
        value={distance}
        onChange={(e, value) => setDistance(value)}
        min={0}
        max={100}
        sx={{
          color: '#B3A87A', 
          '& .MuiSlider-thumb': {
            borderRadius: '1px', 
            backgroundColor: '#24324A', 
            border: '2px solid white', 
          },
          '& .MuiSlider-rail': {
            color: 'grey.300', 
          },
          '& .MuiSlider-track': {
            color: '#B3A87A', 
          },
          '& .MuiSlider-mark': {
            backgroundColor: 'black',
            width: '8px', 
          },
          mb: 2
        }}
      /> */}

        {/* Dropdown Menus */}
        {filters.map((filter, index) => (
          <Select
            key={index}
            fullWidth
            value={filter.value}
            onChange={(e) => filter.setter(e.target.value)}
            displayEmpty
            variant="outlined"
            sx={{ mb: 2,
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#C0C0C0", 
                borderRadius: "7.63px",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#C0C0C0",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#C0C0C0", 
              },
             }}
          >
            <MenuItem value="">{filter.label}</MenuItem>
            {filter.options.map((option, idx) => (
              <MenuItem key={idx} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        ))}

        {/* Price Range Slider */}
        <Typography gutterBottom>
          From ${price[0]} to ${price[1]}
        </Typography>
        <Slider
          value={price}
          onChange={handleSliderChange}
          min={0}
          max={8000}
          sx={{
            color: "#B3A87A",
            "& .MuiSlider-thumb": {
              borderRadius: "1px",
              backgroundColor: "#24324A",
              border: "2px solid white",
            },
            "& .MuiSlider-rail": {
              color: "grey.300",
            },
            "& .MuiSlider-track": {
              color: "#B3A87A",
            },
            "& .MuiSlider-mark": {
              backgroundColor: "black",
              width: "8px",
            },
            mb: 2,
          }}
        />

        {/* Advanced Options */}
        {/* <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="body2">Advanced</Typography>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Box> */}

        {/* Find Property Button */}
        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 2,
            bgcolor: "#E8E1C4",
            color: "#484848",
            boxShadow: "none",
            py: 2,
            "&:hover": {
              backgroundColor: "#3E4C66",
              color: "#fff",
            },
            fontSize: "20px",
            textTransform: "none",
            borderRadius: "8px",
          }}
        >
          Find Property
        </Button>
      </Box>
    </Box>
  );
};

export default AdvancedSearch;
