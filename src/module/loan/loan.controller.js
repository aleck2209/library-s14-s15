import { addLoan, findAllLoans } from "./loan.service.js";

const createLoanController = async (req, res) => {
	const loan = await addLoan(req.body);

	res.status(201).json(loan);
};

const getAllLoansController = async(req, res) => {
    const loans = await findAllLoans();
    
    res.status(200).json(loans);
}

export { createLoanController, getAllLoansController };
