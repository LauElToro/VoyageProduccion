import React, { useState } from 'react';

function ParametersForm() {
  const [velocidad, setVelocidad] = useState('');
  const [motor, setMotor] = useState('');
  const [audio, setAudio] = useState('');
  const [lights, setLights] = useState('');
  const [prop1, setProp1] = useState('');
  const [prop2, setProp2] = useState('');
  const [prop3, setProp3] = useState('');
  const [prop4, setProp4] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      velocidad: velocidad,
      Motor: motor,
      Audio: audio,
      Lights: lights,
      Prop1: prop1,
      Prop2: prop2,
      Prop3: prop3,
      Prop4: prop4
    };

    try {
      const response = await fetch('https://voyagelbackend.onrender.com/parameters', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al enviar los parámetros de automóviles');
      }

      console.log('Parámetros de automóviles insertados correctamente');
      // Aquí puedes manejar cualquier lógica adicional después de enviar los datos correctamente

    } catch (error) {
      console.error('Error al enviar los parámetros de automóviles:', error);
      // Aquí puedes manejar el error de alguna manera, como mostrando un mensaje al usuario
    }
  };

  return (
    <div className='parameters'>
    <form onSubmit={handleSubmit}>
      <h1>Parametros Auto</h1>
      <label>
        Velocidad:
        <input type="text" value={velocidad} onChange={(e) => setVelocidad(e.target.value)} />
      </label>
      <br />
      <label>
        Motor:
        <input type="text" value={motor} onChange={(e) => setMotor(e.target.value)} />
      </label>
      <br />
      <label>
        Audio:
        <input type="text" value={audio} onChange={(e) => setAudio(e.target.value)} />
      </label>
      <br />
      <label>
        Luces:
        <input type="text" value={lights} onChange={(e) => setLights(e.target.value)} />
      </label>
      <br />
      <label>
        Propiedad 1:
        <input type="text" value={prop1} onChange={(e) => setProp1(e.target.value)} />
      </label>
      <br />
      <label>
        Propiedad 2:
        <input type="text" value={prop2} onChange={(e) => setProp2(e.target.value)} />
      </label>
      <br />
      <label>
        Propiedad 3:
        <input type="text" value={prop3} onChange={(e) => setProp3(e.target.value)} />
      </label>
      <br />
      <label>
        Propiedad 4:
        <input type="text" value={prop4} onChange={(e) => setProp4(e.target.value)} />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
    </div>
  );
}

export default ParametersForm;
