import { Router } from "express";
import {
	getAllBooksController as getAllBooks,
	getBookByIdController as getBookById,
    createBookController as createBook,
    updateBookController as updateBook,
    deleteBookController as deleteBook,
    searchBooksController as searchBooks
} from "./book.controller.js";
import { validate } from "../../middleware/validate.middleware.js";
import { schemaBook } from "./book.validation.js";

const bookRoutes = Router();

bookRoutes.post('/', validate(schemaBook), createBook);
bookRoutes.get("/", getAllBooks);
bookRoutes.get("/search", searchBooks);
bookRoutes.get("/:id", getBookById);
bookRoutes.put("/:id", validate(schemaBook), updateBook);
bookRoutes.delete("/:id", deleteBook);


export default bookRoutes;
