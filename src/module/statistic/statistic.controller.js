import { findStatistics } from "./statistic.service.js";

const getStatisticsController = async (_req, res) => {
	const statistics = await findStatistics();

	res.status(200).json(statistics);
};

export { getStatisticsController };
