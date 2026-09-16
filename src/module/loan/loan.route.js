import { Router } from "express";
import { createLoanController as createLoan, getAllLoansController as getAllLoans } from "./loan.controller.js";

const loanRoutes = Router();

loanRoutes.post('/', createLoan);
loanRoutes.get('/', getAllLoans)

export default loanRoutes;