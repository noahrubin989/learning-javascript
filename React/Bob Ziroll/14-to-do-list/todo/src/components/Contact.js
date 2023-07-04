import { Box, Button, Typography, Grid, TextField } from "@mui/material";
import React from "react";

export default function Contact() {
  return (
    <Box sx={{ paddingX: "20%", paddingY: "4%" }}>
      <Box sx={{ display: "grid", rowGap: "30px" }}>
        <Box textAlign="center" sx={{ display: "grid", rowGap: "10px" }}>
          <Typography variant="h4">Contact the TaskMaster Team</Typography>
          <Typography color="#666666">
            Need help or have any questions? Our team is here to assist you in
            maximizing your app experience. Feel free to reach out to us for any
            inquiries or concerns.
          </Typography>
        </Box>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField label="First Name *" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Last Name *" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Email Address *" fullWidth />
            </Grid>
            <Grid item xs={12}>
              {/* Larger box initially for the message itself */}
              <TextField label="Message *" fullWidth multiline minRows={3} />
            </Grid>
            <Grid item xs={12}>
              {/* Remove shadow with disable elevation */}
              {/* Custom colors: https://stackoverflow.com/questions/46486565/material-ui-customize-button-color */}
              <Button
                variant="contained"
                disableElevation
                disableRipple
                fullWidth
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
