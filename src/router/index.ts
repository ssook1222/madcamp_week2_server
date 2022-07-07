import{Router} from "express"
import {UserListController} from "../controller/UserListController";

const router = Router();
router.post('/user', UserListController.addUser);
router.post('/user1', UserListController.findUser);
export default router;