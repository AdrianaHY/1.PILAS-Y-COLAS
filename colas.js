nombres = [];
function Queue(){
  this.almacen = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.empty = empty;
  this.print = print;

  function enqueue(element){
    this.almacen.push(element);
  };
  function dequeue(){
    return this.almacen.shift();
  };
  function empty(){
    return this.almacen.length == 0;
  };
  function print(element){
    return console.log (this.almacen);
  };
}
var nombre = new Queue();
nombre.enqueue("Adriana ");
nombre.enqueue("Pilar ");
nombre.enqueue("Gabriela ");
nombre.enqueue("Pitt ");
nombre.enqueue("Dafne ");

nombre.print();

var apellido = new Queue();
apellido.enqueue("Hernández ");
apellido.enqueue("Juárez ");
apellido.enqueue("Flores ");
apellido.enqueue("Gutiérrez ");
apellido.enqueue("Fernández ");

apellido.print();
 for ( var i = 0; i < 5; i++){
   nombres.push(nombre.dequeue() + apellido.dequeue());//dequeue ya está definida en la funcion constructora, por eso solo se manda llamar
 }
document.write (nombres);
console.log(nombres);
