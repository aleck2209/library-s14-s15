import express from "express";
import memberRoutes from "./module/member/member.route.js";
import authorRoutes from "./module/author/author.route.js";

const app = express();

app.use(express.json());

// Routes
app.use("/api/members", memberRoutes);
app.use("/api/authors", authorRoutes);

export default app;
