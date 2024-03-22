import React, { useState } from 'react';

function BlogForm() {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [subtitulo, setSubtitulo] = useState('');
  const [imagen, setImagen] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!imagen) {
      alert('Por favor, selecciona una imagen.');
      return;
    }

    const formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('descripcion', descripcion);
    formData.append('Subtitulo', subtitulo);
    formData.append('img', imagen);

    try {
      const response = await fetch('https://voyagelbackend.onrender.com/blog', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Error al enviar los datos');
      }

      console.log('Blog insertado correctamente');
      // Aquí puedes manejar cualquier lógica adicional después de enviar los datos correctamente

    } catch (error) {
      console.error('Error al insertar el blog:', error);
      // Aquí puedes manejar el error de alguna manera, como mostrando un mensaje al usuario
    }
  };

  return (
    <>
    
    <div className='formblog'>
    <div>
   
    </div>
    <form  className='titulo-blog'  onSubmit={handleSubmit}>
    <br />
      <br />
      <br />
      <h1> Articulos de Blog</h1> 
      <label>
        Título:
        <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
      </label>
      <br />
      <label>
        
        <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} placeholder='Introducir Descripcion de blog'/>
      </label>
      <br />
      <label className='subtitulo'>
        Subtítulo:
        <input type="text" value={subtitulo} onChange={(e) => setSubtitulo(e.target.value)} />
      </label>
      <br />
      <label>
        Imagen:
        <input type="file" onChange={(e) => setImagen(e.target.files[0])} />
      </label>
      <br />
      <button type="submit">Publicar</button>
    </form>
    </div>
    </>
  );
}

export default BlogForm;
