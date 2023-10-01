import { pool } from "../config/database.js"

const getAllLocations = async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM locations')
    res.status(200).json(rows)
  } catch (err) {
    res.status(500).json({ error: err })
  }
}

const getLocationById = async (req, res) => {
  try {
    const selectQuery = `
      SELECT * FROM locations WHERE id=$1
    `
    const locationId = req.params.locationId
    const results = await pool.query(selectQuery, [locationId])
    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(409).json( { error: error.message} )
  }
}

export default {
  getAllLocations,
  getLocationById
}