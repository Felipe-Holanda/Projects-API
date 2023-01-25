import Project from "../../models/projects";

export default async function listProjects() {
    const projects = await Project.find();

    return projects;
}