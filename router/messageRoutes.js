import express from "express"
import { getAllMessage, sendMessage, deleteMessage } from "../controller/messageController.js"
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router()

router.get('/getAllMessage', getAllMessage);
router.post('/send', sendMessage)
router.delete("/delete/:id", isAuthenticated, deleteMessage)


export default router;