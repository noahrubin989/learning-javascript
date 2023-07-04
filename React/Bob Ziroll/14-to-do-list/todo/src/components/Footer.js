import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Grid,
  Button,
} from "@mui/material";

const Footer = () => {
  const smallerFontSize = "12px";
  const typographyStyle = { fontSize: smallerFontSize };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#C0C0C0",
      }}
    >
      <Container
        align="center"
        sx={{ display: "flex", flexDirection: "column", rowGap: "10px" }}
      >
        <Typography variant="h5" paddingTop="2%">
          LET'S STAY IN TOUCH
        </Typography>
        <Typography>
          Get the latest update messages straight to your inbox
        </Typography>
        <Grid container paddingX="20%">
          <Grid item xs={9}>
            <TextField
              placeholder="john.smith@example.com"
              type="email"
              required={true}
              fullWidth={true}
            />
            {/* Style using the styles below if you can */}
            {/* <input
              type="email"
              placeholder="john.smith@example.com"
              style={{
                width: "100%",
                borderRadius: 0,
                padding: "2%",
                border: "none",
                outline: "none",
                height: "100%",
              }}
            /> */}
          </Grid>
          <Grid item xs={3} sx={{ backgroundColor: "black" }}>
            <Button
              variant="contained"
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: 0,
                backgroundColor: "#00A36C",
                boxShadow: "none",
                "&:hover": {
                  boxShadow: "none",
                },
              }}
            >
              SUBSCRIBE
            </Button>
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: "4px",
            marginBottom: "10px",
          }}
        >
          <Typography sx={typographyStyle}>
            By signing up, you consent to the privacy policy
          </Typography>
          <Typography sx={{ ...typographyStyle, opacity: "70%" }}>
            &copy; {new Date().getFullYear()} TaskMaster. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
