import express from "express"
import { isAuthenticated } from "../middlewares/auth.js";
import { addNewApplication, deleteApplication, getAllApplication } from "../controller/softwareApplicationController.js";


const router = express.Router()

router.get('/getAll', getAllApplication)
router.post('/add', isAuthenticated, addNewApplication)
router.delete('/delete/:id', isAuthenticated, deleteApplication)

export default router;