import express from "express";
import {spiralGalaxies} from "../data/data.js";

const galaxyRouter = express.Router();



galaxyRouter.get("/:name", (req, res) => {
  const paramName = req.params.name.trim().toLowerCase();
  const selectedItem = spiralGalaxies.find(
    (galaxy) => galaxy.name.toLowerCase()===paramName,
  );

  res.render("pages/featured.ejs", {
    pageType: "galaxies",
    sidebarItems: spiralGalaxies,
    selectedItem: selectedItem
  });
});

galaxyRouter.get("/", (req, res) => {
  res.render("pages/featured.ejs", {
    pageType: "galaxies",
    sidebarItems: spiralGalaxies,
    selectedItem: null,
  });
});
export default galaxyRouter;