import express from 'express'
import { addProject, retrieveAllProject, editProject, retrieveFeaturedProject, deleteProject } from '../controllers/project.controller.js'

const router = express.Router();

router.post('/add-project', addProject);
router.post('/edit-project/:id', editProject)
router.get('/all-project', retrieveAllProject);
router.get('/featured-project', retrieveFeaturedProject);
router.delete('/delete-project/:id', deleteProject);


export default router;