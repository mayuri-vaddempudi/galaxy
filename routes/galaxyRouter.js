import express from "express";
import spiralGalaxies, { galaxy } from "../data/data.js";

const galaxyRouter = express.Router();

galaxyRouter.get("/", (req, res) => {
  res.render("pages/index.ejs", {
    pageType: "galaxies",
    sidebarItems: spiralGalaxies,
    selectedItem: null,
  });
});

galaxyRouter.get("/:name", (req, res) => {
  const selectedItem = spiralGalaxies.find(
    (galaxy) => galaxy.name.toLowerCase() === req.params.name.toLowerCase(),
  );

  res.render("pages/index.ejs", {
    pageType: "galaxies",
    sidebarItems: spiralGalaxies,
    selectedItem: selectedItem || null,
  });
});

export default galaxyRouter;
