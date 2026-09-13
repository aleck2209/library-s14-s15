import { getAllMembers } from "./member.repository.js";

const findAllMembers = async () => {
	return await getAllMembers();
};

export { findAllMembers };
