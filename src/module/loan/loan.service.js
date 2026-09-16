import {
	createLoan,
	getAllLoans,
	returnLoan,
	getLoanById,
    getLoansByMemberId
} from "./loan.model.js";
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
	const loans = await getAllLoans();

    return loans.map((loan) => {
        if(loan.is_back) {
            return {
                ...loan,
                status: "retourné"
            }
        }

        if (new Date(loan.expected_return_date) < new Date()) {
            return {
                ...loan,
                status: "retard"
            }
        }

        return {
            ...loan,
            status: "en cours"
        }
    })
};

const returnBook = async (loanId) => {
	const loan = await getLoanById(loanId);

	if (!loan) {
		throw new Error("Loan not found");
	}

	if (loan.is_back) {
		throw new Error("Book has already been returned");
	}

	const updatedLoan = await returnLoan(loanId);

	await updateStatusBook("disponible", loan.id_book);

	return updatedLoan;
};

const findLoansByMemberId = async (memberId) => {
    const loans = await getLoansByMemberId(memberId);

    return loans.map((loan) => {
        if (loan.is_back) {
            return {
                ...loan,
                status: "retourné"
            };
        }

        if (new Date(loan.expected_return_date) < new Date()) {
            return {
                ...loan,
                status: "retard"
            };
        }

        return {
            ...loan,
            status: "en cours"
        };
    });
};

export { addLoan, findAllLoans, returnBook, findLoansByMemberId };
