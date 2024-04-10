import React, { useState } from 'react';

function OwnerForm() {
  const [titleCar, setTitleCar] = useState('');
  const [stars, setStars] = useState('');
  const [reviews, setReviews] = useState('');
  const [location, setLocation] = useState('');
  const [propiet, setPropiet] = useState('');
  const [seats, setSeats] = useState('');
  const [claseAuto, setClaseAuto] = useState('');
  const [baul, setBaul] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      TitleCar: titleCar,
      stars: stars,
      reviews: reviews,
      location: location,
      Propiet: propiet,
      Seats: seats,
      claseAuto: claseAuto,
      Baul: baul
    };

    try {
      const response = await fetch('https://voyagelbackend.onrender.com/owner', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al enviar la información del propietario del auto');
      }

      console.log('Información del propietario del auto insertada correctamente');
      // Aquí puedes manejar cualquier lógica adicional después de enviar los datos correctamente

    } catch (error) {
      console.error('Error al enviar la información del propietario del auto:', error);
      // Aquí puedes manejar el error de alguna manera, como mostrando un mensaje al usuario
    }
  };

  return (
    <div className='owner'>
    <form onSubmit={handleSubmit}>
      <h1>Infomacion Dueño</h1>
      <label>
        Título del auto:
        <input type="text" value={titleCar} onChange={(e) => setTitleCar(e.target.value)} />
      </label>
      <br />
      <label>
        Estrellas:
        <input type="number" value={stars} onChange={(e) => setStars(e.target.value)} />
      </label>
      <br />
      <label>
        Reseñas:
        <input type="number" value={reviews} onChange={(e) => setReviews(e.target.value)} />
      </label>
      <br />
      <label>
        Ubicación:
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </label>
      <br />
      <label>
        Propietario:
        <input type="text" value={propiet} onChange={(e) => setPropiet(e.target.value)} />
      </label>
      <br />
      <label>
        Asientos:
        <input type="number" value={seats} onChange={(e) => setSeats(e.target.value)} />
      </label>
      <br />
      <label>
        Clase de auto:
        <input type="text" value={claseAuto} onChange={(e) => setClaseAuto(e.target.value)} />
      </label>
      <br />
      <label>
        Tamaño del baúl:
        <input type="text" value={baul} onChange={(e) => setBaul(e.target.value)} />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
    </div>
  );
}

export default OwnerForm;
