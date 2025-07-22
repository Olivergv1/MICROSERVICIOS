# Agenda de Contactos

Esta es una aplicación simple de agenda de contactos construida con una arquitectura de microservicios. La aplicación se compone de dos microservicios y una aplicación frontend.

## Arquitectura

La aplicación se compone de los siguientes servicios:

-   **servicio-categorias**: Este servicio es responsable de gestionar las categorías de los contactos.
-   **servicio-contactos**: Este servicio es responsable de gestionar los contactos.
-   **frontend**: Esta es una aplicación de Angular que proporciona la interfaz de usuario para la aplicación.

## Prerrequisitos

-   Node.js y npm
-   Angular CLI

## Cómo empezar

1.  **Clona el repositorio**
    ```
    git clone <url-del-repositorio>
    ```
2.  **Instala las dependencias**
    Instala las dependencias para cada uno de los servicios ejecutando el siguiente comando en cada uno de los directorios de los servicios (`servicio-categorias`, `servicio-contactos` y `frontend`):
    ```
    npm install
    ```
3.  **Ejecuta los servicios**
    Ejecuta cada uno de los microservicios ejecutando el siguiente comando en cada uno de los directorios de los microservicios (`servicio-categorias` y `servicio-contactos`):
    ```
    npm start
    ```
4.  **Ejecuta el frontend**
    Ejecuta la aplicación frontend ejecutando el siguiente comando en el directorio `frontend`:
    ```
    ng serve
    ```
5.  **Abre la aplicación**
    Abre la aplicación en tu navegador navegando a `http://localhost:4200`.

## Documentación de la API

### Servicio de Categorías

El `servicio-categorias` se ejecuta en el puerto `3001` y expone los siguientes endpoints:

-   `GET /categorias`: Devuelve una lista de todas las categorías.
-   `GET /categorias/:id`: Devuelve una sola categoría por su ID.
-   `POST /categorias`: Crea una nueva categoría.
-   `PUT /categorias/:id`: Actualiza una categoría existente.
-   `DELETE /categorias/:id`: Elimina una categoría.

### Servicio de Contactos

El `servicio-contactos` se ejecuta en el puerto `3002` y expone los siguientes endpoints:

-   `GET /contactos`: Devuelve una lista de todos los contactos.
-   `GET /contactos/:id`: Devuelve un solo contacto por su ID.
-   `POST /contactos`: Crea un nuevo contacto.
-   `PUT /contactos/:id`: Actualiza un contacto existente.
-   `DELETE /contactos/:id`: Elimina un contacto.
