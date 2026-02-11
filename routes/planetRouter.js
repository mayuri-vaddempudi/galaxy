import express from "express";
import { terrestrialPlanets } from "../data/data.js";

const planetRouter = express.Router();

// Show all planets page
planetRouter.get("/", (req, res) => {
    res.render("pages/index.ejs", {
        pageType: "planets",
        sidebarItems: terrestrialPlanets,
        selectedItem: null
    });
});

// Show single planet details
planetRouter.get("/:name", (req, res) => {
    const selectedItem = terrestrialPlanets.find(p => p.name === req.params.name);

    res.render("pages/index.ejs", {
        pageType: "planets",
        sidebarItems: terrestrialPlanets,
        selectedItem
    });
});

export default planetRouter;
