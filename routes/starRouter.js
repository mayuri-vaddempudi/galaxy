import express from "express";
import { mainSequenceStars } from "../data/data.js";

const starRouter = express.Router();

const welcomeBox = {
    title: " Welcome to the Stars Page",
    description: `Stars are massive glowing balls of gas that produce light and heat through nuclear fusion.
They come in different sizes and colors, from red dwarfs to giant blue stars.

Click on a star in the sidebar to explore its temperature, size, distance, and other fascinating details.`
};

// Show single planet details
starRouter.get("/:name", (req, res) => {
    const paramName = req.params.name.trim().toLowerCase();
    const selectedItem = mainSequenceStars.find(p => p.name.toLowerCase() === paramName);
    res.render("pages/featured.ejs", {
        pageType: "stars",
        pageTitle:"stars",
        sidebarItems: mainSequenceStars,
        selectedItem: selectedItem,
        welcomeBox: null
    });
});

// Show all planets page
starRouter.get("/", (req, res) => {
    res.render("pages/featured.ejs", {
        pageType: "stars",
        pageTitle:"stars",
        sidebarItems: mainSequenceStars,
        selectedItem: null,
        welcomeBox
    });
});

export default starRouter;