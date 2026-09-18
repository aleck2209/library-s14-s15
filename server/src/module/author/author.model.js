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

const getAuthorById = async (id) => {
	const result = await pool.query(
		`SELECT id_author, name, nationality FROM authors WHERE id_author = $1;`,
		[id],
	);

	return result.rows[0];
};

const updateAuthor = async (id, { name, nationality }) => {
	const result = await pool.query(
		`UPDATE authors SET name = $1, nationality = $2 WHERE id_author = $3 RETURNING id_author, name, nationality;`,
		[name, nationality, id],
	);

	return result.rows[0];
};

const deleteAuthor = async (id) => {
	const result = await pool.query(
		`DELETE FROM authors WHERE id_author = $1 RETURNING id_author, name, nationality;`,
		[id],
	);

	return result.rows[0];
};

export { createAuthor, getAllAuthors, getAuthorById, updateAuthor, deleteAuthor };
