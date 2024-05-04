import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function EventForm({ addEvent }) {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    location: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent(formData);
    setFormData({ name: '', date: '', location: '', description: '' });
  };

  return (
    <div className="container mt-5">
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="eventName" className="form-label">Nombre del Evento:</label>
          <input
            type="text"
            className="form-control"
            id="eventName"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="eventDate" className="form-label">Fecha:</label>
          <input
            type="date"
            className="form-control"
            id="eventDate"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="eventLocation" className="form-label">Ubicación:</label>
          <input
            type="text"
            className="form-control"
            id="eventLocation"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="eventDescription" className="form-label">Descripción:</label>
          <textarea
            className="form-control"
            id="eventDescription"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Registrar Evento</button>
      </form>
    </div>
  );
}

export default EventForm;
