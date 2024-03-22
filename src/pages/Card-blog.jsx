import React, { useState, useEffect } from 'react';
import "./Card-blog.css";




function CardBlog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch('https://voyagelbackend.onrender.com/blog');

        if (!response.ok) {
          throw new Error('Error al obtener los blogs');
        }

        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error al obtener los blogs:', error);
        // Aquí puedes manejar el error de alguna manera, como mostrando un mensaje al usuario
      }
    }

    fetchBlogs();
  }, []);

  return (
    <div>
      <h1>Listado de Blogs</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <h2>{blog.titulo}</h2>
            <p>{blog.descripcion}</p>
            <p>{blog.Subtitulo}</p>
            
             <img src={blog.img} alt={blog.titulo} /> 
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CardBlog;
