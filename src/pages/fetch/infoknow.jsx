import React, { useState } from 'react';

function InfoKnowForm() {
  const [infoCancelPolicy, setInfoCancelPolicy] = useState('');
  const [infoSpecial, setInfoSpecial] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      InfoCancelPolicy: infoCancelPolicy,
      InfoSpecial: infoSpecial
    };

    try {
      const response = await fetch('https://voyagelbackend.onrender.com/infoKnow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al enviar la información a la tabla infoKnow');
      }

      console.log('Información insertada correctamente en la tabla infoKnow');
      // Aquí puedes manejar cualquier lógica adicional después de enviar los datos correctamente

    } catch (error) {
      console.error('Error al enviar la información a la tabla infoKnow:', error);
      // Aquí puedes manejar el error de alguna manera, como mostrando un mensaje al usuario
    }
  };

  return (
    <div className='infoknow'>
    <form onSubmit={handleSubmit}>
      <h1>Politicas Rent a Car</h1>
      <label>
        
        <textarea value={infoCancelPolicy} onChange={(e) => setInfoCancelPolicy(e.target.value)} placeholder='Introducir Politica de cancelacion' />
      </label>
      <br />
      <label>
        
        <textarea value={infoSpecial} onChange={(e) => setInfoSpecial(e.target.value)} placeholder='Introducir informacion especial o adicional'/>
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
    </div>
  );
}

export default InfoKnowForm;
