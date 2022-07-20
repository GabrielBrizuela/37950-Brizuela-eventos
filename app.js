// //APLICANDO IF-ELSE
// let nombreUsuario = prompt("Ingresar nombre de usuario");

// if (nombreUsuario == "") {
//     alert("No ingresaste el nombre de usuario");
// }
// else {
//     alert("Nombre de usuario ingresado " + nombreUsuario);
// }

// let operación = ""
// let nuevaOperación = false

// const suma = (a, b) => a + b;
// const resta = (a, b) => a - b;
// const iva = x => x * 0.21;
// let precioProducto1 = 3500;
// let precioProducto2 = 2900;
// let precioProducto3 = 3100;
// let precioProducto4 = 2500;
// let precioProducto5 = 2200;
// let precioProducto6 = 2100;
// let precioProducto7 = 3000;
// let precioProducto8 = 2400;
// let precioProducto9 = 1600;
// let precioProducto10 = 1500;
// let precioProducto11 = 1300;
// let precioProducto12 = 1000;
// let descuento = 500;

// //APLICANDO DO-WHILE Y SWITCH
// do {
//     pasteleria = prompt(`"Que producto buscas?",
// 1: Torta de cumpleaños= $3500,
// 2: Torta love= $2900,
// 3: Torta macarrone= $3100,
// 4: Brownie= $2500,
// 5: Lemon pie= $2200,
// 6: Mil hojas= $2100,
// 7: Tarta cabsha= $3000,
// 8: Tarta de coco= $2400,
// 9: Mini tarta brownie= $1600,
// 10: Mini tarta de lemon pie= $1500,
// 11: Bombones x 12u = $1300,
// 12: Cake pops x 12u= $1000,`)

//     switch (pasteleria) {
//         case "1":
//             let nuevoPrecio1 = resta(suma(precioProducto1, iva(precioProducto1)), descuento);
//             alert(`Debe abonar $ ${nuevoPrecio1}`);
//             break;

//         case "2":
//             let nuevoPrecio2 = resta(suma(precioProducto2, iva(precioProducto2)), descuento);
//             alert(`Debe abonar $ ${nuevoPrecio2}`);
//             break;
//         case "3":
//             let nuevoPrecio3 = resta(suma(precioProducto3, iva(precioProducto3)), descuento);
//             alert(`Debe abonar $ ${nuevoPrecio3}`);
//             break;
//         case "4":
//             let nuevoPrecio4 = resta(suma(precioProducto4, iva(precioProducto4)), descuento);
//             alert(`Debe abonar $ ${nuevoPrecio4}`);
//             break;
//         case "5":
//             let nuevoPrecio5 = resta(suma(precioProducto5, iva(precioProducto5)), descuento);
//             alert(`Debe abonar $ ${nuevoPrecio5}`);
//             break;
//         case "6":
//             let nuevoPrecio6 = resta(suma(precioProducto6, iva(precioProducto6)), descuento);
//             alert(`Debe abonar $ ${nuevoPrecio6}`);
//             break;
//         case "7":
//             let nuevoPrecio7 = resta(suma(precioProducto7, iva(precioProducto7)), descuento);
//             alert(`Debe abonar $ ${nuevoPrecio7}`);
//             break;
//         case "8":
//             let nuevoPrecio8 = resta(suma(precioProducto8, iva(precioProducto8)), descuento);
//             alert(`Debe abonar $ ${nuevoPrecio8}`);
//             break;
//         case "9":
//             let nuevoPrecio9 = resta(suma(precioProducto9, iva(precioProducto9)), descuento);
//             alert(`Debe abonar $ ${nuevoPrecio9}`);
//             break;
//         case "10":
//             let nuevoPrecio10 = resta(suma(precioProducto10, iva(precioProducto10)), descuento);
//             alert(`Debe abonar $ ${nuevoPrecio10}`);
//             break;
//         case "11":
//             let nuevoPrecio11 = resta(suma(precioProducto11, iva(precioProducto11)), descuento);
//             alert(`Debe abonar $ ${nuevoPrecio11}`);
//             break;
//         case "12":
//             let nuevoPrecio12 = resta(suma(precioProducto12, iva(precioProducto12)), descuento);
//             alert(`Debe abonar $ ${nuevoPrecio12}`);
//             break;

//         default:
//             alert("No ha seleccionado nada")
//             break;
//     }
//     nuevaOperación = confirm("Quieres seleccionar otro producto?")
// }
// while (nuevaOperación)

