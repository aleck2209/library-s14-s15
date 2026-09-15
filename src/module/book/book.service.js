import {
	getAllBooks,
	getBookById,
	createBook,
	updateBook,
    deleteBook
} from "./book.model.js";

const findAllBooks = async () => {
	return await getAllBooks();
};

const findBookById = async (id) => {
	return await getBookById(id);
};

const addBook = async (data) => {
	return await createBook(data);
};

const editBook = async (id, data) => {
	return await updateBook(id, data);
};

const removeBook = async (id) => {
    return await deleteBook(id);
};

export { findAllBooks, findBookById, addBook, editBook, removeBook };
