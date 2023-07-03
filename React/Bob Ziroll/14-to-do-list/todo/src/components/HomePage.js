// https://www.youtube.com/watch?v=KL_yIf5uiJo

import React from "react";
import { Box, Grid, Typography } from "@mui/material/";
import "../App.css";

import { BiSolidQuoteAltLeft } from "react-icons/bi";

// Import Swiper styles
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
SwiperCore.use([Navigation, Pagination]);

const data = [
  {
    quote:
      "TaskMaster is a must-have productivity app. It has completely transformed the way I manage my tasks and stay organized. The cloud-based syncing feature is seamless and ensures my data is always up to date.",
    personFirst: "John",
    personLast: "Doe",
    jobTitle: "Software Engineer",
    company: "Tech Solutions",
  },
  {
    quote:
      "I can't imagine my work without TaskMaster. The real-time collaboration feature has revolutionized the way my team works together. It's so convenient to see updates instantly and collaborate efficiently.",
    personFirst: "Emily",
    personLast: "Wilson",
    jobTitle: "Project Coordinator",
    company: "Global Innovations",
  },
  {
    quote:
      "TaskMaster is a game-changer for productivity. The offline syncing capability allows me to work on my tasks even when I'm on the go or in areas with limited internet connectivity. It's a lifesaver!",
    personFirst: "Michael",
    personLast: "Thompson",
    jobTitle: "Sales Manager",
    company: "Success Inc.",
  },
  {
    quote:
      "The user interface of TaskMaster is incredibly user-friendly and intuitive. It makes task management a breeze, and I love how organized and clean everything looks. It's a joy to use!",
    personFirst: "Sophia",
    personLast: "Anderson",
    jobTitle: "Marketing Specialist",
    company: "Digital Marketing Agency",
  },
  {
    quote:
      "TaskMaster has become an essential tool for my team's collaboration and task management. The access control feature allows us to define roles and permissions, ensuring everyone has the right level of access to the necessary information.",
    personFirst: "Alex",
    personLast: "Garcia",
    jobTitle: "Team Lead",
    company: "Innovate Solutions",
  },
  {
    quote:
      "I highly value the audit logs feature in TaskMaster. It gives me a detailed history of changes made to tasks and documents, providing transparency and accountability. It's an invaluable tool for tracking progress and ensuring everything is on track.",
    personFirst: "Olivia",
    personLast: "Wilson",
    jobTitle: "Operations Manager",
    company: "Business Solutions Ltd.",
  },
  {
    quote:
      "TaskMaster is the perfect productivity app for professionals. The seamless task management feature allows me to easily create, edit, and complete tasks. It simplifies my workflow and keeps me on top of my work.",
    personFirst: "Daniel",
    personLast: "Roberts",
    jobTitle: "Financial Analyst",
    company: "Financial Services Inc.",
  },
  {
    quote:
      "TaskMaster has greatly enhanced my team's collaboration and productivity. The clean and intuitive interface makes it easy for everyone to navigate and use the app effectively. It has definitely improved our workflow.",
    personFirst: "Sophie",
    personLast: "Miller",
    jobTitle: "Product Manager",
    company: "Tech Innovators",
  },
  {
    quote:
      "TaskMaster's offline syncing feature is a game-changer. I can access and edit my tasks even when I'm not connected to the internet, which is extremely convenient when I'm traveling or in areas with poor connectivity. It keeps me productive no matter the circumstances.",
    personFirst: "David",
    personLast: "Lee",
    jobTitle: "Consultant",
    company: "Consulting Group",
  },
  {
    quote:
      "I love how TaskMaster keeps me organized and focused on my goals. It helps me prioritize tasks and manage my time effectively. The app's features are perfectly designed for boosting productivity.",
    personFirst: "Emma",
    personLast: "Bennett",
    jobTitle: "Content Writer",
    company: "Creative Agency",
  },
];

export default function HomePage() {
  const pagination = {
    clickable: true,
  };

  const themeCOLOR = "#00A36C";

  return (
    <Box>
      <Swiper navigation={true} pagination={pagination}>
        {data.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <Grid
                container
                direction="column"
                spacing={2}
                sx={{
                  paddingX: "15%",
                  paddingY: "5%",
                  // placeItems: "center",
                }}
              >
                <Grid item xs={9}>
                  <Box>
                    <BiSolidQuoteAltLeft
                      style={{ color: themeCOLOR, fontSize: "3em" }} // Adjust the color to match the person's name
                    />
                    <Typography variant="h6">{slide.quote}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Typography fontWeight="bold" sx={{ color: themeCOLOR }}>
                    {slide.personFirst} {slide.personLast}
                  </Typography>
                  <Box sx={{ opacity: 0.6 }}>
                    <Typography>{slide.jobTitle}</Typography>
                    <Typography>{slide.company}</Typography>
                  </Box>
                </Grid>
              </Grid>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
}
