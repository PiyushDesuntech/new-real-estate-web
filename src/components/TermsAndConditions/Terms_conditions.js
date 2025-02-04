import { Box, Container, Typography } from "@mui/material";
import Heading from "./components/Heading";
import TermsAndconditions from "./components/TermsAndconditions";
import JoinUs from "../Home/compoments/JoinUs";
export default function Terms_conditions() {
  return (
    <Box sx={{ backgroundColor: "#F7F7F7", }}>
      <Container maxWidth="xl" sx={{px: {xs: 1, sm:1, lg:1}}}>
      <Box
        sx={{
          paddingLeft: { xs: '0px', sm: '0px', lg: '0px' },
          paddingTop: { xs: '24px', sm: '32px' },
          marginBottom: { xs: '10px', sm: '5px', lg: '5px' },
        }}
      >
        <Heading />
      </Box>
      <Box
        sx={{
          marginBottom: { xs: '100px', sm: '100px', lg: '150px' },
        }}
      >
        <TermsAndconditions />
      </Box>
      </Container>
      <JoinUs />
    </Box>
  );
}
