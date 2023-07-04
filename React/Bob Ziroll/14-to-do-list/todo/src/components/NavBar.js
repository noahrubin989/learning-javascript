import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Button,
  Box,
} from "@mui/material/";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";

export default function NavBar() {
  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: "#00A36C" }}>
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Link
              to="/"
              style={{
                textDecoration: "none", // remove underline
                color: "inherit", // takes on green shade
                display: "flex",
                alignItems: "center",
              }}
            >
              <SupervisedUserCircleIcon />
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                TaskMaster
              </Typography>
            </Link>
          </Box>
          <Stack direction="row" spacing={2}>
            <Button component={Link} to="/about" color="inherit">
              About
            </Button>
            <Button component={Link} to="/features" color="inherit">
              Features
            </Button>
            <Button component={Link} to="/pricing" color="inherit">
              Pricing
            </Button>
            <Button component={Link} to="/faq" color="inherit">
              FAQ
            </Button>
            <Button component={Link} to="/contact" color="inherit">
              Contact Us
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
