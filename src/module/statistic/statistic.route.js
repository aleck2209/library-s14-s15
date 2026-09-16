import { Router } from "express";
import { getStatisticsController as getStatistics } from "./statistic.controller.js";

const statisticRoutes = Router();

statisticRoutes.get('/', getStatistics);

export default statisticRoutes;