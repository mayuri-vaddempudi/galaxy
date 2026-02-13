import express from "express";
import { terrestrialPlanets } from "../data/data.js";

const planetRouter = express.Router();



// Show single planet details
planetRouter.get("/:name", (req, res) => {
    const paramName = req.params.name.trim().toLowerCase();
    const selectedItem = terrestrialPlanets.find( p => p.name.toLowerCase() === paramName);
 
    res.render("pages/featured.ejs", {
        pageType: "planets",
        sidebarItems: terrestrialPlanets,
        selectedItem: selectedItem
    });
});

// Show all planets page
planetRouter.get("/", (req, res) => {
    res.render("pages/featured.ejs", {
        pageType: "planets",
        sidebarItems: terrestrialPlanets,
        selectedItem: null
    });
});
export default planetRouter;