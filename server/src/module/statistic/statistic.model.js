import pool from "../../config/database.js";

const getStatistics = async () => {
	const result = await pool.query(`
        SELECT
            (SELECT COUNT(*) FROM books) AS total_books,
            (SELECT COUNT(*) FROM members) AS total_members,
            (SELECT COUNT(*) FROM loan WHERE is_back = false) AS current_loans,
            (SELECT COUNT(*) FROM loan WHERE is_back = false AND expected_return_date < CURRENT_DATE) AS overdue_loans;
    `);

	return result.rows[0];
};

const getMostBorrowedBook = async () => {
    const result = await pool.query(`
        SELECT b.id_book, b.title, COUNT(l.id_loan) AS loan_count
        FROM loan l
        JOIN books b 
        ON b.id_book = l.id_book
        GROUP BY b.id_book, b.title
        ORDER BY loan_count DESC
        LIMIT 1;
    `);

    return result.rows[0];
};

const getMostActiveMember = async () => {
    const result = await pool.query(`
        SELECT m.id_member, m.name, COUNT(l.id_loan) AS loan_count
        FROM loan l
        JOIN members m 
        ON m.id_member = l.id_member
        GROUP BY m.id_member, m.name
        ORDER BY loan_count DESC
        LIMIT 1;
    `);

    return result.rows[0];
};

export { getStatistics, getMostBorrowedBook, getMostActiveMember };
