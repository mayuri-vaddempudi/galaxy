import express from "express";
import { terrestrialPlanets } from "../data/data.js";

const planetRouter = express.Router();

const welcomeBox = {
    title: " Welcome to the Planets Page",
    description: `Planets are celestial bodies that orbit stars. In our solar system, there are
eight planets including Earth, Mars, Jupiter, and Saturn. Each planet has unique
features like atmosphere, temperature, and moons.

Click on a planet in the sidebar to explore its details like color, diameter,
distance from the Sun, and temperature range.`
};

// Show single planet details
planetRouter.get("/:name", (req, res) => {
    const paramName = req.params.name.trim().toLowerCase();
    const selectedItem = terrestrialPlanets.find(p => p.name.toLowerCase() === paramName);

    res.render("pages/featured.ejs", {
        pageType: "planets",
        sidebarItems: terrestrialPlanets,
        selectedItem: selectedItem,
        welcomeBox: null
    });
});

// Show all planets page
planetRouter.get("/", (req, res) => {
    res.render("pages/featured.ejs", {
        pageType: "planets",
        sidebarItems: terrestrialPlanets,
        selectedItem: null,
        welcomeBox
    });
});

export default planetRouter;
