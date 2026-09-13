import { findAllMembers } from "./member.service.js";

const getAllMembersController = async (req, res) => {
	const members = await findAllMembers();

	res.status(200).json(members);
};

export { getAllMembersController };
