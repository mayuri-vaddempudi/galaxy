import express from "express";
import { aboutDetails } from "../data/data.js";

const router = express.Router();

router.get("/", (req, res) => {

    const sidebarItems = aboutDetails.team.map(member => ({
        name: member.name,
        type: "team",
        img: member.image,
        desc: member.role,
        contact: member.contact,
        address: member.address
    }));

    res.render("pages/about", {
        pageType: "about",
        sidebarItems,
        aboutDetails
    });
});

export default router;
