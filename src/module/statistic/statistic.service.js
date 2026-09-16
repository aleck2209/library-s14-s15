import { getStatistics, getMostActiveMember, getMostBorrowedBook } from "./statistic.model.js";

const findStatistics = async () => {
    const statistics = await getStatistics();
    const mostBorrowedBook = await getMostBorrowedBook();
    const mostActiveMember = await getMostActiveMember();

    return {
        ...statistics,
        most_borrowed_book: mostBorrowedBook,
        most_active_member: mostActiveMember
    };
};

export { findStatistics };
