import React, { useState } from 'react';

function PriceHotelForm() {
  const [priceDay, setPriceDay] = useState('');
  const [stars, setStars] = useState('');
  const [reviews, setReviews] = useState('');
  const [cantNights, setCantNights] = useState('');
  const [serviceCharge, setServiceCharge] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      priceDay: parseFloat(priceDay),
      stars: parseInt(stars),
      reviews: parseInt(reviews),
      cantNights: parseInt(cantNights),
      serviceCharge: parseFloat(serviceCharge)
    };

    try {
      const response = await fetch('https://voyagelbackend.onrender.com/PriceHotel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al enviar los datos');
      }

      console.log('Datos insertados correctamente');
      // Aquí puedes manejar cualquier lógica adicional después de enviar los datos correctamente

    } catch (error) {
      console.error('Error al insertar los datos:', error);
      // Aquí puedes manejar el error de alguna manera, como mostrando un mensaje al usuario
    }
  };

  return (
    <div className='preciohotel'>
    <form onSubmit={handleSubmit}>
      <h1>Informacion de Hotel</h1>
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
        Noches:
        <input type="number" value={cantNights} onChange={(e) => setCantNights(e.target.value)} />
      </label>
      <br />
      <label>
        Cargo de servicio:
        <input type="number" value={serviceCharge} onChange={(e) => setServiceCharge(e.target.value)} />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
    </div>
  );
}

export default PriceHotelForm;
