import Project from "../../models/projects";

export default async function deleteProject(id) {
    const project = await Project.findOne({ where: { uuid: id } });

    await project.delete();

    return;
}