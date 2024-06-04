import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { addComment, deleteComment, getVideoComments, updateComment } from "../controllers/comment.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();
router.use(verifyJWT, upload.none());

router.route('/:videoId').post(addComment).get(getVideoComments);
router.route('/c/:commentId').patch(updateComment).delete(deleteComment);


export default router;

