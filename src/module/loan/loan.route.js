import { Router } from "express";
import {
	createLoanController as createLoan,
	getAllLoansController as getAllLoans,
    returnBookController as returnBook
} from "./loan.controller.js";

const loanRoutes = Router();

loanRoutes.get("/", getAllLoans);
loanRoutes.post("/", createLoan);
loanRoutes.patch("/:id/return", returnBook);


export default loanRoutes;
