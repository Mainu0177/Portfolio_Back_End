import express from "express"
import { isAuthenticated } from "../middlewares/auth.js";
import { deleteTimeline, getAllTimelines, postTimeline } from "../controller/timelineController.js";

const router = express.Router()

router.get('/getAll', getAllTimelines)
router.post('/add', isAuthenticated, postTimeline)
router.delete('/delete/:id', isAuthenticated, deleteTimeline)


export default router;