import React from "react";
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Box } from '@mui/material/';
import WorkIcon from '@mui/icons-material/Work';

export default function NavBar() {
    return (
        <section className="menu">
            <AppBar position='static' sx={{ backgroundColor: '#00A36C' }}>
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="logo">
                        <WorkIcon fontSize="medium"/>
                    </IconButton>
                    <Typography variant="h6" sx={{flexGrow: 1}}>TaskMaster</Typography>
                    <Stack direction="row" spacing={2}>
                        <Button component={Link} to="/about" color='inherit'>About</Button>
                        <Button component={Link} to="/features" color='inherit'>Features</Button>
                        <Button component={Link} to="/pricing" color='inherit'>Pricing</Button>
                    </Stack>
                </Toolbar>

            </AppBar>
        </section>
    );
}