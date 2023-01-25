import Project from "../../models/projects";

export default async function viewProject(id) {
    const project = await Project.find({ uuid: id });

    return project;
}