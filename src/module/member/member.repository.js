import pool from "../../config/database.js";

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

export { getAllMembers };
