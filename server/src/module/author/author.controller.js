import {
	addAuthor,
	findAllAuthors,
	findAuthorById,
	editAuthor,
    removeAuthor
} from "./author.service.js";

const createAuthorController = async (req, res) => {
	const author = await addAuthor(req.body);

	res.status(201).json(author);
};

const getAllAuthorsController = async (_req, res) => {
	const authors = await findAllAuthors();

	res.status(200).json(authors);
};

const getAuthorByIdController = async (req, res) => {
	const author = await findAuthorById(req.params.id);

	res.status(200).json(author);
};

const updateAuthorController = async (req, res) => {
	const author = await editAuthor(req.params.id, req.body);

	res.status(200).json(author);
};

const deleteAuthorController = async (req, res) => {
    const author = await removeAuthor(req.params.id);

    res.status(200).json(author);
};

export {
	createAuthorController,
	getAllAuthorsController,
	getAuthorByIdController,
	updateAuthorController,
    deleteAuthorController
};
