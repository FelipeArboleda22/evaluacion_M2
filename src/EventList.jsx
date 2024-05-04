import React from 'react';

function EventList({ events }) {
  return (
    <div>
      {events.map((event, index) => (
        <div key={index}>
          <h3>{event.name}</h3>
          <p><strong>Fecha:</strong> {event.date}</p>
          <p><strong>Ubicación:</strong> {event.location}</p>
          <p><strong>Descripción:</strong> {event.description}</p>
        </div>
      ))}
    </div>
  );
}

export default EventList;
