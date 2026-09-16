import { Router } from "express";
import {
	createMemberController as createMember,
	getAllMembersController as getAllMembers,
    getMemberByIdController as getMemberById,
    updateMemberController as updateMember,
    deleteMemberController as deleteMember,
    getMemberLoansController as getMemberLoans
} from "./member.controller.js";

const memberRoutes = Router();

memberRoutes.post("/", createMember);
memberRoutes.get("/", getAllMembers);
memberRoutes.get("/:id/loans", getMemberLoans);
memberRoutes.get("/:id", getMemberById);
memberRoutes.put("/:id", updateMember);
memberRoutes.delete("/:id", deleteMember);


export default memberRoutes;
