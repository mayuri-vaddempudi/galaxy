import express from "express";
import { aboutDetails } from "../data/data.js";

const router = express.Router();
const welcomeBox = {
    title: "Welcome to the About Page",
    description: "Learn more about our team, mission, and how Shining Stars works. Click on a team member to see their profile!"
};

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
        aboutDetails,
        welcomeBox,
    });
});

export default router;
