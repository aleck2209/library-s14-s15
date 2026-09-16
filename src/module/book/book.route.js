import { Router } from "express";
import {
	getAllBooksController as getAllBooks,
	getBookByIdController as getBookById,
    createBookController as createBook,
    updateBookController as updateBook,
    deleteBookController as deleteBook,
    searchBooksController as searchBooks
} from "./book.controller.js";

const bookRoutes = Router();

bookRoutes.post('/', createBook);
bookRoutes.get("/", getAllBooks);
bookRoutes.get("/search", searchBooks);
bookRoutes.get("/:id", getBookById);
bookRoutes.put("/:id", updateBook);
bookRoutes.delete("/:id", deleteBook);


export default bookRoutes;
