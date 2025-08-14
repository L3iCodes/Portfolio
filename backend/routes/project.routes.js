import express from 'express'
import { addProject, retrieveAllProject } from '../controllers/project.controller.js'

const router = express.Router();

router.post('/add-project', addProject);
router.post('/all-project', retrieveAllProject);

export default router;