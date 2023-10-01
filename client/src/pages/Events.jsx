import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import '../css/LocationEvents.css'
import EventsAPI from '../services/EventsAPI.js'
import LocationsAPI from '../services/LocationsAPI.js'

const Events = () => {
    const [locations, setLocations] = useState([])
    const [selectedLocation, setSelectedLocation] = useState(0)
    const [events, setEvents] = useState([])

    useEffect(() => {
      (async () => {
          try {
              const locationsData = await LocationsAPI.getAllLocations()
              setLocations(locationsData)
          }
          catch (error) {
              throw error
          }
      }) ()
    }, [])

    useEffect(() => {
        (async () => {
            try {
                const eventData = await EventsAPI.getAllEvents()
                setEvents(eventData)
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [])

    const handleSelectChange = async (event) => {
      setSelectedLocation(event.target.value)
      if(event.target.value == 0) {
        const eventData = await EventsAPI.getAllEvents()
        setEvents(eventData)
      } else {
        const eventData = await EventsAPI.getEventsByLocation(event.target.value)
        setEvents(eventData)          
      }
    }

    return (
        <div className='location-events'>
            <header>
                <div className='search-bar'>
                  <label htmlFor="filter-location">Location</label>
                  <select id="filter-location" defaultValue={0} onChange={handleSelectChange}>
                    <option key={"location-all"} value={0}>All</option>
                    {
                      locations && locations.length > 0 && locations.map((location) => (
                        <option key={location.name} value={location.id}>{location.name}</option>
                      ))
                    }
                  </select>
                </div>
            </header>

            <main>
                {
                    events && events.length > 0 ? events.map((event, index) =>
                        <Event
                            key={event.id}
                            id={event.id}
                        />
                    ) : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled at this location yet!'}</h2>
                }
            </main>
        </div>
    )
}

export default Events