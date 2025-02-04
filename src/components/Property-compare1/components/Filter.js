import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Grid,
  useMediaQuery,
} from "@mui/material";

import{Typography} from "@mui/material";
 import { useTheme } from "@mui/material/styles";

const Filter = ({ filters, setFilters }) => {
  const [isFilterDialogOpen, setFilterDialogOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Adjust for small screens

  const handleFilterChange = (field) => (event) => {
    setFilters({ ...filters, [field]: event.target.value });
  };

  return (
    <Box sx={{ border: "1px solid yellow" }}>
  <Grid container spacing={1}>
    {/* Home Type Filter */}
    <Grid item xs={6} sm={6} md={1.2}>
      <FormControl fullWidth size="small">
        <InputLabel
          sx={{
            color: "#222222",
            "&.Mui-focused": {
              color: "#222222",
            },
          }}
        >
          Home Type
        </InputLabel>
        <Select
          value={filters.homeType || ""}
          onChange={handleFilterChange("homeType")}
          label="Home Type"
          sx={{
            "& fieldset": {
              border: "1.12px solid #949494",
            },
            borderRadius: "6.72px",
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
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Apartment">less than$3000</MenuItem>
          <MenuItem value="Condo">$3000-$5000</MenuItem>
          <MenuItem value="House">$5000-$10000</MenuItem>
        </Select>
      </FormControl>
    </Grid>

    {/* Save Search Button */}
    <Grid item xs={12} sm={6} md={1.2}>
      <Button
        fullWidth
        variant="contained"
        sx={{
          bgcolor: "#E8E1C4",
          color: "#484848",
          boxShadow: "none",
          "&:hover": {
            bgcolor: "#3E4C66",
            color: "#fff",
            boxShadow: "none",
          },
          textTransform: "none",
          borderRadius: "6.72px",
          whiteSpace: "nowrap",
          fontSize: { xs: "14px", md: "12px", lg: "16px" },
          fontWeight: 500,
          py: { xs: 1, md: 1, lg: 0.8 },
        }}
      >
        Save Search
      </Button>
    </Grid>
  </Grid>

  <Dialog open={isFilterDialogOpen} onClose={() => setFilterDialogOpen(false)} fullScreen={isSmallScreen}>
    <DialogTitle>All Filters</DialogTitle>
    <DialogActions>
      <Button onClick={() => setFilterDialogOpen(false)}>Close</Button>
      <Button variant="contained" onClick={() => setFilterDialogOpen(false)}>Apply</Button>
    </DialogActions>
  </Dialog>
</Box>

  
  );
};

export default Filter;
