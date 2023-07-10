// https://www.youtube.com/watch?v=KL_yIf5uiJo

// import the data

import React from "react";
import {
  Box,
  Grid,
  Typography,
  ImageList,
  ImageListItem,
} from "@mui/material/";
import "../App.css";

import { BiSolidQuoteAltLeft } from "react-icons/bi";

// Import Swiper styles
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
SwiperCore.use([Navigation, Pagination]);

export default function HomePage(props) {
  const pagination = {
    clickable: true,
  };

  const themeCOLOR = "#00A36C";

  return (
    <Box className="homepage-container">
      <Box sx={{ position: "relative" }}>
        <Box>
          <ImageList cols={3} gap={0}>
            {props.imageObjectsArray.map((item) => (
              <ImageListItem
                key={item.img}
                alt={`pic${item.index}`}
                sx={{
                  filter: { xs: "brightness(100%)", md: "brightness(20%)" },
                }}
              >
                <img alt={item.title} src={item.img} loading="lazy" />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            paddingX: "15%",
            display: { xs: "none", md: "grid" },
            placeItems: "center",
            rowGap: "20px",
            color: "white",
          }}
        >
          <Typography variant="h3">My Story</Typography>
          <Typography>
            Since a young age, I've been captivated by the endless possibilities
            that the transformative power of technology presents. Like many
            others, I often found myself overwhelmed by multiple
            responsibilities, deadlines, and goals, hence I was determined to
            find a solution that could streamline and optimize my workflow.
          </Typography>
          <Typography>
            So TaskMaster became my vision - a comprehensive tool that would
            help individuals and teams stay on track, collaborate seamlessly,
            and accomplish their ambitions.
          </Typography>
          <Typography>
            It's not just an app; it's the culmination of extensive research,
            feedback, and innovation. My ultimate goal is to inspire and empower
            individuals and teams to unlock their potential, providing them with
            a reliable platform to thrive in their personal and professional
            pursuits.
          </Typography>
        </Box>
      </Box>

      {/* Swiper section */}
      <Box>
        <Swiper navigation={true} pagination={pagination}>
          {props.reviews.map((slide, index) => {
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
    </Box>
  );
}