// //APLICANDO OBJETOS Y ARRAY
// const dulce = [
//     { id: 1, producto: 'Torta de cumpleaños', precio: 3500 },
//     { id: 2, producto: 'Torta love', precio: 2900 },
//     { id: 3, producto: 'Torta macarrone', precio: 3100 },
//     { id: 4, producto: 'Brownie', precio: 2500 },
//     { id: 5, producto: 'Lemon pie', precio: 2200 },
//     { id: 6, producto: 'Mil hojas', precio: 2100 },
//     { id: 7, producto: 'Tarta cabsha', precio: 3000 },
// ];

// //APLICANDO CLASS Y AGREGO DE PRODUCTO
// class producto {
//     constructor(id, producto, precio) {
//         this.id = id,
//             this.producto = producto,
//             this.precio = precio
//     }
// }

// function agregarProducto() {
//     const tarta = new producto(8, "Tarta de coco", 2400);
//     dulce.push(tarta)

//     const miniTarta = new producto(9, "Mini tarta brownie", 1600);
//     dulce.push(miniTarta)

//     const mini = new producto(10, "Mini tarta de lemon pie", 1500);
//     dulce.push(mini)

//     const bombones = new producto(11, "Bombones x12u", 1300);
//     dulce.push(bombones)

//     const cakePops = new producto(12, "Cake pops x12u", 1000);
//     dulce.push(cakePops)

// }

// agregarProducto();
// console.log(dulce);

// //TE COMENTO TODO ESTO PORQUE ME SALE UNDEFINED CUANDO LO LOGEO 
// /* function pedirDatos() {
//     const nombreIngresado = prompt ("Ingrese la prenda que desea buscar");
//     buscarProducto(nombreIngresado);
// }

// function buscarProducto(prenda){
//     const find = prendas.find (elemento=> elemento.producto===prenda);
//     console.log (`ENCONTRADO CON FIND`, find);
// } */

// //FILTRADO
// function pedirDatos() {
//     const nombreProductoFiltrado = prompt("Ingrese el producto que desea filtrar");
//     filtrarProducto(nombreProductoFiltrado);
// }

// function filtrarProducto(prodcutoFilter) {
//     const filter = dulce.filter(tortas => tortas.producto.indexOf(prodcutoFilter) !== -1);
//     console.log(`Producto filtrado`, filter);
// }

// pedirDatos(); DEJO COMENTADO TODO LO ENTREGADO HASTA AHORA CON LAS MODIFICACIONES DE PRODUCTOS 

const addToCardButtons = document.querySelectorAll(`.cardProduct__btn`);
console.log(`addToCardButtons`, addToCardButtons);
addToCardButtons.forEach(addToCardButtons => {
    addToCardButtons.addEventListener(`click`, addToCardclicked)
})

const productoCardContainer = document.querySelector(`.container-carrito`)

function addToCardclicked(event) {
    const button = event.target;
    const item = button.closest(`.cardProducto`)
    const itemProducto = item.querySelector(`.cardProduct__description`).textContent;
    const itemPrecio = item.querySelector(`.cardPrecio`).textContent;
    const itemImage = item.querySelector(`.cardProduct__image`).src;

    addItemCardProduct(itemProducto, itemPrecio, itemImage);
}

function addItemCardProduct(itemProducto, itemPrecio, itemImage) {
    const productoCardRow = document.createElement(`div`);
    const prodcutoContent = `
<div class="containerProducto">
    <div class="cardProducto">
    <table class="table" id="lista-carrito">
                                <thead>
                                    <tr>
                                        <th><img src=${itemImage} alt="torta Cumpleaños" class="cardProduct__image"></th>
                                        <th><h4>                ${itemProducto}
            </h4></th>
                                        <th><h4 class="cardPrecio">${itemPrecio}</h4></th>
                                        <th>Cantidad</th>
                                        <th>Quitar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope=""></th>
                                    </tr>
                                </tbody>
                            </table>
         

            

         </div>
    </div>
</div>` ;
    productoCardRow.innerHTML = prodcutoContent
    productoCardContainer.append(productoCardRow)

}

const vaciarCarritoBtn = document.querySelector(`#vaciar-carrito`)

carrito.addEventListener ("click", eliminarProducto)

function limpiarHTML () {
    containerCarrito.innerHTML="";
}




