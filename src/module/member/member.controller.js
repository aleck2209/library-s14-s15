import { addMember, findAllMembers, findMemberById } from "./member.service.js";

const createMemberController = async (req, res) => {
	const member = await addMember(req.body);

	res.status(201).json(member);
};

const getAllMembersController = async (_req, res) => {
	const members = await findAllMembers();

	res.status(200).json(members);
};

const getMemberByIdController = async (req, res) => {
    const member = await findMemberById(req.params.id);
    res.status(200).json(member)
}

export { createMemberController, getAllMembersController, getMemberByIdController };
