import React, { useState } from 'react';

function CarouselForm() {
  const [ubicacion, setUbicacion] = useState('');
  const [tituEvent, setTituEvent] = useState('');
  const [precio, setPrecio] = useState('');
  const [stars, setStars] = useState('');
  const [reviews, setReviews] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      ubicacion: ubicacion,
      tituEvent: tituEvent,
      precio: precio,
      stars: stars,
      reviews: reviews
    };

    try {
      const response = await fetch('https://voyagelbackend.onrender.com/carousel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al enviar la información al carrusel');
      }

      console.log('Información insertada correctamente en el carrusel');
      // Aquí puedes manejar cualquier lógica adicional después de enviar los datos correctamente

    } catch (error) {
      console.error('Error al enviar la información al carrusel:', error);
      // Aquí puedes manejar el error de alguna manera, como mostrando un mensaje al usuario
    }
  };

  return (
    <div className='carousel'>

    <form onSubmit={handleSubmit}>
      <h1>Evento</h1>
      <label>
        Ubicación:
        <input type="text" value={ubicacion} onChange={(e) => setUbicacion(e.target.value)} />
      </label>
      <br />
      <label>
        Título del Evento:
        <input type="text" value={tituEvent} onChange={(e) => setTituEvent(e.target.value)} />
      </label>
      <br />
      <label>
        Precio:
        <input type="text" value={precio} onChange={(e) => setPrecio(e.target.value)} />
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
      <button type="submit">Enviar</button>
    </form>
    </div>
  );
}

export default CarouselForm;
