import React from 'react';

function EventList({ events }) {
  return (
    <div>
      {events.map((event, index) => (
        <div key={index}>
          <h3 className='Neon2'>{event.name}</h3>
          <br />
          <p className='Neon'><strong>-Fecha:</strong> {event.date}</p>
          <p className='Neon'><strong>-Ubicación:</strong> {event.location}</p>
          <p className='Neon'><strong>-Descripción:</strong> {event.description}</p>
          <br />
        </div>
      ))}
    </div>
  );
}

export default EventList;
