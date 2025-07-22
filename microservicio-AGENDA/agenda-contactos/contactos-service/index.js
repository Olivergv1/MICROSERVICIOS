const express = require('express');
const cors = require('cors');
const manejadorDeErrores = require('./middleware/manejadorDeErrores');

const aplicacion = express();
const puerto = 3002;

aplicacion.use(cors());
aplicacion.use(express.json());

let contactos = [
    { id: 1, nombre: 'Oliver Garces', telefono: '098282313', idCategoria: 1 }
];

let proximoIdContacto = 3;

// OBTENER contactos
aplicacion.get('/contactos', (solicitud, respuesta) => {
    respuesta.json(contactos);
});

// OBTENER contactos
aplicacion.get('/contactos/:id', (solicitud, respuesta) => {
    const contacto = contactos.find(c => c.id === parseInt(solicitud.params.id));
    if (!contacto) {
        return respuesta.status(404).json({ mensaje: 'Contacto no encontrado' });
    }
    respuesta.json(contacto);
});

// PUBLICAR contactos
aplicacion.post('/contactos', (solicitud, respuesta) => {
    const { nombre, telefono, idCategoria } = solicitud.body;
    if (!nombre || nombre.trim() === '' || !telefono || telefono.trim() === '' || !idCategoria) {
        return respuesta.status(400).json({ mensaje: 'El nombre, el teléfono y el id de la categoría son requeridos' });
    }
    const nuevoContacto = {
        id: proximoIdContacto++,
        nombre: nombre,
        telefono: telefono,
        idCategoria: idCategoria
    };
    contactos.push(nuevoContacto);
    respuesta.status(201).json(nuevoContacto);
});

// ACTUALIZAR contactos
aplicacion.put('/contactos/:id', (solicitud, respuesta) => {
    const contacto = contactos.find(c => c.id === parseInt(solicitud.params.id));
    if (!contacto) {
        return respuesta.status(404).json({ mensaje: 'Contacto no encontrado' });
    }
    const { nombre, telefono, idCategoria } = solicitud.body;
    if (!nombre || nombre.trim() === '' || !telefono || telefono.trim() === '' || !idCategoria) {
        return respuesta.status(400).json({ mensaje: 'El nombre, el teléfono y el id de la categoría son requeridos' });
    }
    contacto.nombre = nombre;
    contacto.telefono = telefono;
    contacto.idCategoria = idCategoria;
    respuesta.json(contacto);
});

// ELIMINAR contactos
aplicacion.delete('/contactos/:id', (solicitud, respuesta) => {
    const indiceContacto = contactos.findIndex(c => c.id === parseInt(solicitud.params.id));
    if (indiceContacto === -1) {
        return respuesta.status(404).json({ mensaje: 'Contacto no encontrado' });
    }
    contactos.splice(indiceContacto, 1);
    respuesta.status(204).send();
});

aplicacion.use(manejadorDeErrores);

aplicacion.listen(puerto, () => {
    console.log(`Servicio de contactos escuchando en http://localhost:${puerto}`);
});
