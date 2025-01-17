import exprss from "express";
import {
    addNewProject,
    deleteProject,
    updateProject,
    getAllProjects,
    getSingleProject
} from "../controllers/projectController.js"
import { isAuthenticated } from "../middlewares/auth.js";

const router = exprss.Router();

router.post("/add", isAuthenticated, addNewProject);
router.delete("/delete/:id", isAuthenticated, deleteProject);
router.put("/update/:id", isAuthenticated, updateProject);
router.get("/getall", getAllProjects);
router.get("/get/:id", getSingleProject);

export default router;