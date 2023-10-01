import express from 'express'
import EventController from '../controllers/events.js'

const router = express.Router()

// define routes to get events and locations
router.get('/', EventController.getAllEvents)
router.get('/:eventId', EventController.getEventById)
router.get('/location/:locationId', EventController.getEventsByLocation)

export default router