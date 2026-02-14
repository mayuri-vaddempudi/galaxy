import express from "express";
import { spiralGalaxies } from "../data/data.js";

const galaxyRouter = express.Router();

const welcomeBox = {
  title: " Welcome to the Planets Page",
  description: `Galaxies are cosmic cities filled with billions of stars, planets, and nebulae.
They come in different shapes like spirals, ellipticals, and irregular galaxies.

Select a galaxy from the sidebar to discover its morphology, diameter, and distance from Earth.`
};

galaxyRouter.get("/:name", (req, res) => {
  const paramName = req.params.name.trim().toLowerCase();
  const selectedItem = spiralGalaxies.find(
    (galaxy) => galaxy.name.toLowerCase() === paramName,
  );

  res.render("pages/featured.ejs", {
    pageType: "galaxies",
    sidebarItems: spiralGalaxies,
    selectedItem: selectedItem,
    welcomeBox: null
  });
});

galaxyRouter.get("/", (req, res) => {
  res.render("pages/featured.ejs", {
    pageType: "galaxies",
    sidebarItems: spiralGalaxies,
    selectedItem: null,
    welcomeBox
  });
});

export default galaxyRouter;