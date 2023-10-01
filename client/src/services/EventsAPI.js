const getAllEvents = async () => {
  const response = await fetch(`http://localhost:3000/events`)
  const data = await response.json()
  return data
}

const getEventById = async (id) => {
  const response = await fetch(`http://localhost:3000/events/${id}`)
  const data = await response.json()
  return data
}

const getEventsByLocation = async (id) => {
  const response = await fetch(`http://localhost:3000/events/location/${id}`)
  const data = await response.json()
  return data
}

export default {
  getAllEvents,
  getEventById,
  getEventsByLocation
}
