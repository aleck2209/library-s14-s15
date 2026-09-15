import { createAuthor, getAllAuthors } from "./author.model.js";

const addAuthor = async ({ name, nationality }) => {
	return await createAuthor({
		name,
		nationality,
	});
};

const findAllAuthors = async () => {
	return await getAllAuthors();
};

export { addAuthor, findAllAuthors };
