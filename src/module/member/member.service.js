import { createMember, getAllMembers } from "./member.model.js";

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

export { addMember, findAllMembers };
