const validate = (schema) => {
	return (req, res, next) => {
		let errors = [];

		for (const field of schema) {
			if (
				req.body[field] === "" ||
				req.body[field] === undefined ||
				req.body[field] === null
			) {
				errors.push(`${field} is required`);
			}
		}

		if (errors.length > 0) {
			return res.status(400).json({
				message: "Bad Request",
				errors,
			});
		}

		next();
	};
};

const validateId = (req, res, next) => {
    const id = req.params.id

    if (!Number.isInteger(id) || id <= 0) {
        res.status(400).json({
            message: "Invalid id"
        })
    }

    next()
}

export { validate, validateId };
