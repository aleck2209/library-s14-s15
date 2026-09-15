import pool from "../../config/database.js";

const getAllBooks = async () => {
	const result = await pool.query(
		`SELECT id_book, title, year, status FROM books ORDER BY id_book;`,
	);

	return result.rows;
};

const getBookById = async (id) => {
	const result = await pool.query(
		`SELECT id_book, title, year, status FROM books WHERE id_book = $1;`,
		[id],
	);

	return result.rows[0];
};

const createBook = async ({ title, year, status }) => {
    const result = await pool.query(`INSERT INTO books (title, year, status) VALUES ($1, $2, $3) RETURNING id_book, title, year, status;`, [title, year, status]);

    return result.rows[0];
};

export { getAllBooks, getBookById, createBook };
