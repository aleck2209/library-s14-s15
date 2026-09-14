import { Router } from "express";
import {
	createMemberController as createMember,
	getAllMembersController as getAllMembers,
} from "./member.controller.js";

const memberRoutes = Router();

memberRoutes.post("/", createMember);
memberRoutes.get("/", getAllMembers);

export default memberRoutes;
