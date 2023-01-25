import AppError from "../../errors/AppError";
import Project from "../../models/projects";

export default async function checkExistenceMiddleware(req, res, next) {
    const { id } = req.params;

    const project = await Project.findOne({ uuid: id });

    if (!project) throw new AppError("Project not found", 404);

    return next();
}