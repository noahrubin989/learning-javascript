import React, { Fragment } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Grid,
  Typography,
} from "@mui/material";
import SoapIcon from "@mui/icons-material/Soap";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GroupsIcon from "@mui/icons-material/Groups";
import PaletteIcon from "@mui/icons-material/Palette";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import CheckIcon from "@mui/icons-material/Check";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import WifiOffOutlinedIcon from "@mui/icons-material/WifiOffOutlined";

const containerData = [
  {
    title: "Cloud-Based Syncing",
    description:
      "By storing user data on a central server, any updates or changes made on one device will automatically propagate to other devices connected to the same account.",
    icon: <CloudDoneIcon sx={{ fontSize: { xs: "6em", md: "7em" } }} />,
  },
  {
    title: "Real-Time Collaboration",
    description:
      "Changes made by one user will be instantly reflected for others, allowing for efficient teamwork and reducing the need for manual syncing.",
    icon: <GroupAddIcon sx={{ fontSize: { xs: "6em", md: "7em" } }} />,
  },
  {
    title: "Offline Syncing",
    description:
      "Users can access and edit their tasks and notes even when they don't have an internet connection. Any changes made while offline will be synchronized with the cloud server once a network connection is restored.",
    icon: <WifiOffOutlinedIcon sx={{ fontSize: { xs: "6em", md: "7em" } }} />,
  },
];

const cardData = [
  {
    icon: <SoapIcon sx={{ fontSize: 150 }} />,
    title: "Clean & Intuitive Interface",
    description:
      "TaskMaster features a clean and intuitive user interface, ensuring ease of navigation and enhancing user experience.",
  },
  {
    icon: <VisibilityIcon sx={{ fontSize: 150 }} />,
    title: "Consistent Visual Design",
    description:
      "TaskMaster maintains a consistent visual design across all screens and components, creating a cohesive and polished app.",
  },
  {
    icon: <PaletteIcon sx={{ fontSize: 150 }} />,
    title: "Customisable Themes",
    description:
      "TaskMaster offers a range of customizable themes, allowing users to personalize the app's appearance according to their preferences.",
  },
  {
    icon: <ArrowUpwardIcon sx={{ fontSize: 150 }} />,
    title: "Streamlined Task Organization",
    description:
      "TaskMaster provides efficient task organization features, such as tags, and folders, to help users categorize and prioritize effectively",
  },
  {
    icon: <CheckIcon sx={{ fontSize: 150 }} />,
    title: "Seamless Task Management",
    description:
      "Users can easily create, edit, and complete tasks, providing a seamless task management experience.",
  },
  {
    icon: <AutoAwesomeMosaicIcon sx={{ fontSize: 150 }} />,
    title: "Responsive Layout",
    description:
      "TaskMaster utilizes a responsive layout that adapts to different screen sizes and orientations, ensuring optimal usability on various devices.",
  },
  // Add more card objects as needed
];

export default function FeaturesPage() {
  return (
    <Fragment>
      {/* ====================NEW SECTION==================== */}
      <Box
        align="center"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingY: "10%",
          marginBottom: 0,
          background: "linear-gradient(45deg, white, #00A36C)",
          rowGap: "10px",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Features
        </Typography>
        <Typography color="#2b2a2b">
          Explore all the features in TaskMaster, one at a time.
        </Typography>
      </Box>

      {/* ====================NEW SECTION==================== */}
      <Box sx={{ paddingX: "10%", paddingY: "2%", background: "#f3f3f3" }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", marginBottom: "30px", textAlign: "center" }}
        >
          Syncing
        </Typography>

        {/* All the repetitive elements */}
        {containerData.map((data, index) => (
          <Box key={index} sx={{ marginBottom: "20px" }}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {data.title}
                </Typography>
                <Typography>{data.description}</Typography>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {data.icon}
              </Grid>
            </Grid>
          </Box>
        ))}
      </Box>

      {/* ====================NEW SECTION==================== */}
      <Box sx={{ paddingX: "10%", paddingY: "2%" }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", marginBottom: "30px", textAlign: "center" }}
        >
          Design
        </Typography>

        <Grid container spacing={2}>
          {cardData.map((card, index) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardMedia
                    component="div"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      background: "#f3f3f3",
                      paddingY: "5%",
                    }}
                  >
                    {card.icon}
                  </CardMedia>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      sx={{ fontWeight: "bold", lineHeight: "1em" }}
                    >
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>

      {/* ====================NEW SECTION (Refactor with arrays as shown in chatgpt)==================== */}
      <Box sx={{ paddingX: "10%", paddingY: "2%", background: "#f3f3f3" }}>
        {" "}
        {/* Apply this to every new section */}
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", marginBottom: "30px", textAlign: "center" }}
        >
          Collaboration
        </Typography>
        <Grid
          container
          spacing={10}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* First column */}
          <Grid
            item
            xs={7}
            sx={{
              display: "flex",
              columnGap: "30px",
            }}
          >
            <Box>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Access Control
              </Typography>
              <Typography>
                TaskMaster provides advanced collaboration features with
                customizable permissions and access control. Admins can define
                user roles, assign specific permissions to each role, and
                control access to sensitive information or features, ensuring
                secure and efficient collaboration within teams.
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Audit Logs
              </Typography>
              <Typography>
                TaskMaster includes robust activity tracking and audit log
                capabilities. It allows users to view a detailed history of
                changes made to tasks, projects, and shared documents, providing
                transparency and accountability. This feature helps teams track
                progress, identify any modifications, and investigate any
                discrepancies or issues that may arise during collaboration.
              </Typography>
            </Box>
          </Grid>
          {/* Second column */}
          <Grid
            item
            xs={5}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <GroupsIcon sx={{ width: "80%", height: "80%" }} />
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
}
