import { createLoan, getAllLoans } from "./loan.model.js";
import { getBookById, updateStatusBook } from "../book/book.model.js";
import { getMemberById } from "../member/member.model.js";

const addLoan = async ({ expectedReturnDate, bookId, memberId }) => {
	try {
		const book = await getBookById(bookId);

		if (!book) {
			throw new Error("Book not found");
		}

		if (book.status !== "disponible") {
			throw new Error("Book is already borrowed");
		}

		const member = await getMemberById(memberId);

		if (!member) {
			throw new Error("Member not found");
		}

		const loanResult = await createLoan({
			expectedReturnDate,
			bookId,
			memberId,
		});
		await updateStatusBook("emprunté", bookId);

		return loanResult;
	} catch (error) {
		console.error(error);
		throw error;
	}
};

const findAllLoans = async () => {
    return await getAllLoans()
}

export { addLoan, findAllLoans };
