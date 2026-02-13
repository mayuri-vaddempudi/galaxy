import express from "express";
import { aboutDetails } from "../data/data.js";

const router = express.Router();

router.get("/:name", (req, res) => {
    const paramName = req.params.name.trim().toLowerCase();
    const selectedItem = aboutDetails.find( p => p.name.toLowerCase() === paramName);
    res.render("pages/featured.ejs", {
        pageType: "about",
        sidebarItems: aboutDetails,
        selectedItem:selectedItem
    });
});

router.get("/", (req, res) => {
  res.render("pages/featured.ejs", {
    pageType: "about",
    sidebarItems: aboutDetails,
    selectedItem: null,
  });
});

    

export default router;
