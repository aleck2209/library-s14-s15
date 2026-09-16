import express from "express";
import memberRoutes from "./module/member/member.route.js";
import authorRoutes from "./module/author/author.route.js";
import bookRoutes from "./module/book/book.route.js";
import loanRoutes from "./module/loan/loan.route.js";
import statisticRoutes from "./module/statistic/statistic.route.js";
import errorMiddleware from "./middleware/error.middleware.js";

const app = express();

app.use(express.json());

// Routes
app.use("/api/members", memberRoutes);
app.use("/api/authors", authorRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/loans", loanRoutes);
app.use("/api/statistics", statisticRoutes)

app.use(errorMiddleware);

export default app;
