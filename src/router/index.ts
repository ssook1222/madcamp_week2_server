import{Router} from "express"
import {UserListController} from "../controller/UserListController";

const router = Router();
router.post('/user', UserListController.addUser);
export default router;