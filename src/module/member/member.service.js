import { createMember, getAllMembers, getMemberById } from "./member.model.js";

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

const findMemberById = async(id) => {
    return await getMemberById(id);
}

export { addMember, findAllMembers, findMemberById };
