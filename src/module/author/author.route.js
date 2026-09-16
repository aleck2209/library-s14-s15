import { Router } from "express";
import {
	createAuthorController as createAuthor,
	getAllAuthorsController as getAllAuthors,
    getAuthorByIdController as getAuthorById,
    updateAuthorController as updateAuthor,
    deleteAuthorController as deleteAuthor
} from "./author.controller.js";
import { validate, validateId } from "../../middleware/validate.middleware.js";
import { authorSchema } from "./author.validation.js";

const authorRoutes = Router();

authorRoutes.post("/", validate(authorSchema), createAuthor);
authorRoutes.get("/", getAllAuthors);
authorRoutes.get("/:id", validateId, getAuthorById);
authorRoutes.put("/:id", validateId, validate(authorSchema), updateAuthor);
authorRoutes.delete("/:id", validateId, deleteAuthor);

export default authorRoutes;
