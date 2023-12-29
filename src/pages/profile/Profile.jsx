import React, { useState } from 'react';
import './profile.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import userImg from '../../assets/images/user.png';

const InformacionGeneral = ({ usuario, onEditarInformacionGeneral }) => {
  const [editando, setEditando] = useState(false);
  const [nuevaInformacion, setNuevaInformacion] = useState({ ...usuario.general });

  const handleEditarClick = () => {
    setEditando(true);
  };

  const handleGuardarClick = () => {
    onEditarInformacionGeneral(nuevaInformacion);
    setEditando(false);
  };

  const handleCancelarClick = () => {
    setNuevaInformacion({ ...usuario.general });
    setEditando(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevaInformacion((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleImageClick = () => {
    document.getElementById('fileInput').click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setNuevaInformacion((prevInfo) => ({ ...prevInfo, imagen: reader.result }));
      };

      reader.readAsDataURL(file);
    } else {
      alert('Por favor, seleccione un archivo de imagen válido (jpg, jpeg, png).');
    }
  };

  return (
    <section className='profileInfo'>
      {editando ? (
        <>
          <div className='editProfile'>
            <label>
              Nombre:
              <input type="text" name="nombre" value={nuevaInformacion.nombre} onChange={handleChange} />
            </label>
            <label>
              Apellido:
              <input type="text" name="apellido" value={nuevaInformacion.apellido} onChange={handleChange} />
            </label>
            <label>
              Teléfono:
              <input type="text" name="telefono" value={nuevaInformacion.telefono} onChange={handleChange} />
            </label>
            <label>
              Correo Electrónico:
              <input type="text" name="mail" value={nuevaInformacion.mail} onChange={handleChange} />
            </label>
          </div>
          <div className='actionsGnrl'>
          <button className='btn btnProfile' onClick={handleGuardarClick}>Guardar</button>
          <button className='btn btnProfile' onClick={handleCancelarClick}>Cancelar</button>
          </div>
        </>
      ) : (
        <>
          <div className="contentProfile">
            {usuario.general.imagen ? (
              <img className='profileImg' src={usuario.general.imagen} alt={usuario.general.nombre} onClick={handleImageClick} />
            ) : (
              <img className='profileImg' src={userImg} alt="User" onClick={handleImageClick} />
            )}
            <input
              type="file"
              id="fileInput"
              style={{ display: 'none' }}
              accept="image/jpeg, image/png"
              onChange={handleFileChange}
            />
            <div className="gridInfo">
              <div className="inputDiv">
                <label htmlFor="location">Nombre</label>
                <input type="text" placeholder='Jhon' value={usuario.general.nombre} disabled={!editando} />
              </div>
              <div className="inputDiv">
                <label htmlFor="location">Apellido</label>
                <input type="text" placeholder='Doe' value={usuario.general.apellido} disabled={!editando} />
              </div>
              <div className="inputDiv">
                <label htmlFor="location">Teléfono</label>
                <input type="text" placeholder='444 555 6666' value={usuario.general.telefono} disabled={!editando} />
              </div>
              <div className="inputDiv">
                <label htmlFor="location">Correo Electrónico</label>
                <input type="text" className="input" placeholder='user@mail.com' value={usuario.general.mail} disabled={!editando} />
              </div>
            </div>
          </div>
          <button className='btn btnProfile' onClick={handleEditarClick} disabled={editando}>Editar</button>
        </>
      )}
    </section>
  );
};

const Viajes = ({ usuario }) => (
  <section className='profileInfo'>
    <h2>Viajes</h2>
    <div>
      <h3>Realizados</h3>
      <ul>
        {usuario.viajes.realizados.map((viaje, index) => (
          <li key={index}>{viaje}</li>
        ))}
      </ul>
    </div>
    <div>
      <h3>Pendientes</h3>
      <ul>
        {usuario.viajes.pendientes.map((viaje, index) => (
          <li key={index}>{viaje}</li>
        ))}
      </ul>
    </div>
  </section>
);

const Vehiculos = ({ usuario, onEditarVehiculo, onEliminarVehiculo, onAgregarVehiculo }) => {
  const [editandoVehiculo, setEditandoVehiculo] = useState(null);
  const [nuevoVehiculo, setNuevoVehiculo] = useState({
    marca: '',
    modelo: '',
    año: '',
    color: '',
    matricula: '',
    asientos: 0
  });

  const handleEditarVehiculo = (id) => {
    setEditandoVehiculo(id);
    const vehiculoEditando = usuario.vehiculos.find((vehiculo) => vehiculo.id === id);
    setNuevoVehiculo({ ...vehiculoEditando });
  };

  const handleGuardarVehiculo = () => {
    onEditarVehiculo(editandoVehiculo, nuevoVehiculo);
    setEditandoVehiculo(null);
    setNuevoVehiculo({
      marca: '',
      modelo: '',
      año: '',
      color: '',
      matricula: '',
      asientos: 0
    });
  };

  const handleCancelarEdicion = () => {
    setEditandoVehiculo(null);
    setNuevoVehiculo({
      marca: '',
      modelo: '',
      año: '',
      color: '',
      matricula: '',
      asientos: 0
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoVehiculo((prevVehiculo) => ({ ...prevVehiculo, [name]: value }));
  };

  const handleAgregarNuevoVehiculo = () => {
    onAgregarVehiculo({
      marca: nuevoVehiculo.marca,
      modelo: nuevoVehiculo.modelo,
      año: nuevoVehiculo.año,
      color: nuevoVehiculo.color,
      matricula: nuevoVehiculo.matricula,
      asientos: nuevoVehiculo.asientos
    });
    setNuevoVehiculo({
      marca: '',
      modelo: '',
      año: '',
      color: '',
      matricula: '',
      asientos: 0
    });
  };

  return (
    <section className='profileInfo'>
      <h2>Vehículos</h2>
      <ul>
        {usuario.vehiculos.map((vehiculo) => (
          <li key={vehiculo.id}>
            {editandoVehiculo === vehiculo.id ? (
              <>
                <label>
                  Marca:
                  <input type="text" name="marca" value={nuevoVehiculo.marca} onChange={handleChange} />
                </label>
                <label>
                  Modelo:
                  <input type="text" name="modelo" value={nuevoVehiculo.modelo} onChange={handleChange} />
                </label>
                <label>
                  Año:
                  <input type="text" name="año" value={nuevoVehiculo.año} onChange={handleChange} />
                </label>
                <label>
                  Color:
                  <input type="text" name="color" value={nuevoVehiculo.color} onChange={handleChange} />
                </label>
                <label>
                  Matrícula:
                  <input type="text" name="matricula" value={nuevoVehiculo.matricula} onChange={handleChange} />
                </label>
                <label>
                  Asientos:
                  <input type="number" name="asientos" value={nuevoVehiculo.asientos} onChange={handleChange} />
                </label>
                <button className='btn btnProfile' onClick={handleGuardarVehiculo}>Guardar</button>
                <button className='btn btnProfile' onClick={handleCancelarEdicion}>Cancelar</button>
              </>
            ) : (
              <>
                <p>{`${vehiculo.marca} ${vehiculo.modelo} (${vehiculo.año})`}</p>
                <p>{`Color: ${vehiculo.color}, Matrícula: ${vehiculo.matricula}, Asientos: ${vehiculo.asientos}`}</p>
                <button onClick={() => handleEditarVehiculo(vehiculo.id)}>Editar</button>
                <button onClick={() => onEliminarVehiculo(vehiculo.id)}>Eliminar</button>
              </>
            )}
          </li>
        ))}
      </ul>
      {editandoVehiculo === null && (
        <>
          <button onClick={handleAgregarNuevoVehiculo}>Agregar Nuevo Vehículo</button>
        </>
      )}
    </section>
  );
};

const Profile = () => {
  const [seccionActiva, setSeccionActiva] = useState('general');

  const handleMostrarSeccion = (seccion) => {
    setSeccionActiva(seccion);
  };

  const handleEditarInformacionGeneral = (nuevaInformacion) => {
    // Lógica para guardar la nueva información en el estado o enviarla al servidor
    console.log('Nueva información general:', nuevaInformacion);
  };

  const handleEditarVehiculo = (id, nuevoVehiculo) => {
    // Lógica para guardar el vehículo editado en el estado o enviarlo al servidor
    console.log(`Editar vehículo con ID ${id}:`, nuevoVehiculo);
  };

  const handleEliminarVehiculo = (id) => {
    // Lógica para eliminar el vehículo con el ID proporcionado
    console.log(`Eliminar vehículo con ID ${id}`);
  };

  const handleAgregarVehiculo = (nuevoVehiculo) => {
    // Lógica para agregar un nuevo vehículo al estado o enviarlo al servidor
    console.log('Agregar nuevo vehículo:', nuevoVehiculo);
  };

  const usuario = {
    general: {
      nombre: 'Juan',
      apellido: 'Pérez',
      telefono: '123-456-7890',
      mail: 'juan@example.com',
      imagen: ''
    },
    viajes: {
      realizados: ['Viaje 1', 'Viaje 2'],
      pendientes: ['Próximo Viaje 1', 'Próximo Viaje 2']
    },
    vehiculos: [
      { id: 1, marca: 'Toyota', modelo: 'Corolla', año: 2020, color: 'Rojo', matricula: 'ABC123', asientos: 5 },
      { id: 2, marca: 'Honda', modelo: 'Civic', año: 2019, color: 'Azul', matricula: 'XYZ789', asientos: 4 }
    ]
  };

  return (
    <>
      <Navbar />
      <div className='secContainer container'>
        <div className="secProfile">
          <div className='actionsBtns'>
            <button className='btn btnProfile' onClick={() => handleMostrarSeccion('general')}>Información General</button>
            <button className='btn btnProfile' onClick={() => handleMostrarSeccion('viajes')}>Viajes</button>
            <button className='btn btnProfile' onClick={() => handleMostrarSeccion('vehiculos')}>Vehículos</button>
          </div>
          {seccionActiva === 'general' && (
            <InformacionGeneral
              usuario={usuario}
              onEditarInformacionGeneral={handleEditarInformacionGeneral}
            />
          )}
          {seccionActiva === 'viajes' && <Viajes usuario={usuario} />}
          {seccionActiva === 'vehiculos' && (
            <Vehiculos
              usuario={usuario}
              onEditarVehiculo={handleEditarVehiculo}
              onEliminarVehiculo={handleEliminarVehiculo}
              onAgregarVehiculo={handleAgregarVehiculo}
            />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
