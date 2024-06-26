import React, { useState } from 'react';
import EventForm from './EventForm';
import EventList from './EventList';

function App() {

  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  return (
    <div>
      <h1 className="titulo">Registro de Eventos</h1>
      <EventForm addEvent={addEvent} />
      <h2 className="titulo">Eventos Registrados:</h2>
      <EventList events={events} />
    </div>
  );
}

export default App
