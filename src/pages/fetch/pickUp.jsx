import React, { useState } from 'react';

function PickupForm() {
  const [datePick, setDatePick] = useState('');
  const [dateDrop, setDateDrop] = useState('');
  const [locationPick, setLocationPick] = useState('');
  const [locationDrop, setLocationDrop] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      DatePick: datePick,
      DateDrop: dateDrop,
      LocationPick: locationPick,
      LocationDrop: locationDrop
    };

    try {
      const response = await fetch('https://voyagelbackend.onrender.com/pickup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al enviar los datos de recogida de automóviles');
      }

      console.log('Información de recogida de automóviles enviada correctamente');
      // Aquí puedes manejar cualquier lógica adicional después de enviar los datos correctamente

    } catch (error) {
      console.error('Error al enviar los datos de recogida de automóviles:', error);
      // Aquí puedes manejar el error de alguna manera, como mostrando un mensaje al usuario
    }
  };

  return (
    <div className='pickup'>
    <form onSubmit={handleSubmit}>
      <h1>Pick up Auto</h1>
      <label>
        Fecha de recogida:
        <input type="date" value={datePick} onChange={(e) => setDatePick(e.target.value)} />
      </label>
      <br />
      <label>
        Fecha de entrega:
        <input type="date" value={dateDrop} onChange={(e) => setDateDrop(e.target.value)} />
      </label>
      <br />
      <label>
        Ubicación de recogida:
        <input type="text" value={locationPick} onChange={(e) => setLocationPick(e.target.value)} />
      </label>
      <br />
      <label>
        Ubicación de entrega:
        <input type="text" value={locationDrop} onChange={(e) => setLocationDrop(e.target.value)} />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
    </div>
  );
}

export default PickupForm;
