import React from "react";
import {
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

export default function PricingPage() {
  return (
    <Box sx={{ paddingX: "10%", paddingY: "5%", display: "grid", gap: "20px" }}>
      <Typography variant="h4" color="#00A36C">
        Find the plan that is right for you
      </Typography>
      <Typography>
        Join our growing community and experience the power of TaskMaster today!
      </Typography>
      <Grid container spacing={2}>
        <Grid item align="center" sm={12} md={4}>
          <Card sx={{ height: "100%", borderTop: "10px solid #00A36C" }}>
            <CardContent>
              <Typography gutterBottom variant="h5">
                Essentials
              </Typography>
              {/* max height right here */}
              <Typography
                variant="body2"
                color="text.secondary"
                gutterBottom
                sx={{ height: { sm: "auto", md: "120px" } }}
              >
                With TaskMaster Essentials, you can stay organised with features
                like task categorisation, due date reminders, and task progress
                tracking.
              </Typography>
              <Typography variant="h4" gutterBottom>
                $0
              </Typography>
              <Button
                variant="contained"
                size="small"
                sx={{ backgroundColor: "#00A36C" }}
              >
                Explore now
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item align="center" sm={12} md={4}>
          <Card sx={{ height: "100%", borderTop: "10px solid teal" }}>
            <CardContent>
              <Typography gutterBottom variant="h5">
                Plus
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                gutterBottom
                sx={{ height: { sm: "auto", md: "120px" } }}
              >
                Everything included in TaskMaster Essentials, plus advanced
                integrations, team management tools and front-of-the-line
                customer service
              </Typography>
              <Typography variant="h4" gutterBottom>
                $20
              </Typography>
              <Button
                variant="contained"
                size="small"
                sx={{ backgroundColor: "teal" }}
              >
                Buy Now
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item align="center" sm={12} md={4}>
          <Card sx={{ height: "100%", borderTop: "10px solid black" }}>
            <CardContent>
              <Typography gutterBottom variant="h5">
                Premium
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                gutterBottom
                sx={{ height: { sm: "auto", md: "120px" } }}
              >
                Everything included in TaskMaster Plus, plus premium team
                onboarding, quarterly business reviews and 24/7 technical
                support
              </Typography>
              <Typography variant="h4" gutterBottom>
                $30
              </Typography>
              <Button
                variant="contained"
                size="small"
                sx={{ backgroundColor: "black" }}
              >
                Buy Now
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      {/* <Typography variant="h4" align="center">
        Start Growing Today
      </Typography> */}
    </Box>
  );
}
