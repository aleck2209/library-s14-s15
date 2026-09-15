import {
	findAllBooks,
	findBookById,
	addBook,
	editBook,
    removeBook
} from "./book.service.js";

const getAllBooksController = async (_req, res) => {
	const books = await findAllBooks();

	res.status(200).json(books);
};

const getBookByIdController = async (req, res) => {
	const book = await findBookById(req.params.id);

	res.status(200).json(book);
};

const createBookController = async (req, res) => {
	const book = await addBook(req.body);

	res.status(201).json(book);
};

const updateBookController = async (req, res) => {
	const book = await editBook(req.params.id, req.body);

	res.status(200).json(book);
};

const deleteBookController = async (req, res) => {
    const book = await removeBook(req.params.id);

    res.status(200).json(book);
};

export {
	getAllBooksController,
	getBookByIdController,
	createBookController,
	updateBookController,
    deleteBookController
};
