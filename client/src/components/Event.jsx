import React, { useState, useEffect } from 'react'
import '../css/Event.css'
import EventsAPI from '../services/EventsAPI.js'

const getTimeStamp = (date) => {
    const timestamp = new Date(date)
    return timestamp.toDateString().split(' ').slice(1).join(' ')
}

const getDateDiff = (date) => {
    const timestamp = new Date(date)
    if(timestamp - Date.now() < 0) {
        return 'Event has already passed!'
    }
    const days = Math.floor((timestamp - Date.now()) / (1000 * 60 * 60 * 24))
    if(days <= 30) {
        return `${days} day${days > 1 ? "s" : ""} remaining!`
    }
    const months = Math.floor(days / 30)
    return `${months} month${months > 1 ? "s" : ""} and ${days - 30 * months} days remaining!`
}

const Event = (props) => {

    const [event, setEvent] = useState([])
    const [remaining, setRemaining] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const eventData = await EventsAPI.getEventById(props.id)
                setEvent(eventData)
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [])


    useEffect(() => {
        setRemaining(getDateDiff(event.startson))
    }, [event])

    return (
        <article className='event-information'>
            <img src={event.image} />

            <div className='event-information-overlay'>
                <div className='text'>
                    <h3>{event.title}</h3>
                    <p><i className="fa-regular fa-calendar fa-bounce"></i> {getTimeStamp(event.startson)}</p>
                    <p id={`remaining-${event.id}`}>{remaining}</p>
                </div>
            </div>
        </article>
    )
}

export default Event