import { Router } from "express";
import {
	createAuthorController as createAuthor,
	getAllAuthorsController as getAllAuthors,
} from "./author.controller.js";

const authorRoutes = Router();

authorRoutes.post("/", createAuthor);
authorRoutes.get("/", getAllAuthors);

export default authorRoutes;
