"use client";
import React from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
  IconButton,
  Divider,
  TextField,
  FormControlLabel,
  Checkbox,
  Avatar,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons"; // Correct import for faEllipsisH
import BlogCard from "./Blogcardsformain";
import Image from "next/image";

const Main = () => {
  return (
    <Box
      sx={{
        // width: "80%",
        // maxWidth: "923.08px",
        minHeight: "100vh", // Make sure it fills the screen
        margin: "0 auto",
        padding: { xs: 2, sm: 3 },
        // overflowX: "hidden",  // Prevent horizontal overflow
        display: "flex",
        // border: "1px solid red",
        flexDirection: "column", // Stack elements vertically
      }}
    >
      {/* Heading */}
      <Box>
        <Typography
          sx={{
            font: "Nunito",
            fontSize: { xs: "20px", sm: "27.08px" }, // Adjust font size for mobile
            fontWeight: 700,
            lineHeight: { xs: "30px", sm: "37.91px" }, // Adjust line height for mobile
            textAlign: { xs: "center", sm: "left" }, // Center text on mobile
            overflowWrap: "break-word", // Prevent text overflow
            color: "#484848",
          }}
        >
          Housing Markets That Changed the Most This Decade
        </Typography>
      </Box>

      {/* Horizontal Icons List */}
      <Box
        mt={2}
        mb={2}
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        gap={2}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          alignItems="center"
        >
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar
              src="/Images/insightAdmin.svg"
              sx={{ width: 49.23, height: 49.23 }}
            />
            <Typography>Admin</Typography>
          </Box>

          <Box display="flex" alignItems="center">
            <Image
              src="/Images/calendar.svg"
              alt="Admin Icon"
              width={25.21}
              height={25.21}
              style={{ marginRight: "8px" }}
            />
            <Typography>Jan 20, 2025</Typography>
          </Box>

          <Box display="flex" alignItems="center">
            <Image
              src="/Images/comment.svg"
              alt="Admin Icon"
              width={25.21}
              height={25.21}
              style={{ marginRight: "8px" }}
            />
            <Typography>Comment</Typography>
          </Box>
        </Stack>
      </Box>

      {/* Main Image */}
     
      <Box
        sx={{
          width: "100%",
          maxWidth: "100%",
          overflow: "hidden", 
          display: "flex",
          justifyContent: "center", // Ensures the image stays within bounds
        }}
      >
        <Image
          src="/Images/InsightInnerBlog.svg"
          alt="property image"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            maxWidth: "923.08px",
            height: "auto",
            borderRadius: "7.38px",
          }}
        />
      </Box>

      {/* Paragraph Below Image */}
      <Box sx={{ width: "100%", height: "auto", mt: 2 }}>
        <Typography
          sx={{
            font: "Nunito",
            fontSize: { xs: "14px", sm: "17.23px" },
            fontWeight: 400,
            lineHeight: "30.15px",
            color: "#484848",
          }}
        >
          Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin
          sagittis dolor sed mi elementum pretium. Donec et justo ante. Vivamus
          egestas sodales est, eu rhoncus urna semper eu. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Integer tristique elit lobortis purus bibendum, quis dictum metus
          mattis. Phasellus posuere felis sed eros porttitor mattis. Curabitur
          massa magna, tempor in blandit id, porta in ligula. Aliquam laoreet
          nisl massa, at interdum mauris sollicitudin et.
        </Typography>
      </Box>

      {/* Another Paragraph */}
      <Box sx={{ width: "100%", height: "auto", mt: 2, marginBottom: 4 }}>
        <Typography
          sx={{
            font: "Nunito",
            fontSize: { xs: "14px", sm: "17.23px" },
            fontWeight: 400,
            lineHeight: "30.15px",
            color: "#484848",
          }}
        >
          Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin
          sagittis dolor sed mi elementum pretium. Donec et justo ante. Vivamus
          egestas sodales est, eu rhoncus urna semper eu. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Integer tristique elit lobortis purus bibendum, quis dictum metus
          mattis. Phasellus posuere felis sed eros porttitor mattis. Curabitur
          massa magna, tempor in blandit id, porta in ligula. Aliquam laoreet
          nisl massa, at interdum mauris sollicitudin et.
        </Typography>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: { xs: "18px", sm: "22.15px" },
            my: 2,
            color: "#484848",
          }}
        >
          Housing Markets That Changed the Most This Decade
        </Typography>
      </Box>

      {/* Quote Box */}
      <Box
        sx={{
          width: "100%",
          height: "auto",
          padding: "10px",
          borderRadius: "7.38px 0px 0px 0px",
          borderLeft: "9.85px solid #E8E1C4",
          opacity: 1,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          boxSizing: "border-box",
          marginTop: 2,
        }}
      >
        {/* Quotation Icon */}
        <Box
          sx={{
            fontSize: { xs: "36px", sm: "48px" },
            color: "#E8E1C4",
            marginRight: "10px",
            position: "absolute",
            top: "-20px",
            left: "10px",
          }}
        >
          &ldquo;
        </Box>

        {/* Quote Text */}
        <Typography
          sx={{
            fontSize: { xs: "16px", sm: "18px" },
            fontStyle: "italic",
            color: "#333333",
            lineHeight: "1.5",
            maxWidth: "80%",
            textAlign: "left",
          }}
        >
          "This is a sample quote. The text should be styled appropriately and
          aligned in the box. The quote box can accommodate multiple lines of
          text, and you can adjust the styling as needed to match the design."
        </Typography>
      </Box>

      {/* Another Text Box */}
      <Box sx={{ width: "100%", height: "auto", mt: 2 }}>
        <Typography
          sx={{
            font: "Nunito",
            fontSize: { xs: "14px", sm: "17.23px" },
            fontWeight: 400,
            lineHeight: "30.15px",
          }}
        >
          Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin
          sagittis dolor sed mi elementum pretium. Donec et justo ante. Vivamus
          egestas sodales est, eu rhoncus urna semper eu. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Integer tristique elit lobortis purus bibendum, quis dict massa, at
          interdum mauris sollicitudin et.
        </Typography>
      </Box>

      <Box sx={{ width: "100%", height: "auto", mt: 2 }}>
        <Typography
          sx={{
            font: "Nunito",
            fontSize: { xs: "14px", sm: "17.23px" },
            fontWeight: 400,
            lineHeight: "30.15px",
          }}
        >
          Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin
          sagittis dolor sed mi elementum pretium. Donec et justo ante. Vivamus
          egestas sodales est, eu rhoncus urna semper eu. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Integer tristique elit lobortis purus bibendum, quis dictum metus
          mattis. Phasellus posuere felis sed eros porttitor mattis.
        </Typography>
      </Box>

      <Divider sx={{ marginY: 3 }} />

      {/* Share Section */}
      <Box
        sx={{
          marginY: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
          flexDirection: { xs: "column", sm: "row" }, // Stack elements vertically on mobile
          width: "100%",
        }}
      >
        {/* Share Link Section */}
        <Box display="flex" alignItems="center" gap={2}>
          <Typography
            sx={{ fontWeight: "700", color: "#484848", fontSize: "17.23px" }}
          >
            Share Link
          </Typography>
          <Box display="flex" gap={3}>
            <IconButton sx={{ borderRadius: 2 }}>
              <FontAwesomeIcon icon={faFacebookF} />
            </IconButton>
            <IconButton sx={{ borderRadius: 2 }}>
              <FontAwesomeIcon icon={faTwitter} />
            </IconButton>
            <IconButton sx={{ borderRadius: 2 }}>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </IconButton>
            <IconButton sx={{ borderRadius: 2 }}>
              <FontAwesomeIcon icon={faPinterestP} />
            </IconButton>
            <IconButton sx={{ borderRadius: 2 }}>
              <FontAwesomeIcon icon={faEllipsisH} />
            </IconButton>
          </Box>
        </Box>
        {/* Tags Section */}
        <Box display="flex" alignItems="center" gap={1}>
          <Typography sx={{ fontWeight: "bold", color: "#333" }}>
            Tags:
          </Typography>
          <Typography sx={{ color: "#666" }}>Apartment, Real Estate</Typography>
        </Box>
      </Box>

      <Divider sx={{ marginY: 3 }} />

      {/* Pagination Section */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "923.08px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          // border:"1px solid red",
          gap: 2,
          paddingX: 2,
          flexDirection: { xs: "column", sm: "row", md:"row" }, // Stack pagination vertically on mobile
        }}
      >
        {/* Previous Section */}
        <Box display="flex" alignItems="center" gap={2}>
          <Box
            sx={{
              width: "50px",
              height: "50px",
              backgroundColor: "#E0E0E0",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ArrowBack sx={{ color: "#333" }} />
          </Box>
          <Box>
            <Typography sx={{ fontWeight: "bold", color: "#484848" }}>
              Prev
            </Typography>
            <Typography
              sx={{
                color: "#484848",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: "200px",
              }}
            >
              Redfin Unveils the Best Canadian Cities for...
            </Typography>
          </Box>
        </Box>

        {/* Next Section */}
        <Box display="flex" alignItems="center" gap={2}>
          <Box textAlign="right">
            <Typography sx={{ fontWeight: "bold", color: "#484848" }}>
              Next
            </Typography>
            <Typography
              sx={{
                color: "#484848",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: "200px",
              }}
            >
              Redfin Ranks the Most Competitive
            </Typography>
          </Box>
          <Box
            sx={{
              width: "50px",
              height: "50px",
              backgroundColor: "#E0E0E0",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ArrowForward sx={{ color: "#333" }} />
          </Box>
        </Box>
      </Box>

      <Divider sx={{ marginY: 3 }} />
      
      {/* Blog Card */}
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: { xs: "18px", sm: "22.15px" },
          marginBottom: 2,
        }}
      >
        related properties
      </Typography>
      <BlogCard />
    </Box>
  );
};

export default Main;
