import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import '../css/LocationEvents.css'
import EventsAPI from '../services/EventsAPI.js'

const Events = () => {
    const [events, setEvents] = useState([])

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

    return (
        <div className='location-events'>
            <header>
                <div className='search-bar'>
                    <h2>Search Bar Under Construction...</h2>
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