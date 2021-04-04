# Listado imágenes 

En este ejercicio vamos prácticar con React route y el contexto.

***

## Enunciado .-

Como miembro de un portal de un banco de imagenes nos piden tener un carrito de la compra siempre
visible: - El usuario tiene una area principal en la que se muestra una página con imagenes, cada imagen
tiene un checkbox que permite seleccionarlo y añadirlo al carrito de la compra (cada imagen tiene un ID).
* Para simplificar vamos a tener dos páginas distintas con imagenes seleccionables - Al derecha
(fuera de React-router) mostramos un carrito de la compra.
* Cada vez que el usuario selecciona una imagen en una de las páginas se añade al carrito. - Si un
usuario borra la imagen del carrito se deselecciona de la página (en caso de que esté activa).

***

## Pistas 

* Arranca por montar las páginas y que tenga unos datos mockeados con el suguiente interfaz para

cada imagen:

```tsx
  interface PictureInfo {
    id: string;
    picUrl: string;
    title: string;
  }
```

* Create un componente carrito y muestralo fuera del routing (o si quieres podría definir un layout para esto)
* Una vez funcionando, piensa que para el carrito de la compra sólo te hace falta una lista de Id's de imagenes:
  * Arranca vacía.
  * Cada vez que selecciono una imagen la añado a ese array del contexto.
  * Si la eliminas del arrea del carrito se tiene que deseleccionar de la ventana que se este mostrando.
  * ¿Como hacemos esto?
  * Al cargar una página create un ViewModel con el siguiente campo de más:

```tsx
interface PictureInfo {
 id : string;
 picUrl: string;
 title: string;
+ selected : boolean;
}
```

* Nada más cargar la página mira el contexto y pon a true los selected que toquen.
* Si marco en la página pongo el campo a true/false, y además hago un Set al contexto para actualizarlo (automáticamente se actualizará en el carrito).
* En el carrito iría de la otra manera, si deschequeo el carrito hago un check y la ventana de turno estar usando un useEffect escuchando al ventana del carrito para actualizar sus datos.

***

## Ideas opcionales:
Haz que el carrito se puede ocultar.
Implementa una página de "checkout" para hacer el pedido.
Estilalo con material UI.
Añade una opcíon de vaciar carrito.

***

## Notas del ejercio al corrector .-

El ejercicio parte de la base de construcción de los ejemplos de Lemoncode.

Este ejercicio tiene ya una base de la ARQ partiendo de una api de empleados.

Se crea un componente que en función de un parametro que nos trae en la ruta sabremos a que mock del api tomar.

En función del parametro de secciónn recibido pintara desde "galery-list" un listado de items o productos
* listado de dibujos
* listado de fotografías

Galery-list contiene la lógica mínima para llamar a su propio api y pintar los productos.

Se crea un componente "cart" que sera llamado desde un icono que a su vez llamará a contexto para mostrar u ocultar.

*** 

### Nuestro OurContext 
Contiene la siguiente lógica
* handleOnChangeCOntexto .- insercion del producto en el carrito ( si esta marcado al desmarcarlo se borra del carrito )
* handleDelete .- borrado del eleento desde el carrito
* isChecked .- comprueba el estado del check
* handletoggleShow .- muestra u oculta el carrito

* Componente dumy de pruebas 

***

# Pasos de instalión y prueba .-

- Instalación _npm install_

```bash
npm install
```
- Ejecución 

```bash
npm start
```

