import AppError from "../../errors/AppError";

export default function checkEditingMiddleware(req, res, next) {
    const { id } = req.params;
    const { name, description, image, deploy, repository, tags } = req.body;

    if (!name && !description && !image && !deploy && !repository && !tags) {
        throw new AppError("You must send at least one field to edit", 400);
    }

    if (!id) throw new AppError("You must send the project's UUID", 400);

    return next();
}