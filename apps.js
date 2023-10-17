let carrito = [];

//funcion mostrar pedido
function pedidoListo() {
    alert("Tu pedido está listo! Avisale al cliente que en en lapso de veinte minutos será entregado!")
}
//array con listado de productos. Esto estará en cards con boostrap y el boton sera agregar al carrito
const menu = 
[
    {combo: "1", precio: 2500, disponibilidad:true, descripcion: "hamburguesa simple con papas y gaseosa"},
    {combo: "2", precio: 2900, disponibilidad:true, descripcion: "hamburguesa doble con papas y gaseosa"},
    {combo: "3", precio: 3500, disponibilidad:true, descripcion: "hamburguesa triple con papas y gaseosa"},
    {combo: "4", precio: 2400, disponibilidad:true, descripcion: "nuggets con papas y gaseosa"},
    {combo: "5", precio: 1900, disponibilidad:true, descripcion: "menu infantil"}
]
console.log(menu)
//indicar mesa
const mesa = prompt ("Introduce numero de mesa")

//agregar productos
while (true) {
  const nombre = prompt("Introduce el pedido del cliente o FINALIZAR");
  if (nombre === 'FINALIZAR') {
    break;
  }
  const precio = parseFloat(prompt("Introduce el precio"));
  if (!isNaN(precio)) {
    const producto = {
      nombre: nombre,
      precio: precio
    };
    
    carrito.push(producto);
    alert(`${nombre} se agregó al carrito.`);
  } else {
    alert('Precio incorrecto. No se agregó');
  }
}

// Mostrar la compra x consola
function mostrarCompra() 
{
    console.log("Productos comprados:");
    carrito.forEach((producto, index) => {
      console.log(`Nombre: ${producto.nombre}, Precio: $${producto.precio}`);
      console.log(`Mesa: ${mesa}`);
    });
}
mostrarCompra();

// Funcion SUMA
function calcularTotal()
{
    const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    console.log(`Cobrar al cliente: $${total}`);
}
calcularTotal();

//mostrar pedido
pedidoListo();


