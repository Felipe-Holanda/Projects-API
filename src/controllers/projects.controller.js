import deleteProject from "../services/projects/deleteProject";
import editProject from "../services/projects/editProject";
import listProjects from "../services/projects/listProjects";
import viewProject from "../services/projects/viewProject";
import createProject from "../services/projects/registerProject";

export async function createProjectController(req, res) {
    const { name, description, image, deploy, repository, tags } = req.body;
    const project = await createProject({ name, description, image, deploy, repository, tags });
    return res.status(201).json(project);
}

export async function listProjectsController(req, res) {
    const projects = await listProjects();
    return res.status(200).json(projects);
}

export async function viewProjectController(req, res) {
    const { id } = req.params;
    const project = await viewProject(id);
    return res.status(200).json(project);
}

export async function editProjectController(req, res) {
    const { id } = req.params;
    const { name, description, image, deploy, repository, tags } = req.body;
    const project = await editProject(id, { name, description, image, deploy, repository, tags });
    return res.status(200).json(project);
}

export async function deleteProjectController(req, res) {
    const { id } = req.params;
    await deleteProject(id);
    return res.status(204).send();
}