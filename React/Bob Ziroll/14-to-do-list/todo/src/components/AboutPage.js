import React from "react";
import { Grid, Card, CardContent, Typography, Box, Button } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function AboutPage() {
    return (
        <Box sx={{ paddingX: "10%", paddingY: "5%", display: "grid", gap: "20px"}}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
                Our mission is to BOLSTER your productivity so that you can spend more time doing the things you LOVE
            </Typography>
            <Typography>
                TaskMaster empowers you unleash your productivity potential today!
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4} md={4}>
                    <Card sx={{ height: "100%"}} >
                        <CardContent align="center">
                            <Typography variant="h5" sx={{ color: '#00A36C' }}>97%</Typography>
                            <Typography variant="body2">
                                Reccomended TaskMaster to a friend
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Card sx={{ height: "100%" }}>
                        <CardContent align="center">
                            <Typography variant="h5" sx={{ color: '#00A36C' }}>95%</Typography>
                            <Typography variant="body2">
                                CEO approval from NASDAQ 100 companies
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Card sx={{ height: "100%" }}>
                        <CardContent align="center">
                            <Typography variant="h5" sx={{ color: '#00A36C' }}>92%</Typography>
                            <Typography variant="body2">
                                Increase in usage across Fortune 500 companies
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Button variant="contained" sx={{ backgroundColor: '#00A36C' }} size="large" endIcon={<ArrowForwardIosIcon />}>
                Install on Desktop Now
            </Button>
        </Box>
    );
}