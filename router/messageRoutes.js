import express from "express"
import { isAuthenticated } from "../middlewares/auth.js";
import { deleteMessage, getAllMessage, sendMessage } from "../controller/messageController.js";

const router = express.Router()

router.get('/getAllMessage', getAllMessage);
router.post('/send', sendMessage)
router.delete("/delete/:id", isAuthenticated, deleteMessage)


export default router;