import React from 'react'
import { useRoutes, Link } from 'react-router-dom'
import Locations from './pages/Locations'
import LocationEvents from './pages/LocationEvents'
import Events from './pages/Events'
import './App.css'

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <Locations />
    },
    {
      path: '/sanfrancisco',
      element: <LocationEvents location_id={1} />
    },
    {
      path: '/sunnyvale',
      element: <LocationEvents location_id={2} />
    },
    {
      path: '/bakersfield',
      element: <LocationEvents location_id={3} />
    },
    {
      path: '/monterey',
      element: <LocationEvents location_id={4} />
    },
    {
      path: '/events',
      element: <Events />
    }
  ])

  return (
    <div className='app'>

      <header className='main-header'>
        <h1>Pickleball Champs</h1>

        <div className='header-buttons'>
          <Link to='/' role='button'>Home</Link>
          <Link to='/events' role='button'>Events</Link>
        </div>
      </header>

      <main>
        {element}
      </main>
    </div>
  )
}

export default App