let productos = [
    {nombre: "remera", precio: 2500},
    {nombre: "short", precio: 3500},
    {nombre: "jeans", precio: 7500},
    {nombre: "gorra", precio: 4300}
 ]
 let total = 0
 alert("Bienvenido a tu carrito de compra")
 for (let i = 0; i < productos.length; i++) {
   total = total + productos[i].precio
 }
 alert("El total es: " + total)
 let respuesta = prompt("Queres ver los productos? \nResponder SI o NO")
 if (respuesta == "si") {
    alert("Remera \nShort \nJeans \nGorra") 
 }else if (respuesta && sacar === "no") {
    alert("Muchas gracias por su compra")
 }
 
 let eliminados = [{nombre: "remera", nombre: "short", nombre:"jeans", nombre: "gorra"} ]
 
 let eliminar = prompt ("¿Quiere eliminar un producto de su carrito?")
 if (eliminar == "si") {
 let productoIngresado = prompt("Ingrese un producto que quiere eliminar")
 let productoEliminado = eliminados.indexOf(productoIngresado)
 }else if(productoEliminado != -1) {
     eliminados.splice(productoEliminado, 1)
 }
 alert("Su lista se modifico ")
 
 for (let i = 0; i < eliminados.length; i++) {
    total = total + productoEliminado[i].precio
  }
  alert("Su nuevo total es " + total)