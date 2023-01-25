import Project from "../../models/projects";

export default async function editProject(id, data) {
    const project = await Project.findOne({ uuid: id });

    if (data.name) project.name = data.name;
    if (data.description) project.description = data.description;
    if (data.image) project.image = data.image;
    if (data.deploy) project.deploy = data.deploy;
    if (data.repository) project.repository = data.repository;
    if (data.tags) project.tags = data.tags;
    project.lastEdit = Date.now();

    const result = await project.save();

    return result;
}