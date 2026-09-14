import { addMember ,findAllMembers } from "./member.service.js";

const createMemberController = async (req, res) => {
    const member = await addMember(req.body)

    res.status(201).json(member);
}

const getAllMembersController = async (req, res) => {
	const members = await findAllMembers();

	res.status(200).json(members);
};

export { createMemberController, getAllMembersController };
