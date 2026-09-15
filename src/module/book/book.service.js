import { getAllBooks, getBookById, createBook } from "./book.model.js";

const findAllBooks = async () => {
	return await getAllBooks();
};

const findBookById = async (id) => {
	return await getBookById(id);
};

const addBook = async (data) => {
    return await createBook(data)
}

export { findAllBooks, findBookById, addBook };
