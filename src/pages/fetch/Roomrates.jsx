import React, { useState } from 'react';

function RoomRatesForm() {
  const [minNights, setMinNights] = useState('');
  const [maxNights, setMaxNights] = useState('');
  const [priceMonThu, setPriceMonThu] = useState('');
  const [priceFriSun, setPriceFriSun] = useState('');
  const [descMonth, setDescMonth] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      minNights: parseInt(minNights),
      maxNights: parseInt(maxNights),
      priceMonThu: parseFloat(priceMonThu),
      priceFriSun: parseFloat(priceFriSun),
      DescMonth: descMonth
    };

    try {
      const response = await fetch('https://voyagelbackend.onrender.com/roomRates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al enviar los datos');
      }

      console.log('Tarifas de habitación insertadas correctamente');
      // Aquí puedes manejar cualquier lógica adicional después de enviar los datos correctamente

    } catch (error) {
      console.error('Error al insertar las tarifas de habitación:', error);
      // Aquí puedes manejar el error de alguna manera, como mostrando un mensaje al usuario
    }
  };

  return (
    <div className='roomrates'>

    
    <form onSubmit={handleSubmit}>
      <h1>Room Rates</h1>
      <label>
        Mínimo de noches:
        <input type="number" value={minNights} onChange={(e) => setMinNights(e.target.value)} />
      </label>
      <br />
      <label>
        Máximo de noches:
        <input type="number" value={maxNights} onChange={(e) => setMaxNights(e.target.value)} />
      </label>
      <br />
      <label>
        Precio de lunes a jueves:
        <input type="number" value={priceMonThu} onChange={(e) => setPriceMonThu(e.target.value)} />
      </label>
      <br />
      <label>
        Precio de viernes a domingo:
        <input type="number" value={priceFriSun} onChange={(e) => setPriceFriSun(e.target.value)} />
      </label>
      <br />
      <label>
        Descuento del mes:
        <input type="text" value={descMonth} onChange={(e) => setDescMonth(e.target.value)} />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
    </div>
  );
}

export default RoomRatesForm;
