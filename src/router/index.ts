import{Router} from "express"
import {UserListController} from "../controller/UserListController";
import {WeatherController} from "../controller/WeatherController";

const router = Router();
router.post('/user', UserListController.addUser);
router.post('/user1', UserListController.findUser);
router.get('/test',WeatherController.weatherLookRequest)
export default router;