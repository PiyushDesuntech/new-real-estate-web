"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const HeroContent = ({ text }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { 
          xs: "12px",
          sm: "16px",
          md: "20px",
          lg: "24px" 
        },
        alignItems: {
          xs: "flex-start", 
          lg: "flex-start"
        },
        width: { 
          xs: "100%",
          lg: "auto" 
        },
        paddingLeft: { 
          xs: "12px",
          sm: "24px",
          md: "32px",
          lg: "50px" 
        },
        paddingRight: {
          xs: "12px",
          sm: "24px",
          md: "32px",
          lg: "400px" // Space for image
        },
        minWidth: '51px'
      }}
    >
      <Box
        sx={{
          width: { 
            xs: "100%",
            lg: "900px" 
          },
          maxWidth: "100%",
          minWidth: '51px'
        }}
      >
        <Typography
          sx={{
            color: "#444444",
            fontSize: { 
              xs: "12px",
              sm: "13px",
              md: "14px",
              lg: "16px" 
            },
            lineHeight: { 
              xs: "1.4",
              sm: "1.5",
              md: "1.6",
              lg: "1.5" 
            },
            textAlign: { 
              xs: "justify",
              lg: "left" 
            },
            display: "block",
            width: "100%",
            hyphens: { 
              xs: "auto",
              lg: "none" 
            },
            letterSpacing: { 
              xs: "0.3px",
              sm: "0.4px",
              md: "0.5px",
              lg: "normal" 
            },
            wordSpacing: { 
              xs: "0.5px",
              sm: "0.7px",
              md: "1px",
              lg: "normal" 
            }
          }}
        >
          {text}
        </Typography>
      </Box>
      <Box
        sx={{
          width: { 
            xs: "140px",
            sm: "160px",
            md: "180px",
            lg: "193.24px" 
          },
          height: { 
            xs: "35px",
            sm: "40px",
            md: "45px",
            lg: "55.56px" 
          },
          backgroundColor: "#3E4C66",
          borderRadius: "6px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          "&:hover": {
            opacity: 0.9,
          },
          minWidth: '51px'
        }}
      >
        <Typography
          sx={{
            color: "#FFFFFF",
            fontSize: { 
              xs: "12px",
              sm: "13px",
              md: "14px",
              lg: "17.78px" 
            },
            fontWeight: 500,
          }}
        >
          Get Started!
        </Typography>
      </Box>
    </Box>
  );
};

export default function HeroSection() {
  const [content] = React.useState(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  );

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: { 
          xs: "100%",
          sm: "100%",
          md: "100%",
          lg: "2500px" 
        },
        height: { 
          xs: "auto",
          lg: "431px" 
        },
        backgroundColor: "#F7F7F7",
        borderRadius: { 
          xs: "6px",
          sm: "8px",
          md: "10px",
          lg: "11.11px" 
        },
        padding: { 
          xs: "16px",
          sm: "20px",
          md: "24px",
          lg: "32px" 
        },
        boxSizing: "border-box",
        display: "flex",
        flexDirection: { 
          xs: "column",
          lg: "row" 
        },
        alignItems: { 
          xs: "flex-start",
          lg: "center" 
        },
        position: "relative",
        margin: "auto",
        gap: { 
          xs: "24px",
          sm: "32px",
          md: "40px",
          lg: 0 
        },
        minWidth: '51px',
        marginTop: {
          xs: "24px",
          sm: "32px",
          md: "40px",
          lg: 0
        }
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: { 
            xs: "100%",
            lg: "auto" 
          },
          minWidth: '51px',
          position: "relative",
          zIndex: 1
        }}
      >
        <HeroContent text={content} />
      </Box>

      <Box
        sx={{
          position: { 
            xs: "relative",
            lg: "absolute" 
          },
          right: { 
            lg: "120px" 
          },
          top: { 
            lg: "50%" 
          },
          transform: { 
            lg: "translateY(-50%)" 
          },
          width: { 
            xs: "100%",
            sm: "280px",
            md: "300px",
            lg: "335px" 
          },
          height: { 
            xs: "160px",
            sm: "180px",
            md: "200px",
            lg: "335px" 
          },
          maxWidth: { 
            xs: "260px",
            sm: "280px",
            md: "300px",
            lg: "335px" 
          },
          margin: { 
            xs: "0 auto",
            lg: 0 
          },
          display: "block",
          minWidth: '51px',
          zIndex: 0
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            minWidth: '51px'
          }}
        >
          <Image
            src="/Images/Figure → Rent-Calculator.png"
            alt="Hero illustration"
            fill
            style={{ 
              objectFit: "contain",
              objectPosition: "center"
            }}
            priority
          />
        </Box>
      </Box>
    </Box>
  );
}