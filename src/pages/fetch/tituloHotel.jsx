import React, { useState } from 'react';

function TituloHotelForm() {
  const [title, setTitle] = useState('');
  const [stars, setStars] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [reviews, setReviews] = useState('');
  const [nombreProp, setNombreProp] = useState('');
  const [cantPerson, setCantPerson] = useState('');
  const [cantBeds, setCantBeds] = useState('');
  const [cantBaths, setCantBaths] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      Title: title,
      stars: parseInt(stars),
      ubicacion: ubicacion,
      reviews: parseInt(reviews),
      NombreProp: nombreProp,
      cantPerson: parseInt(cantPerson),
      cantBeds: parseInt(cantBeds),
      cantBaths: parseInt(cantBaths)
    };

    try {
      const response = await fetch('https://voyagelbackend.onrender.com/tituloHotel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al enviar los datos');
      }

      console.log('Información del hotel insertada correctamente');
      // Aquí puedes manejar cualquier lógica adicional después de enviar los datos correctamente

    } catch (error) {
      console.error('Error al insertar la información del hotel:', error);
      // Aquí puedes manejar el error de alguna manera, como mostrando un mensaje al usuario
    }
  };

  return (
    <div className='titulohotel'>
    <form onSubmit={handleSubmit}>
      <h1>Titulo Hotel y Descripcion</h1>
      <label>
        Título del hotel:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <br />
      <label>
        Estrellas:
        <input type="number" value={stars} onChange={(e) => setStars(e.target.value)} />
      </label>
      <br />
      <label>
        Ubicación:
        <input type="text" value={ubicacion} onChange={(e) => setUbicacion(e.target.value)} />
      </label>
      <br />
      <label>
        Reseñas:
        <input type="number" value={reviews} onChange={(e) => setReviews(e.target.value)} />
      </label>
      <br />
      <label>
        Nombre del propietario:
        <input type="text" value={nombreProp} onChange={(e) => setNombreProp(e.target.value)} />
      </label>
      <br />
      <label>
        Cantidad de personas:
        <input type="number" value={cantPerson} onChange={(e) => setCantPerson(e.target.value)} />
      </label>
      <br />
      <label>
        Cantidad de camas:
        <input type="number" value={cantBeds} onChange={(e) => setCantBeds(e.target.value)} />
      </label>
      <br />
      <label>
        Cantidad de baños:
        <input type="number" value={cantBaths} onChange={(e) => setCantBaths(e.target.value)} />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
    </div>
  );
}

export default TituloHotelForm;
