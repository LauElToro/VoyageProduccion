import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState('');
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [editableValues, setEditableValues] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://voyagelbackend.onrender.com/${selectedEndpoint}`);
        const jsonData = await response.json();
        setData(jsonData);
        setFilteredData(jsonData);
      } catch (error) {
        console.error('Error al obtener datos del servidor:', error);
      }
    };

    if (selectedEndpoint) {
      fetchData();
    }
  }, [selectedEndpoint]);

 const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filteredResults = data.filter(item =>
      item.id.toString().toLowerCase().includes(searchTerm)
    );
    setFilteredData(filteredResults);
  };

  const handleInputChange = (event, itemId, key) => {
    const value = event.target.value;
    setEditableValues(prevState => ({
      ...prevState,
      [itemId]: {
        ...prevState[itemId],
        [key]: value
      }
    }));
  };
// Frontend: searchDashboard.jsx

const handleUpdateItem = async (itemId) => {
  const updatedItem = editableValues[itemId];
  try {
    const response = await fetch(`https://voyagelbackend.onrender.com/pricehotel/${itemId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedItem)
    });

    if (!response.ok) {
      throw new Error('Error al actualizar el elemento');
    }

    console.log('Elemento actualizado correctamente');
  } catch (error) {
    console.error('Error al actualizar el elemento:', error.message);
  }
};

  const renderContent = (item) => {
    switch (selectedEndpoint) {
      case 'infoKnow':
        return (
          <>
            <input
              type="text"
              value={editableValues[item.id]?.InfoCancelPolicy || item.InfoCancelPolicy}
              onChange={(e) => handleInputChange(e, item.id, 'InfoCancelPolicy')}
            />
            <input
              type="text"
              value={editableValues[item.id]?.InfoSpecial || item.InfoSpecial}
              onChange={(e) => handleInputChange(e, item.id, 'InfoSpecial')}
            />
          </>
        );
      case 'Description':
        return (
          <>
            <input
              type="text"
              value={editableValues[item.id]?.carDescrip || item.carDescrip}
              onChange={(e) => handleInputChange(e, item.id, 'carDescrip')}
            />
            <input
              type="text"
              value={editableValues[item.id]?.carInfo || item.carInfo}
              onChange={(e) => handleInputChange(e, item.id, 'carInfo')}
            />
          </>
        );
      case 'carousel':
        return (
          <>
            <input
              type="text"
              value={editableValues[item.id]?.ubicacion || item.ubicacion}
              onChange={(e) => handleInputChange(e, item.id, 'ubicacion')}
            />
            <input
              type="text"
              value={editableValues[item.id]?.tituEvent || item.tituEvent}
              onChange={(e) => handleInputChange(e, item.id, 'tituEvent')}
            />
            <input
              type="text"
              value={editableValues[item.id]?.precio || item.precio}
              onChange={(e) => handleInputChange(e, item.id, 'precio')}
            />
            <input
              type="text"
              value={editableValues[item.id]?.stars || item.stars}
              onChange={(e) => handleInputChange(e, item.id, 'stars')}
            />
            <input
              type="text"
              value={editableValues[item.id]?.reviews || item.reviews}
              onChange={(e) => handleInputChange(e, item.id, 'reviews')}
            />
          </>
        );
      case 'owner':
        return (
          <>
            <input
              type="text"
              value={editableValues[item.id]?.TitleCar || item.TitleCar}
              onChange={(e) => handleInputChange(e, item.id, 'TitleCar')}
            />
            <input
              type="text"
              value={editableValues[item.id]?.stars || item.stars}
              onChange={(e) => handleInputChange(e, item.id, 'stars')}
            />
            <input
              type="text"
              value={editableValues[item.id]?.reviews || item.reviews}
              onChange={(e) => handleInputChange(e, item.id, 'reviews')}
            />
            <input
              type="text"
              value={editableValues[item.id]?.location || item.location}
              onChange={(e) => handleInputChange(e, item.id, 'location')}
            />
            <input
              type="text"
              value={editableValues[item.id]?.Propiet || item.Propiet}
              onChange={(e) => handleInputChange(e, item.id, 'Propiet')}
            />
            <input
              type="text"
              value={editableValues[item.id]?.Seats || item.Seats}
              onChange={(e) => handleInputChange(e, item.id, 'Seats')}
            />
            <input
              type="text"
              value={editableValues[item.id]?.claseAuto || item.claseAuto}
              onChange={(e) => handleInputChange(e, item.id, 'claseAuto')}
            />
            <input
              type="text"
              value={editableValues[item.id]?.Baul || item.Baul}
              onChange={(e) => handleInputChange(e, item.id, 'Baul')}
            />
          </>
        );
      case 'pricehotel':
        return (
          <>
            <input
              type="text"
              value={editableValues[item.id]?.priceDay || item.priceDay}
              onChange={(e) => handleInputChange(e, item.id, 'priceDay')}
            />
            <input
              type="text"
              value={editableValues[item.id]?.stars || item.stars}
              onChange={(e) => handleInputChange(e, item.id, 'stars')}
            />
            <input
              type="text"
              value={editableValues[item.id]?.reviews || item.reviews}
              onChange={(e) => handleInputChange(e, item.id, 'reviews')}
            />
            <input
              type="text"
              value={editableValues[item.id]?.cantNights || item.cantNights}
              onChange={(e) => handleInputChange(e, item.id, 'cantNights')}
            />
            <input
              type="text"
              value={editableValues[item.id]?.serviceCharge || item.serviceCharge}
              onChange={(e) => handleInputChange(e, item.id, 'serviceCharge')}
            />
            <input
              type="text"
              value={editableValues[item.id]?.Total || item.Total}
              onChange={(e) => handleInputChange(e, item.id, 'Total')}
            />
            <input
              type="text"
              value={editableValues[item.id]?.TotalFull || item.TotalFull}
              onChange={(e) => handleInputChange(e, item.id, 'TotalFull')}
            />
          </>
        );
      case 'pickup':
        return (
          <>
            <input
              type="text"
              value={editableValues[item.id]?.DatePick || item.DatePick}
              onChange={(e) => handleInputChange(e, item.id, 'DatePick')}
            />
            <input
              type="text"
              value={editableValues[item.id]?.DateDrop || item.DateDrop}
              onChange={(e) => handleInputChange(e, item.id, 'DateDrop')}
            />
            <input
              type="text"
              value={editableValues[item.id]?.LocationPick || item.LocationPick}
              onChange={(e) => handleInputChange(e, item.id, 'LocationPick')}
            />
            <input
              type="text"
              value={editableValues[item.id]?.LocationDrop || item.LocationDrop}
              onChange={(e) => handleInputChange(e, item.id, 'LocationDrop')}
            />
          </>
        );
        case 'parameters':
      return (
        <>
          <input
            type="text"
            value={editableValues[item.id]?.velocidad || item.velocidad}
            onChange={(e) => handleInputChange(e, item.id, 'velocidad')}
          />
          <input
            type="text"
            value={editableValues[item.id]?.Motor || item.Motor}
            onChange={(e) => handleInputChange(e, item.id, 'Motor')}
          />
          <input
            type="text"
            value={editableValues[item.id]?.Audio || item.Audio}
            onChange={(e) => handleInputChange(e, item.id, 'Audio')}
          />
          <input
            type="text"
            value={editableValues[item.id]?.Lights || item.Lights}
            onChange={(e) => handleInputChange(e, item.id, 'Lights')}
          />
          <input
            type="text"
            value={editableValues[item.id]?.Prop1 || item.Prop1}
            onChange={(e) => handleInputChange(e, item.id, 'Prop1')}
          />
          <input
            type="text"
            value={editableValues[item.id]?.Prop2 || item.Prop2}
            onChange={(e) => handleInputChange(e, item.id, 'Prop2')}
          />
          <input
            type="text"
            value={editableValues[item.id]?.Prop3 || item.Prop3}
            onChange={(e) => handleInputChange(e, item.id, 'Prop3')}
          />
          <input
            type="text"
            value={editableValues[item.id]?.Prop4 || item.Prop4}
            onChange={(e) => handleInputChange(e, item.id, 'Prop4')}
          />
        </>
      );
    case 'tituloHotel':
      return (
        <>
          <input
            type="text"
            value={editableValues[item.id]?.Title || item.Title}
            onChange={(e) => handleInputChange(e, item.id, 'Title')}
          />
          <input
            type="text"
            value={editableValues[item.id]?.stars || item.stars}
            onChange={(e) => handleInputChange(e, item.id, 'stars')}
          />
          <input
            type="text"
            value={editableValues[item.id]?.ubicacion || item.ubicacion}
            onChange={(e) => handleInputChange(e, item.id, 'ubicacion')}
          />
          <input
            type="text"
            value={editableValues[item.id]?.reviews || item.reviews}
            onChange={(e) => handleInputChange(e, item.id, 'reviews')}
          />
          <input
            type="text"
            value={editableValues[item.id]?.NombreProp || item.NombreProp}
            onChange={(e) => handleInputChange(e, item.id, 'NombreProp')}
          />
          <input
            type="text"
            value={editableValues[item.id]?.cantPerson || item.cantPerson}
            onChange={(e) => handleInputChange(e, item.id, 'cantPerson')}
          />
          <input
            type="text"
            value={editableValues[item.id]?.cantBeds || item.cantBeds}
            onChange={(e) => handleInputChange(e, item.id, 'cantBeds')}
          />
          <input
            type="text"
            value={editableValues[item.id]?.cantBaths || item.cantBaths}
            onChange={(e) => handleInputChange(e, item.id, 'cantBaths')}
          />
        </>
      );
    case 'priceCar':
      return (
        <>
          <input
            type="text"
            value={editableValues[item.id]?.pricDay || item.pricDay}
            onChange={(e) => handleInputChange(e, item.id, 'pricDay')}
          />
          <input
            type="text"
            value={editableValues[item.id]?.stars || item.stars}
            onChange={(e) => handleInputChange(e, item.id, 'stars')}
          />
          <input
            type="text"
            value={editableValues[item.id]?.reviews || item.reviews}
            onChange={(e) => handleInputChange(e, item.id, 'reviews')}
          />
          <input
            type="text"
            value={editableValues[item.id]?.cantDays || item.cantDays}
            onChange={(e) => handleInputChange(e, item.id, 'cantDays')}
          />
          <input
            type="text"
            value={editableValues[item.id]?.Total || item.Total}
            onChange={(e) => handleInputChange(e, item.id, 'Total')}
          />
        </>
      );
    case 'roomRates':
      return (
        <>
          <input
            type="text"
            value={editableValues[item.id]?.minNights || item.minNights}
            onChange={(e) => handleInputChange(e, item.id, 'minNights')}
          />
          <input
            type="text"
            value={editableValues[item.id]?.maxNights || item.maxNights}
            onChange={(e) => handleInputChange(e, item.id, 'maxNights')}
          />
          <input
            type="text"
            value={editableValues[item.id]?.priceMonThu || item.priceMonThu}
            onChange={(e) => handleInputChange(e, item.id, 'priceMonThu')}
          />
          <input
            type="text"
            value={editableValues[item.id]?.priceFriSun || item.priceFriSun}
            onChange={(e) => handleInputChange(e, item.id, 'priceFriSun')}
          />
          <input
            type="text"
            value={editableValues[item.id]?.DescMonth || item.DescMonth}
            onChange={(e) => handleInputChange(e, item.id, 'DescMonth')}
          />
        </>
      );
    case 'blog':
      return (
        <>
          <input
            type="text"
            value={editableValues[item.id]?.titulo || item.titulo}
            onChange={(e) => handleInputChange(e, item.id, 'titulo')}
          />
          <input
            type="text"
            value={editableValues[item.id]?.descripcion || item.descripcion}
            onChange={(e) => handleInputChange(e, item.id, 'descripcion')}
          />
          <input
            type="text"
            value={editableValues[item.id]?.Subtitulo || item.Subtitulo}
            onChange={(e) => handleInputChange(e, item.id, 'Subtitulo')}
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange(e, item.id)}
          />
        </>
      );
      
      default:
        return null;
    }
  };
  const endpointOptions = [
    { value: 'infoKnow', label: 'InfoKnow' },
    { value: 'Description', label: 'Descripción' },
    { value: 'carousel', label: 'Carrusel' },
    { value: 'owner', label: 'Propietario' },
    { value: 'pricehotel', label: 'Precio del hotel' },
    { value: 'pickup', label: 'Recogida de automóviles' },
    { value: 'parameters', label: 'Parámetros de automóviles' },
    { value: 'tituloHotel', label: 'Título del hotel' },
    { value: 'priceCar', label: 'Precio del coche' },
    { value: 'roomRates', label: 'roomRates' },
    { value: 'blog', label: 'blog' }
  ];
  
  return (
    <div className='d-flex align-items-center flex-column mt-3'>
      <select value={selectedEndpoint} onChange={(e) => setSelectedEndpoint(e.target.value)}>
        <option value="">Seleccione un servicio</option>
        {endpointOptions.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      
      <input
        type="text"
        placeholder="Buscar por ID..."
        value={searchTerm}
        onChange={handleSearch}
      />

      <div>
        {filteredData.map(item => (
          <div key={item.id}>
            {renderContent(item)}
            {/* Botón para actualizar */}
            {selectedEndpoint && (
              <button onClick={() => handleUpdateItem(item.id)}>Actualizar</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};


export default MyComponent;
