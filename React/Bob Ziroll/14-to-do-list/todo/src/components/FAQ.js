import React from "react";
import {
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqData = [
  {
    question: "What is TaskMaster's mission?",
    answer:
      "TaskMaster's mission is to BOLSTER your productivity so that you can spend more time doing the things you LOVE.",
  },
  {
    question: "How does TaskMaster handle data syncing?",
    answer:
      "TaskMaster utilises cloud-based syncing, storing user data on a central server. Any updates or changes made on one device will automatically propagate to other devices connected to the same account.",
  },
  {
    question: "Does TaskMaster support real-time collaboration?",
    answer:
      "Yes, TaskMaster supports real-time collaboration. Changes made by one user will be instantly reflected for others, allowing for efficient teamwork and reducing the need for manual syncing.",
  },
  {
    question: "Can I work offline with TaskMaster?",
    answer:
      "Absolutely! TaskMaster supports offline syncing, enabling users to access and edit their tasks and notes even without an internet connection. Any changes made while offline will be synchronized with the cloud server once a network connection is restored.",
  },
  {
    question: "Does TaskMaster have customisable themes?",
    answer:
      "Yes, TaskMaster offers a range of customisable themes, allowing users to personalize the app's appearance according to their preferences.",
  },
  {
    question: "What task organisation features does TaskMaster provide?",
    answer:
      "TaskMaster provides efficient task organisation features, such as tags and folders, to help users categorize and prioritise effectively.",
  },
  {
    question: "Does TaskMaster adapt to different devices?",
    answer:
      "Yes, TaskMaster utilises a responsive layout that adapts to different screen sizes and orientations, ensuring optimal usability on various devices.",
  },
  {
    question: "Does TaskMaster have activity tracking capabilities?",
    answer:
      "Yes, TaskMaster includes robust activity tracking and audit log capabilities. It allows users to view a detailed history of changes made to tasks, projects, and shared documents, providing transparency and accountability. This feature helps teams track progress, identify any modifications, and investigate any discrepancies or issues that may arise during collaboration.",
  },
];

export default function FAQ() {
  return (
    <Box sx={{ paddingX: "10%", paddingY: "2%" }}>
      <Box>
        <Typography variant="h5" align="center">
          Frequently Asked Questions
        </Typography>
      </Box>
      <Box sx={{ paddingY: "2%" }}>
        {faqData.map((item, idx) => (
          <Accordion key={idx}>
            {/* Question below */}
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${idx + 1}a-content`}
              id={`panel${idx + 1}a-header`}
            >
              <Typography>{item.question}</Typography>
            </AccordionSummary>
            {/* Answer below */}
            <AccordionDetails sx={{ color: "#666666" }}>
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}
