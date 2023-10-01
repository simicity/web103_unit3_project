import express from 'express'
import LocationController from '../controllers/locations.js'

const router = express.Router()

// define routes to get events and locations
router.get('/', LocationController.getAllLocations)
router.get('/:locationId', LocationController.getLocationById)

export default router