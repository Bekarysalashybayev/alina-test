import express from "express";
import ApplicationService from "../services/ApplicationService";

const router = express.Router();


router.get('/apps', ApplicationService.fetchApps)
router.post('/app', ApplicationService.createApp)
router.delete('/app/:id', ApplicationService.deleteApp)

export default router
