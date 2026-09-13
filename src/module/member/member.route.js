import { Router } from "express";
import { getAllMembersController as getAllMembers } from "./member.controller.js";

const memberRoutes = Router();

memberRoutes.get('/', getAllMembers);

export default memberRoutes