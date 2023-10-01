import { pool } from "../config/database.js"

const getAllEvents = async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM events')
    res.status(200).json(rows)
  } catch (err) {
    res.status(500).json({ error: err })
  }
}

const getEventById = async (req, res) => {
  try {
    const selectQuery = `
      SELECT * FROM events WHERE id=$1
    `
    const id = req.params.eventId
    const results = await pool.query(selectQuery, [id])
    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(409).json( { error: error.message} )
  }
}

const getEventsByLocation = async (req, res) => {
  try {
    //query to get all events in the events table by city in the locations table
    const selectQuery = `
      SELECT * FROM events WHERE location=$1
    `
    const location_id = req.params.locationId
    const results = await pool.query(selectQuery, [location_id])
    res.status(200).json(results.rows)
  } catch (error) {
    res.status(409).json( { error: error.message} )
  }
}

export default {
  getAllEvents,
  getEventById,
  getEventsByLocation
}