import Project from "../../models/projects";

export default async function registerProject(data) {
    const project = new Project({
        name: data.name,
        description: data.description,
        image: data.image,
        deploy: data.deploy,
        repository: data.repository,
        tags: data.tags
    });

    const saved = await project.save();

    return saved;
}