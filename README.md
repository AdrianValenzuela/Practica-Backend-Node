# Práctica-Backend-Node
###### API de anuncios que permite GET y POST

## Modelo de Anuncio
Un Anuncio se compone de:
Nombre (string),

Estado (int),

Precio (float),

Foto (string),

Tags (array de string)

###### El estado se trata de una enumeración
Los distintos estados son:

0 -> Se vende

1 -> Se busca

2 -> Reservado

3 -> Vendido

## Para inicializar la BD
###### Ejecutar npm run initDB

## Para arrancar el proyecto
###### Ejecutar npm run start o npm start

## Petición GET /
Muestra todos los productos disponibles. Esta URL permite filtros del estilo query
#### Campos:
name -> De tipo string. Permite buscar por nombre (si no se indica el nombre completo buscará que empieze por la cadena indicada)

status -> De tipo int. Permite buscar por el estado del anuncio. (ver posibles estados en el modelo)

minPrice -> De tipo float. Para buscar por el precio mínimo a pagar

maxPrice -> De tipo float. Para buscar por el precio máximo a pagar

tag -> De tipo string. Permite buscar por un tag.

## Petición GET /tags
Muestra todos los tags disponibles.

## Petición POST /
Permite insertar anuncios y devuelve el anuncio que se acaba de insertar

Ejemplo de rq:

{

name: 'anuncio1',

status: 0,

price: 50,

photo: 'anuncio1.jpg',

tags: ['mobile', 'work']

}
