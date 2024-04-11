// esta es la forma de comentar en JS

// CONSOLE.LOG -> la forma de enviar mensajes a la consola del navegador
console.log("HOLA, DESARROLLADORES  Y PSICÓLOGOS");
console.log("mi mensaje");


// CONCEPTOS BÁSICO EN JAVASCRIPT

//1. tipos de variables
//2. Manejo del DOM
//3. Condicionales
//4. Ciclos


// LAS VARIABLES EN JS -> piensen en las variables como contenedores de información

// Hay 3 tipos de variables en js

// VAR -> Un tipo de variable que ya no se usa (NO LA VAMOS A UTILIZAR) -> Cambia en el tiempo

// LET -> Es una variable que puede cambiar en el tiempo
// CONST -> en una variable que no puede cambiar en el tiempo


//TIPOS DE DATOS O INFORMACIÓN PODEMOS ALMACENAR
//el = en JS no es comparativo, sino que me sirve para asignar valores

// Numéricos
let numero = 7;

// cadena de caracteres -> texto -> string (en programación)
// El texto SIEMPRE debe estar dentro de comillas 
let texto = "hola, mundo"

//Booleanos -> un dato que puede ser o verdadero o falso 
let esVerdadero = true; //true -> verdad
let esFalso = false; // false -> falso

//Arreglos -> arrays(en programación) -> me permiten almacenar varios datos al mismo tiempo en una misma variable
let arregloNombres = ["Luisa", "Emmanuel", "Paula", "Lucila"];
let arregloNumeros = [1, 3, 5, 8, 20];

//objetos ->  " una representacion de la vida real pero en nustro  codigo"

// -> atributos -> caracteristicas de ese objeto
// -> métodos-> acciones

// () [] {}
// [] -> cochetes -> son para declarar arreglos
// {} -> llaves -> ´para declarar objetos
// () -> parentesis ->  nos permite ejecutar  acciones -> invocar funciones

const celular = {
    color: "blanco",
    modelo: " Galaxy A7 ",
    ancho: 350,
    alto: 800,
    //El metodo -> un mensaje que me indica (representa) la acción
    enviarMensajes: function () {
        // entre estos corchetes al lado de unos parentesis yo establezco la accion a realizar 
        console.log("Mensaje Enviado")
    },
    // el metodo-> las acciones-> directamnete una operacion
    sumar: function () {
        console.log(5 + 4);
    }
}


// EJEMPLOS DE FUNCIONES 

// funciones ->  acciones que ustedes pueden tener en sus sitios web

// Funciones ->  pueden o no recibir datos de entrada -> procesamiento de datos y luego nos devuelve 
function buscarObjeto() {
    console.log("le muestre lo que esta buscando")
}

function buscarObjeto() {
    console.log("me muestre solo iformacion de la depresion");
}


// En la carpeta scripts van todos los archivos de JS pero destinados a darle dinamismo al sitio web NO SE RELACIONAN CON LA FUNCIONALIDAD DEL SITIO A NIVEN DEL BACKEND
//NODE JS -> Utilizamos para poder implementar js en nuestrobacken -> operaciones logicas nos permiten  EL FUNCIONAMIENTO  de nuestro sitio web 