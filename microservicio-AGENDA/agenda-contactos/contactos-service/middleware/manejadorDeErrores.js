const manejadorDeErrores = (error, solicitud, respuesta, siguiente) => {
  console.error(error.stack);
  respuesta.status(500).send('Error algo anda mal!');
};

module.exports = manejadorDeErrores;
