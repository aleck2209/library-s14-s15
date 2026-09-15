import { Router } from "express";
import {
	createMemberController as createMember,
	getAllMembersController as getAllMembers,
    getMemberByIdController as getMemberById,
    updateMemberController as updateMember
} from "./member.controller.js";

const memberRoutes = Router();

memberRoutes.post("/", createMember);
memberRoutes.get("/", getAllMembers);
memberRoutes.get("/:id", getMemberById);
memberRoutes.put("/:id", updateMember);


export default memberRoutes;
