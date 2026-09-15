import { Router } from "express";
import {
	getAllBooksController as getAllBooks,
	getBookByIdController as getBookById,
    createBookController as createBook
} from "./book.controller.js";

const bookRoutes = Router();

bookRoutes.post('/', createBook);
bookRoutes.get("/", getAllBooks);
bookRoutes.get("/:id", getBookById);


export default bookRoutes;
