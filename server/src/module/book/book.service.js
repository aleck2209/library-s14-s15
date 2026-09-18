import {
	getAllBooks,
	getBookById,
	createBook,
	updateBook,
    deleteBook,
    searchBooks
} from "./book.model.js";

const findAllBooks = async (limit = 10, page = 1) => {
    const offset = (page -1) * limit
	return await getAllBooks(limit, offset);
};

const findBookById = async (id) => {
	return await getBookById(id);
};

const addBook = async ({ title, year, status, authorId }) => {
	return await createBook({title, year, status, authorId})
};

const editBook = async (id, data) => {
	return await updateBook(id, data);
};

const removeBook = async (id) => {
    return await deleteBook(id);
};

const lookForBooks = async (search) => {
    return await searchBooks(search)
}

export { findAllBooks, findBookById, addBook, editBook, removeBook, lookForBooks };
