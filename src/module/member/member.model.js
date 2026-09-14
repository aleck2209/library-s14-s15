import pool from "../../config/database.js";

const createMember = async ({ name, email, phoneNumber }) => {
    const result = await pool.query('INSERT INTO members (name, email, phone_number) VALUES ($1, $2, $3) RETURNING id_member, name, email, phone_number;', [name, email, phoneNumber]);

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

export { createMember, getAllMembers };
