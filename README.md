# Aplicación implementada con React, y los estilos @emotion

El proyecto permite realizar un busqueda por cada modulo [Usarios, tableros, concialiaciones y Fuetnes]

## Variables para ejucutar el proyecto

En el directorio del proyecto, puede ejecutar:

### `yarn start`

Ejecuta la aplicación en el modo de desarrollo
Abra [http://localhost:3000](http://localhost:3000) para verlo en el navegador.


### `yarn build`

Construye la aplicación para producción en la carpeta `build`. \
Agrupa correctamente React en el modo de producción y optimiza la compilación para obtener el mejor rendimiento.

# `Cuestionario`

### `1. ¿Por qué no debería usar la librería ​ JQuery , ​ ​ si estoy usando ​ ReactJS​?`
```
Por que react ya manejaría del DOM.
```
### `2. ¿Porque usarias ​ Hooks de las nuevas versiones de ​ ReactJS, ​ en lugar de ​ class component? ​`
```
Por que te facilita la creada de los componentes, y cada componente maneja su estado. y los hooks permite sacar un gran parte de react. tales como useEffect(), UseContext(), useReduce() useState(), useRef() etc...
```

### `3. ¿Que es un archivo ​ JSX​?`
```
Un archivo JSX  permite convinar de javaScritp y html.
```
### `4. ¿Que diferencia hay entre una ​ function ​ y una ​ arrow function ​ de Javascript​?`
```
1: arrow function no permite el this. solo lo hace con class.
```
### `5. ¿Qué es ​ Redux ​ y ​ cómo nos ayuda en los proyectos?`
```
Redux: es una libreria de javaScript, que nos permite manejar el estado global de nuestra aplicación.  redux nos ayuda mucho en proyectos grande, en la parte del state, de la app, por que se puede llamar el cualquier parte de la app, sin necesidad de pasar el state por props, se puede acceder al state con useSelector(), también existe la API de Context para proyectos medianos. 
```
### `6. ¿Por qué usuarios pruebas unitarias en tu código?`
```
Para la verificación de que todos los componentes de la app esten realizando sus respectivas tareas, y también tener la seguridad que la aplización esta en optimas condiciones.
```
### `7. ¿Que nos permite hacer la siguiente declaración?`
const ​ anyFunction = (​ param_1​ ) => (​ param_2​ ) =>​ ​ param_1 ​ + ​ ​ param_2;
```
Permite que anyFunction llame a otra functions, y lo que retorna cada funcion se suma. a esto se le conoce como currers.
seria algo así de la manera larga.
const anyFunction = (param_1) => {
    return function(param_2) => {
        return param_1 + param_2
    }
}
```

## `Creador`

Jose Manuel Graciano Tuberquia




