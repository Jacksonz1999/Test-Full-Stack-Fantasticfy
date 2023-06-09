# Test Full Stack Junior Dev <> Fantasticfy
Prueba técnica para el puesto de Full stack Junior Developer

## Requisitos
Para realizar dicha prueba podréis utilizar JS o React para el Front y Node.js para el Back. Otros lenguajes no serán aceptados.

Tenéis plena libertad para implementar la lógica.

## Pasos a seguir

## Backend:
Montar un servidor en Node.js para realizar llamadas a la siguiente API: https://test-fullstack.*********** En los headers, configurar el siguiente Token:
* X-Shopify-Access-Token: shpat_******************************
* Content-Type: application/json

Con está llamada, recibiréis un array object con un listado de productos. Dichos productos tiene que recibirlos el front.

## Front:

### Collection Page:

* Realizar una llamada al servidor creado en Node.js para obtener el listado de productos
* Una vez obtenidos, crear una grid de productos con los siguientes componenetes dinámicos:
    * Card: El componente card tiene que ser capaz de pintar una Card con:
        * La imagen principal del producto: {key: image}. Accediendo a está key, tendréis todo lo necesario para mostrar la imagen.
        * Título del producto. {key: title}.
        * Precio: {key: variants}. Obtener el precio más bajo para mostrarlo en la card.
        * Enlace: El enlace se tendrá que configurar una ruta personalizada para poder pintar la product page.

### Product Page:

Obtener los datos del producto clicado y montar los siguientes componentes:

* Carousel de imágenes: Recorrer todas las imágenes del producto y crear un carrousel.
* Mostrar toda la información del producto: (Os dejamos las key que necesitáis):
    * title.
    * body_html.
    * Precio: Primero posición de la array variants.price.
    * Selector dinámico para las variantes: Pintar las opciones de la variante: {key: options} y pintar el {name y values}. Cada vez que se seleccione una opción, cambiar el precio dinámicamente. El precio lo encontramos en la array de variants, deberéis filtrar por: {option1} y obtener su key: {price}.

## Extra:
El producto con el siguiente ID: *********** tiene diferentes imágenes por cada variante que tiene. Ampliar la lógica del selector para que una vez que se seleccione una variante, se cambie el carousel con su imagen.

Pista: Cada item del array object de variants tiene un image_id, el cual hace referencia al id de cada item del array object de images.


