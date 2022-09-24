import { Router } from "express";
import * as indexController from "../controllers/index.controllers";

const indexRoutes = Router();
indexRoutes.get('/test', indexController.testRoute);
indexRoutes.get('*', indexController.denyAccess);

export default indexRoutes;