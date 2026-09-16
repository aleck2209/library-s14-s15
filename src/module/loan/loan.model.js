import pool from "../../config/database.js";

const createLoan = async ({ expectedReturnDate, bookId, memberId }) => {
	const result = await pool.query(
		`
        INSERT INTO loan (expected_return_date, id_book, id_member)
        VALUES ($1, $2, $3)
        RETURNING id_loan, expected_return_date, id_book, id_member;
    `,
		[expectedReturnDate, bookId, memberId],
	);

	return result.rows[0];
};

const getAllLoans = async() => {
    const result = await pool.query(`
        SELECT l.id_loan, b.title as book_title, m.name as member_name, l.is_back, l.expected_return_date, l.return_date
        FROM loan l
        JOIN books b ON b.id_book = l.id_book
        JOIN members m ON m.id_member = l.id_member
        ORDER BY l.id_loan;
    `);

    return result.rows;
}

export { getAllLoans, createLoan };
