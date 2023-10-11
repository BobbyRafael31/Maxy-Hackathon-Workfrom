import express from 'express';

import {
    getNearMeFacilities,
    getNearMeFacilitiesById,
    createNearMeFacilities,
    updateNearMeFacilities,
    deleteNearMeFacilities

} from '../controllers/NearMe.js';
import {verifyUser} from '../middleware/AuthUser.js';

const router = express.Router();
router.get('/nearmeFacility/:locationid', getNearMeFacilities);
router.get('/nearmeFacility/:locationid/:id', getNearMeFacilitiesById);
router.post('/nearmeFacility/:locationid', verifyUser, createNearMeFacilities);
router.patch('/nearmeFacility/:locationid/:id', verifyUser, updateNearMeFacilities);
router.delete('/nearmeFacility/:locationid/:id', verifyUser, deleteNearMeFacilities);

export default router;