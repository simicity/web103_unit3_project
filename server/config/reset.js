import { pool } from './database.js'
import './dotenv.js'

const createLocationsTable = async () => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS locations (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      image VARCHAR(1000) NOT NULL,
      address VARCHAR(255) NOT NULL,
      city VARCHAR(255) NOT NULL,
      state VARCHAR(32) NOT NULL,
      zip VARCHAR(16) NOT NULL
    )
  `

  try {
    const res = await pool.query(createTableQuery)
    console.log('🎉 locations table created successfully')
  } catch (err) {
    console.error('⚠️ error creating locations table', err)
  }
}

const createEventsTable = async () => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS events (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      location SERIAL REFERENCES locations(id),
      image VARCHAR(1000),
      startsOn TIMESTAMP NOT NULL,
      endsOn TIMESTAMP NOT NULL
    )
  `

  try {
    const res = await pool.query(createTableQuery)
    console.log('🎉 events table created successfully')
  } catch (err) {
    console.error('⚠️ error creating events table', err)
  }
}

await createLocationsTable()
await createEventsTable()
