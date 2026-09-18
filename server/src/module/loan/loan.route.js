import { Router } from "express";
import {
	createLoanController as createLoan,
	getAllLoansController as getAllLoans,
    returnBookController as returnBook
} from "./loan.controller.js";
import { validate, validateId } from "../../middleware/validate.middleware.js";
import { loanSchema } from "./loan.validation.js";

const loanRoutes = Router();

loanRoutes.get("/", getAllLoans);
loanRoutes.post("/", validate(loanSchema), createLoan);
loanRoutes.patch("/:id/return", validateId, returnBook);


export default loanRoutes;
