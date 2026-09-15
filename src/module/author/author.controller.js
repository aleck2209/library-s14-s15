import { addAuthor, findAllAuthors } from "./author.service.js";

const createAuthorController = async (req, res) => {
    const author = await addAuthor(req.body);

    res.status(201).json(author);
};

const getAllAuthorsController = async (_req, res) => {
	const authors = await findAllAuthors();

	res.status(200).json(authors);
};

export { createAuthorController, getAllAuthorsController };
