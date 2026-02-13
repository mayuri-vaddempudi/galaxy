import express from "express";
import { mainSequenceStars } from "../data/data.js";

const starRouter = express.Router();


// Show single planet details
starRouter.get("/:name", (req, res) => {
    const paramName = req.params.name.trim().toLowerCase();
    const selectedItem = mainSequenceStars.find( p => p.name.toLowerCase() === paramName);
    res.render("pages/featured.ejs", {
        pageType: "stars",
        sidebarItems: mainSequenceStars,
        selectedItem:selectedItem
    });
});

// Show all planets page
starRouter.get("/", (req, res) => {
    res.render("pages/featured.ejs", {
        pageType: "stars",
        sidebarItems: mainSequenceStars,
        selectedItem: null
    });
});

export default starRouter;