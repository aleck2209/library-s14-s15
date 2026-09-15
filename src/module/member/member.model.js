import pool from "../../config/database.js";

const createMember = async ({ name, email, phoneNumber }) => {
	const result = await pool.query(
		"INSERT INTO members (name, email, phone_number) VALUES ($1, $2, $3) RETURNING id_member, name, email, phone_number;",
		[name, email, phoneNumber],
	);

	return result.rows[0];
};

const getAllMembers = async () => {
	const results = await pool.query(
		`SELECT
            id_member,
            name,
            email,
            phone_number
        FROM members
        ORDER BY id_member;`,
	);

	return results.rows;
};

const getMemberById = async (id) => {
	const result = pool.query(
		"SELECT id_member, name, email, phone_number FROM members WHERE id_member = $1",
		[id],
	);

	return (await result).rows[0];
};

const updateMember = async (id, { name, email, phoneNumber }) => {
	const result = await pool.query(
		"UPDATE members SET name = $1, email = $2, phone_number = $3 WHERE id_member = $4 RETURNING id_member, name, email, phone_number;",
		[name, email, phoneNumber, id],
	);

	return result.rows[0];
};

const deleteMember = async (id) => {
	const result = await pool.query(
		"DELETE FROM members WHERE id_member = $1 RETURNING id_member, name, email, phone_number;",
		[id],
	);

	return result.rows[0];
};

export {
	createMember,
	getAllMembers,
	getMemberById,
	updateMember,
	deleteMember,
};
