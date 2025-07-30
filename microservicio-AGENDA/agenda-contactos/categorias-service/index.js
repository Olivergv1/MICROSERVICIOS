const express = require('express');
const cors = require('cors');
const manejadorDeErrores = require('./middleware/manejadorDeErrores');

const aplicacion = express();
const puerto = 3001;

aplicacion.use(cors());
aplicacion.use(express.json());

let categorias = [
    { id: 1, nombre: 'Familia' },
    { id: 2, nombre: 'Amigos' },
    { id: 3, nombre: 'Trabajo' },
    { id: 4, nombre: 'Universidad' }
];

let proximoIdCategoria = 5;

// OBTENER /categorias
aplicacion.get('/categorias', (solicitud, respuesta) => {
    respuesta.json(categorias);
});

// OBTENER /categorias/:id
aplicacion.get('/categorias/:id', (solicitud, respuesta) => {
    const categoria = categorias.find(c => c.id === parseInt(solicitud.params.id));
    if (!categoria) {
        return respuesta.status(404).json({ mensaje: 'Categoría no encontrada' });
    }
    respuesta.json(categoria);
});

// PUBLICAR /categorias
aplicacion.post('/categorias', (solicitud, respuesta) => {
    const { nombre } = solicitud.body;
    if (!nombre || nombre.trim() === '') {
        return respuesta.status(400).json({ mensaje: 'El nombre de la categoría es requerido' });
    }
    const nuevaCategoria = {
        id: proximoIdCategoria++,
        nombre: nombre
    };
    categorias.push(nuevaCategoria);
    respuesta.status(201).json(nuevaCategoria);
});

// ACTUALIZAR /categorias/:id
aplicacion.put('/categorias/:id', (solicitud, respuesta) => {
    const categoria = categorias.find(c => c.id === parseInt(solicitud.params.id));
    if (!categoria) {
        return respuesta.status(404).json({ mensaje: 'Categoría no encontrada' });
    }
    const { nombre } = solicitud.body;
    if (!nombre || nombre.trim() === '') {
        return respuesta.status(400).json({ mensaje: 'El nombre de la categoría es requerido' });
    }
    categoria.nombre = nombre;
    respuesta.json(categoria);
});

// ELIMINAR /categorias/:id
aplicacion.delete('/categorias/:id', (solicitud, respuesta) => {
    const indiceCategoria = categorias.findIndex(c => c.id === parseInt(solicitud.params.id));
    if (indiceCategoria === -1) {
        return respuesta.status(404).json({ mensaje: 'Categoría no encontrada' });
    }
    categorias.splice(indiceCategoria, 1);
    respuesta.status(204).send();
});

aplicacion.use(manejadorDeErrores);

aplicacion.listen(puerto, () => {
    console.log(`Servicio de categorías escuchando en http://localhost:${puerto}`);
});
