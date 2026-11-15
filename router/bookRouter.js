import { Router } from "express";
import {
    createBookController, getBookController, getBookByIdController,
    updateBookController, deleteByidController
} from "../controller/bookController.js"
import { uploadCoverController } from "../controller/coverController.js"

const router = Router()

router.post("/", createBookController)
router.post("/upload-cover", uploadCoverController)
router.get("/", getBookController)
router.get("/:id", getBookByIdController)
router.patch("/:id", updateBookController)
router.delete("/:id", deleteByidController)

export default router