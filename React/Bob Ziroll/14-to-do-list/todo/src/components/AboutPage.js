import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function AboutPage(props) {
  return (
    <Box sx={{ paddingX: "10%", paddingY: "5%", display: "grid", gap: "20px" }}>
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Our mission is to BOLSTER your productivity so that you can spend more
        time doing the things you LOVE
      </Typography>
      <Typography>
        TaskMaster empowers you unleash your productivity potential today!
      </Typography>
      <Grid container spacing={2}>
        {props.stats.map((item) => {
          return (
            <Grid item xs={12} sm={4} md={4}>
              <Card sx={{ height: "100%" }}>
                <CardContent align="center">
                  <Typography variant="h5" sx={{ color: "#00A36C" }}>
                    {`${item.pct}%`}
                  </Typography>
                  <Typography variant="body2">{item.outcome}</Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#00A36C" }}
        size="large"
        endIcon={<ArrowForwardIosIcon />}
      >
        Install on Desktop Now
      </Button>
    </Box>
  );
}
