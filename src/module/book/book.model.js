import pool from "../../config/database.js";

const getAllBooks = async (limit, offset) => {
	const result = await pool.query(
		`SELECT b.id_book, b.title, b.year, b.status, a.name AS author_name
        FROM books b
        JOIN authors a 
        ON a.id_author = b.id_author
        ORDER BY b.id_book
        LIMIT $1
        OFFSET $2;`, [limit, offset],
	);

	return result.rows;
};

const getBookById = async (id) => {
	const result = await pool.query(
		`SELECT b.id_book, b.title, b.year, b.status, a.name AS author_name
        FROM books b
        JOIN authors a ON a.id_author = b.id_author
        WHERE b.id_book = $1;`,
		[id],
	);

	return result.rows[0];
};

const createBook = async ({ title, year, status, authorId }) => {
	const result = await pool.query(
		`INSERT INTO books (title, year, status, id_author)
VALUES ($1, $2, $3, $4)
RETURNING id_book, title, year, status, id_author;`,
		[title, year, status, authorId],
	);

	return result.rows[0];
};

const updateBook = async (id, { title, year, status }) => {
	const result = await pool.query(
		`UPDATE books SET title = $1, year = $2, status = $3 WHERE id_book = $4 RETURNING id_book, title, year, status;`,
		[title, year, status, id],
	);

	return result.rows[0];
};

const deleteBook = async (id) => {
	const result = await pool.query(
		` DELETE FROM books WHERE id_book = $1 RETURNING id_book, title, year, status;`,
		[id],
	);

	return result.rows[0];
};

const searchBooks = async (search) => {
    const result = await pool.query(
        `
            SELECT b.id_book, b.title, b.year, b.status, b.id_author
            FROM books b
            JOIN authors a
            ON b.id_author = a.id_author
            WHERE b.title ILIKE $1
            OR a.name ILIKE $1
            ORDER BY b.id_book;
        `, [`%${search}%`]
    );

    return result.rows;
}

export { getAllBooks, getBookById, createBook, updateBook, deleteBook, searchBooks };
