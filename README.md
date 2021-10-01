# NBA Players

### Configuración inicial 🔧

1. Realizar el fork del repositorio

2. Clonar el repositorio

3. Instalar npm modules
   ```bash
   npm install
   ```
4. Ejecutar servidor
   ```bash
   npm run start
   ```
5. Ir a **http://localhost:3000** para ver la pantalla inicial

## Documentación endpoint

Agregue aquí al documentación del endpoint elaborado.

-router.js: es el archivo donde encontramos las rutas de la aplicacion 
-La ruta que llama la funcion que encuentra los jugadores cuya suma de alturas es igual a un cierto valor dado se envuentra en la ruta 'http://localhost:3000/api/api' , esta pantalla por el momento carga y punta los datos que se encuentran en la ruta 'https://gist.githubusercontent.com/jhonatan89/bc554ec3ded15407609714e8b7b8f1c8/raw/5ab1e3e5b45e99aabcbbdd30f55d2ae5eafb9cbe' 

-controller.js maneja la logica de la funcion
-la funcion 'getJugadores' carga los datos utilizando Axis.
-la funcion 'encontrarJugadores' es la que se encarga de encontrar los jugadores que cumplen la caracteristica de que la suma de sus alturas es igual al valor ingresado por parametro, tiene como parametros ' datos ' y 'sum' , donde datos son los datos que cargamos anteriormente y sum la suma de las alturas que se quiere encontrar, esta funcion retorna un strig separado por espacios con los indices de los jugadores que cumplen las caracteristicas.


-por cuestion de tiempo e imprevistos no se alcanzo a desarrollar la parte de la interface de usuario
