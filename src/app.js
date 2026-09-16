import express from "express";
import memberRoutes from "./module/member/member.route.js";
import authorRoutes from "./module/author/author.route.js";
import bookRoutes from "./module/book/book.route.js";
import loanRoutes from "./module/loan/loan.route.js";

const app = express();

app.use(express.json());

// Routes
app.use("/api/members", memberRoutes);
app.use("/api/authors", authorRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/loans", loanRoutes);

export default app;
