import {
	findAllBooks,
	findBookById,
	addBook,
	editBook,
	removeBook,
	lookForBooks,
} from "./book.service.js";

const getAllBooksController = async (req, res) => {
    const limit = Number(req.query.limit) || 10
    const page = Number(req.query.page) || 1

	const books = await findAllBooks(limit, page);

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

const searchBooksController = async (req, res) => {
	const { q } = req.query;
	const books = await lookForBooks(q);

	res.status(200).json(books);
};

export {
	getAllBooksController,
	getBookByIdController,
	createBookController,
	updateBookController,
	deleteBookController,
	searchBooksController,
};
