import { Router } from "express";
import {
	createAuthorController as createAuthor,
	getAllAuthorsController as getAllAuthors,
    getAuthorByIdController as getAuthorById,
    updateAuthorController as updateAuthor,
    deleteAuthorController as deleteAuthor
} from "./author.controller.js";

const authorRoutes = Router();

authorRoutes.post("/", createAuthor);
authorRoutes.get("/", getAllAuthors);
authorRoutes.get("/:id", getAuthorById);
authorRoutes.put("/:id", updateAuthor);
authorRoutes.delete("/:id", deleteAuthor);

export default authorRoutes;
