import React, { useState } from 'react';
import './Chat.css'; // Estilo CSS para el botón flotante
import ChatImage from "../imagenes/chat.png"

const Chat = () => {
  const [showChat, setShowChat] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showSubOptions, setShowSubOptions] = useState(false);

  const toggleChat = () => {
    setShowChat(!showChat);
    setSelectedOption(null); // Reiniciar la opción seleccionada al cerrar el chat
    setShowSubOptions(false); // Ocultar las sub-opciones al cerrar el chat
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowSubOptions(true);
  };

  const goBackToMainOptions = () => {
    setShowSubOptions(false);
  };

  return (
    <div className="chat-button-container">
      {showChat ? (
        <div className="chat-window">
          {showSubOptions ? (
            // Mostrar las sub-opciones correspondientes a la opción seleccionada
            <div>
              {selectedOption === 1 && (
                <>
                  <h6>Formas de pago:</h6>
                  <br />
                  <p onClick={() => handleOptionSelect(6)}>Credit cards</p>
                  <p onClick={() => handleOptionSelect(6)}>Paypal</p>
                  <p onClick={() => handleOptionSelect(6)}>Cash only</p>
                  <br />
                  <p onClick={goBackToMainOptions}>Volver al menú principal</p>
                </>
              )}
              {selectedOption === 2 && (
                <>
                  <h6>Devoluciones:</h6>
                  <br />
                  <p onClick={() => handleOptionSelect(6)}>Sub-Opción 1</p>
                  <p onClick={() => handleOptionSelect(6)}>Sub-Opción 2</p>
                  <br />
                  <p onClick={goBackToMainOptions}>Volver al menú principal</p>
                </>
              )}
              {selectedOption === 3 && (
                <>
                  <h6>Trips:</h6>
                  <br />
                  <p onClick={() => handleOptionSelect(6)}> Sub-Opción 1</p>
                  <p onClick={() => handleOptionSelect(6)}>Sub-Opción 2</p>
                  <br />
                  <p onClick={goBackToMainOptions}>Volver al menú principal</p>
                </>
              )}
              {selectedOption === 4 && (
                <>
                  <h6>Hotels:</h6>
                  <br />
                  <p onClick={() => handleOptionSelect(6)}>Sub-Opción 1</p>
                  <p onClick={() => handleOptionSelect(6)}>Sub-Opción 2</p>
                  <br />
                  <p onClick={goBackToMainOptions}>Volver al menú principal</p>
                </>
              )}
              {selectedOption === 5 && (
                <>
                  <h6>Events:</h6>
                  <br />
                  <p onClick={() => handleOptionSelect(6)}>Sub-Opción 1</p>
                  <p onClick={() => handleOptionSelect(6)}>Sub-Opción 2</p>
                  <br />
                  <p onClick={goBackToMainOptions}>Volver al menú principal</p>
                </>
              )}
              {selectedOption === 6 && (
                <>
                  
                  <br />
                  <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis iusto architecto blanditiis omnis hic ipsum ipsa unde. Repudiandae voluptas cum facilis! Odio ratione, mollitia quis quos nobis quam exercitationem nam!</h6>
                  <br />
                  <p onClick={goBackToMainOptions}>Volver al menú principal</p>
                  
                  <button className='contacto'>Contact</button>
                </>
              )}
            </div>
          ) : (
            // Mostrar las opciones iniciales
            <>
              <h6>¡Hola! ¿En qué puedo ayudarte?</h6>
              <br />
              <p onClick={() => handleOptionSelect(1)}>1- Formas de pago</p>
              <p onClick={() => handleOptionSelect(2)}>2- Devoluciones</p>
              <p onClick={() => handleOptionSelect(3)}>3- Viajes</p>
              <p onClick={() => handleOptionSelect(4)}>4- Hoteles</p>
              <p onClick={() => handleOptionSelect(5)}>5- Eventos</p>
            </>
          )}
          <br />
          
        </div>
      ) : null}
      <button className="chat-button" onClick={toggleChat}>
        <img src={ChatImage} alt="" className='img-contacto'/>
      </button>
    </div>
  );
};

export default Chat;
