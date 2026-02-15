import express from "express";
import { aboutDetails } from "../data/data.js";

const router = express.Router();

const welcomeBox = {
  title: "Meet the Minds Behind Shining Stars",
  description: `This project explores planets, stars, and galaxies in our mysterious universe.
Here you can learn about the team members who built this cosmic journey.

Click on a team member in the sidebar to see their role, contact information, and details.`
};

router.get("/:name", (req, res) => {
  const paramName = req.params.name.trim().toLowerCase();
  const selectedItem = aboutDetails.find(p => p.name.toLowerCase() === paramName);
  res.render("pages/featured.ejs", {
    pageType: "about",
    pageTitle:"About",
    sidebarItems: aboutDetails,
    selectedItem: selectedItem,
    welcomeBox: null
  });
});

router.get("/", (req, res) => {
  res.render("pages/featured.ejs", {
    pageType: "about",
    pageTitle:"About",
    sidebarItems: aboutDetails,
    selectedItem: null,
    welcomeBox
  });
});



export default router;
