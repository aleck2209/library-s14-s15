import pool from "../../config/database.js";

const createAuthor = async ({ name, nationality }) => {
	const result = await pool.query(
		`INSERT INTO authors (name, nationality) VALUES ($1, $2) RETURNING id_author, name, nationality`,
		[name, nationality],
	);

	return result.rows[0];
};

const getAllAuthors = async () => {
	const result = await pool.query(
		`SELECT id_author, name, nationality FROM authors ORDER BY id_author;`,
	);

	return result.rows;
};

export { createAuthor, getAllAuthors };
