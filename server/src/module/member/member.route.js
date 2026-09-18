import { Router } from "express";
import {
	createMemberController as createMember,
	getAllMembersController as getAllMembers,
    getMemberByIdController as getMemberById,
    updateMemberController as updateMember,
    deleteMemberController as deleteMember,
    getMemberLoansController as getMemberLoans
} from "./member.controller.js";
import { validate, validateId } from "../../middleware/validate.middleware.js";
import { createMemberSchema as memberSchema } from "./member.validation.js";

const memberRoutes = Router();

memberRoutes.post("/", validate(memberSchema), createMember);
memberRoutes.get("/", getAllMembers);
memberRoutes.get("/:id/loans", validateId, getMemberLoans);
memberRoutes.get("/:id", validateId, getMemberById);
memberRoutes.put("/:id", validateId, validate(memberSchema), updateMember);
memberRoutes.delete("/:id", validateId, deleteMember);


export default memberRoutes;
