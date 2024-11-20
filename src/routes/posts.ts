import { Router } from "express"
import { loadPostsController } from "../controllers/loadPostsController.js"
import { loadPostController } from "../controllers/loadPostController.js"

const router = Router()

router.get('/posts', loadPostsController)
router.get('/posts/:id', loadPostController)

export default router