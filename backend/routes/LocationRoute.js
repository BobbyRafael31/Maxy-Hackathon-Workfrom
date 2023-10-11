import express from "express";
import {

    getLocations,
    getLocationbyId,
    createLocation,
    updateLocation,
    deleteLocation

} from "../controllers/Locations.js";
import {verifyUser} from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/locations', verifyUser , getLocations);
router.post('/locations', verifyUser , createLocation);
router.get('/locations/:id', verifyUser , getLocationbyId);
router.patch('/locations/:id', verifyUser , updateLocation);
router.delete('/locations/:id', verifyUser , deleteLocation);


export default router;