import express from "express";
import { terrestrialPlanets } from "../data/data.js";

const planetRouter = express.Router();

const welcomeBox = {
    title: "🌍 Welcome to the Planets Page",
    description: `Planets are celestial bodies that orbit stars. In our solar system, there are
eight planets including Earth, Mars, Jupiter, and Saturn. Each planet has unique
features like atmosphere, temperature, and moons.

Click on a planet in the sidebar to explore its details like color, diameter,
distance from the Sun, and temperature range.`
};

// Show all planets page
planetRouter.get("/", (req, res) => {
    res.render("pages/index.ejs", {
        pageType: "planets",
        sidebarItems: terrestrialPlanets,
        welcomeBox,
        selectedItem: null
    });
});

// Show single planet details
planetRouter.get("/:name", (req, res) => {
    const selectedItem = terrestrialPlanets.find(p => p.name === req.params.name);

    res.render("pages/index.ejs", {
        pageType: "planets",
        sidebarItems: terrestrialPlanets,
        welcomeBox: null,
        selectedItem
    });
});

export default planetRouter;
