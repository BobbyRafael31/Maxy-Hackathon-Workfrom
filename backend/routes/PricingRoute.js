import express from "express";
import {
    getPricings,
    getPricingById,
    createPricing,
    updatePricing,
    deletePricing
} from "../controllers/Pricings.js";

import { verifyUser } from "../middleware/AuthUser.js";  

const router = express.Router();

router.get('/pricing/:locationid', getPricings);
router.get('/pricing/:locationid/:id', getPricingById);
router.post('/pricing/:locationid', verifyUser, createPricing);
router.patch('/pricing/:locationid/:id', verifyUser, updatePricing);
router.delete('/pricing/:locationid/:id', verifyUser, deletePricing);

export default router;