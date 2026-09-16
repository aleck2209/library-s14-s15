import { addLoan, findAllLoans, returnBook } from "./loan.service.js";

const createLoanController = async (req, res) => {
	const loan = await addLoan(req.body);

	res.status(201).json(loan);
};

const getAllLoansController = async(req, res) => {
    const loans = await findAllLoans();
    
    res.status(200).json(loans);
}

const returnBookController = async (req, res) => {
    const loan = await returnBook(req.params.id);

    res.status(200).json(loan);
};

export { createLoanController, getAllLoansController, returnBookController };
