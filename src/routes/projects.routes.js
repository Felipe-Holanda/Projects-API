import { Router } from "express";

// Controllers
import {
    createProjectController,
    deleteProjectController,
    editProjectController,
    listProjectsController,
    viewProjectController
} from "../controllers/projects.controller";

// Serializers and Schemas
import shapeVerifyer from "../middlewares/global/verifyShape.serializer";
import { editSchema, registerSchema, uuidSchema } from "../schemas/projects.schemas";

//Middlewares
import verifyUniqueMiddleware from "../middlewares/projects/verifyUnique.middleware";
import checkExistenceMiddleware from "../middlewares/projects/checkExistence.middleware";
import checkEditingMiddleware from "../middlewares/projects/checkEditing.middleware";

const ProjectRoutes = Router();

ProjectRoutes.get("", listProjectsController)
ProjectRoutes.post("", shapeVerifyer(registerSchema), verifyUniqueMiddleware, createProjectController)
ProjectRoutes.get("/:id", shapeVerifyer(uuidSchema), checkExistenceMiddleware, viewProjectController)
ProjectRoutes.patch("/:id", shapeVerifyer(editSchema), checkEditingMiddleware, checkExistenceMiddleware, editProjectController)
ProjectRoutes.delete("/:id", shapeVerifyer(uuidSchema), checkExistenceMiddleware, deleteProjectController)

export default ProjectRoutes;