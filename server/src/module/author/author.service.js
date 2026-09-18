import {
	createAuthor,
	getAllAuthors,
	getAuthorById,
	updateAuthor,
    deleteAuthor
} from "./author.model.js";

const addAuthor = async ({ name, nationality }) => {
	return await createAuthor({
		name,
		nationality,
	});
};

const findAllAuthors = async () => {
	return await getAllAuthors();
};

const findAuthorById = async (id) => {
	return await getAuthorById(id);
};

const editAuthor = async (id, data) => {
	return await updateAuthor(id, data);
};

const removeAuthor = async (id) => {
    return await deleteAuthor(id);
};

export { addAuthor, findAllAuthors, findAuthorById, editAuthor, removeAuthor };
