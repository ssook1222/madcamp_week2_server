import{Router} from "express"
import {UserListController} from "../controller/UserListController";
import {WeatherController} from "../controller/WeatherController";
import {RecommendController} from "../controller/RecommendController";
import {ShoppingController} from "../controller/ShoppingController";

const router = Router();
router.post('/user', UserListController.addUser);
router.post('/user1', UserListController.findUser);
router.post('/user2', UserListController.matchId);
router.get('/test',WeatherController.weatherLookRequest);
router.post('/rec', RecommendController.recFashion);
router.post('/add', RecommendController.addFashion);
router.get('/shopping/:item',ShoppingController.test);
export default router;