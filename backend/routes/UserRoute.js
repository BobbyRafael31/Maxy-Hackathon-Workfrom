import express from "express";
import {

    getUsers,
    getUserbyId,
    createUser,
    updateUser,
    deleteUser

} from "../controllers/Users.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/users', verifyUser , adminOnly ,getUsers);
router.post('/users', verifyUser , adminOnly ,createUser);
router.get('/users/:id', verifyUser , adminOnly ,getUserbyId);
router.patch('/users/:id', verifyUser , adminOnly ,updateUser);
router.delete('/users/:id', verifyUser , adminOnly ,deleteUser);


export default router;