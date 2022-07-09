import{Router} from "express"
import {UserListController} from "../controller/UserListController";
import {WeatherController} from "../controller/WeatherController";
import {RecommendController} from "../controller/RecommendController";

const router = Router();
router.post('/user', UserListController.addUser);
router.post('/user1', UserListController.findUser);
router.post('/user2', UserListController.matchId);
router.get('/test',WeatherController.weatherLookRequest);
router.post('/rec', RecommendController.recFashion);
export default router;