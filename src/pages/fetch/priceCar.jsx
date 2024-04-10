import React, { useState } from 'react';

function PriceCarForm() {
  const [priceDay, setPriceDay] = useState('');
  const [stars, setStars] = useState('');
  const [reviews, setReviews] = useState('');
  const [cantDays, setCantDays] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      pricDay: parseFloat(priceDay),
      stars: parseInt(stars),
      reviews: parseInt(reviews),
      cantDays: parseInt(cantDays)
    };

    try {
      const response = await fetch('https://voyagelbackend.onrender.com/priceCar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al enviar los datos');
      }

      console.log('Información de precios de coches insertada correctamente');
      // Aquí puedes manejar cualquier lógica adicional después de enviar los datos correctamente

    } catch (error) {
      console.error('Error al insertar la información de precios de coches:', error);
      // Aquí puedes manejar el error de alguna manera, como mostrando un mensaje al usuario
    }
  };

  return (
    <div className='preciocar'>
    <form onSubmit={handleSubmit}>
      <h1>Precio y calificacion auto</h1>
      <label>
        Precio por día:
        <input type="number" value={priceDay} onChange={(e) => setPriceDay(e.target.value)} />
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
        Cantidad de días:
        <input type="number" value={cantDays} onChange={(e) => setCantDays(e.target.value)} />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
    </div>
  );
}

export default PriceCarForm;
