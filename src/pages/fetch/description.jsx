import React, { useState } from 'react';

function DescriptionForm() {
  const [carDescrip, setCarDescrip] = useState('');
  const [carInfo, setCarInfo] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      carDescrip: carDescrip,
      carInfo: carInfo
    };

    try {
      const response = await fetch('https://voyagelbackend.onrender.com/Description', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al enviar la información a la tabla Description');
      }

      console.log('Información insertada correctamente en la tabla Description');
      // Aquí puedes manejar cualquier lógica adicional después de enviar los datos correctamente

    } catch (error) {
      console.error('Error al enviar la información a la tabla Description:', error);
      // Aquí puedes manejar el error de alguna manera, como mostrando un mensaje al usuario
    }
  };

  return (
    <div className='descripcion'>
    <form onSubmit={handleSubmit}>
      <h1>Descripcion del auto</h1>
      <label>
        
        <textarea value={carDescrip} onChange={(e) => setCarDescrip(e.target.value)} placeholder='Introducir Descripción del auto:'/>
      </label>
      <br />
      <label>
        
        <textarea value={carInfo} onChange={(e) => setCarInfo(e.target.value)}placeholder='Introducir Información del auto:'/>
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
    </div>
  );
}

export default DescriptionForm;
