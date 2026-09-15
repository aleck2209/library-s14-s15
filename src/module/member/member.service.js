import {
	createMember,
	getAllMembers,
	getMemberById,
	updateMember,
} from "./member.model.js";

const addMember = async ({ name, email, phoneNumber }) => {
	return await createMember({
		name,
		email,
		phoneNumber,
	});
};

const findAllMembers = async () => {
	return await getAllMembers();
};

const findMemberById = async (id) => {
	return await getMemberById(id);
};

const editMember = async (id, data) => {
	return await updateMember(id, data);
};

export { addMember, findAllMembers, findMemberById, editMember };
