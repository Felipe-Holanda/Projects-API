import AppError from "../../errors/AppError";
import Project from "../../models/projects";

export default async function verifyUniqueMiddleware(req, res, next) {
    const { deploy, repository } = req.body;

    const project = await Project.findOne({
        where: {
            deploy,
            repository
        }
    });

    if (project) throw new AppError("This project already exists", 400);

    return next();
}