
//Creo la lista de productos

const productos = [{ id: 1, nombre: "Playo", precio: 450 },
{ id: 2, nombre: "Hondo", precio: 400 },
{ id: 3, nombre: "Cuenco" , precio: 150},
{ id: 4, nombre: "Aceitero" , precio: 250},
{ id: 5, nombre: "Servilletero" , precio: 150},
{ id: 6, nombre: "Posacuenco" , precio: 100}];

//Los agrego al HTML con Jquery

for (const producto of productos) {
$("#app").append(`<div>
    <div class="Item">
    <h3> Producto N°: ${producto.id}</h3>
    <p> Producto: ${producto.nombre}</p>
    <b> $ ${producto.precio}</b>
    <button id="boton${producto.id}"> Agregar al carrito </button>  
    </div>
</div>`
);

//Creo la funcion asociada al boton de compra para sumarlos a la lista de productos en el carrito

$(`#boton${producto.id}`).click(function () {
    $("#carrito").append(
    `<div><h3> Compraste ${producto.nombre} </h3>`)
    });
}



