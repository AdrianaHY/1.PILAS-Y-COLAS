var nombres = [];//arreglo vacío para almacenar nombres y apellidos
function Stack(){//función constructora para crear la pila de nombres y la pila de apellidos
  var almacen = [];

  this.push = function (element){
    almacen.push(element);
  };
  this.pop = function(){
    return almacen.pop();
  };
  this.peek = function(){
    return almacen [almacen.length-1];
  };
  this.isEmpty = function(){
    return almacen.length == 0;
  };
  this.size = function(){
    return almacen.length;
  };
  this.clear = function(){
    almacen = [];
  };
  this.print = function(){
    console.log(almacen.toString());
  };
}
var nombre = new Stack();
nombre.push("Adriana ");
nombre.push("Pilar ");
nombre.push("Gabriela ");
nombre.push("Pitt ");
nombre.push("Dafne ");

nombre.print();

var apellido = new Stack();
apellido.push("Hernández ");
apellido.push("Juárez ");
apellido.push("Flores ");
apellido.push("Gutiérrez ");
apellido.push("Fernández ");

apellido.print();

for (var i = 0; i < 5; i++){//se pone cinco porque es menor al nunmero de elementos que tiene el arreglo nombre y apellido,porque son iguales
  nombres.push(nombre.pop() +  apellido.pop());//agrega elementos a la variable antes declarada, la variable global nombres
}

document.write(nombres); //imprime el arreglo con los elementos agregados.
console.log(nombres);
