//SIMULADOR DE ELECCIÓN DE PERSONAJE//

// DEFINICION ARRAYS Y OBJETOS 
const sex = ['Hombre','Mujer'];
const profesionMale = ["Militar confederado", "Doctor", "Buscador de oro", "Cazarecompensas"];
const profesionFemale = ["Vaquera", "Doctora", "Buscadora de oro", "Cazarecompensas"];
//-->
//DEFINICIÓN CLASE PERSONAJE.//
class Personaje {
    constructor(number, name, sex, profesion) {
        this._number = number;
        this._name = name;
        this._sexo = sex;
        this._profesion = profesion;
    }

    get number() { return this._number; }
    get nombre() { return this._name; }
    get sex() { return this._sexo; }
    get profesion() { return this._profesion; }
};
//FUNCIÓN 
function showPlayer(player) {
    alert(`Tu personaje actual es:\n\n
    Nombre: ${player.nombre}.\n
    Sexo: ${player.sex}.\n
    Profesión: ${player.profesion}.
    \n\n¿Quieres unirte a la aventura?`);
};
// FUNCIÓN PARA SOLICITAR Y VALIDAR UN NOMBRE.
function solicitarNombre(mensaje) {
    let nombre;
    while (true) {
        nombre = prompt(mensaje);
        if (nombre !== null && nombre.trim() !== "") {
            break; // Salir del bucle si el nombre es válido
        } else {
            alert("El nombre no es válido. Por favor, inténtalo de nuevo.");
        }
    }
    return nombre;
};

// FUNCIÓN PARA SOLICITAR UNA OPCIÓN DE UNA LISTA.
function solicitarOpcion(mensaje, opciones) {
    let opcion;
    while (true) {
        // Crear mensaje con las opciones numeradas.
        let mensajeCompleto = mensaje + "\n";
        for (let i = 0; i < opciones.length; i++) {
            mensajeCompleto += (i + 1) + ". " + opciones[i] + "\n";
        }
        mensajeCompleto += "Por favor, ingresa el número correspondiente a tu elección:";

        // Solicitar al usuario que ingrese una opción.
        opcion = prompt(mensajeCompleto);
        opcion = parseInt(opcion, 10);

        // Validar que la opción sea un número válido dentro del rango.
        if (!isNaN(opcion) && opcion >= 1 && opcion <= opciones.length) {
            break; // Salir del bucle si la opción es válida
        } else {
            alert("Opción no válida. Por favor, inténtalo de nuevo.");
        }
    }
    return opciones[opcion - 1];
};

// Solicitar datos para el primer jugador
let nombre1 = solicitarNombre("Por favor, ingresa el nombre del primer jugador:");
let sexo1 = solicitarOpcion("Selecciona tu sexo:", sex);
let profesiones1 = (sexo1 === 'Hombre') ? profesionMale : profesionFemale;
let profesion1 = solicitarOpcion("Selecciona tu profesión:", profesiones1);
let jugador1 = new Personaje(1, nombre1, sexo1, profesion1);

//MOSTRAR DATOS DE JUGADORES
showPlayer(jugador1);


// SOLICITAR DATOS PARA => [POSIBLE JUGADOR 2].

// showPlayer(jugador2);

// let nombre2 = solicitarNombre("Por favor, ingresa el nombre del segundo jugador:");
// let sexo2 = solicitarOpcion("Selecciona tu sexo:", sex);
// let profesiones2 = (sexo2 === 'Male') ? profesionMale : profesionFemale;
// let profesion2 = solicitarOpcion("Selecciona tu profesión:", profesiones2);
// let jugador2 = new Personaje(2, nombre2, sexo2, profesion2);

//######################----------------------------------########################
// SIMULADOR DE TRUEQUE//

// DEFINICION ARRAYS Y OBJETOS 
const intercambioItems1= [
    {nombre: 'Tabaco', precio:'100'},
    {nombre: 'Pepita de oro', precio:'200'},
    {nombre: 'Tabaco y pepita de oro', precio:'300'}
];
const intercambioItems2 =[
    {nombre:'Botella de whiskey',precio:'100'},
    {nombre:'Alicate', precio:'200'},
    {nombre:'Pico pequeño',precio:'300'}];

const presentacionInicioDialogoJoe= [
'Tras varios días urdiendo un plan para el escape. Te has dado cuenta de que necesitas algunos utensilios para efectuar la huída. \
Hasta que en un recreo en patio de la carcel Joe se te acerca y sin mediar palabra te agarra del brazo para llamar tu atención.\n\n\
Joe.H: shhhh... Tengo un amigo al que debes conocer, sígueme.\n\n\
Decides seguirle.',
'Tras dar un par de vueltas al patio, Joe te señala con la cabeza a un hombre alto pelirojo:\n\n\
Joe.H: Él es Mc.Hount.Preguntalé que tiene de nuevo hoy?\n\
Aunque no tienes claro que pretende optas por hacer lo que dice.\n\n',
'Mc.Hount parece un tipo directo.\n\nMc.Hount: Que tienes para intercambiar?'];

const item   = ['Tabaco','Pepita de oro','Tabaco y pepita de oro'];
const item2  = ['Botella de whiskey','Alicate','Pico pequeño'];
const precio2 = [100,200,300];
//-->

//DEFINICIÓN CLASE PRODUCTO.//
class Producto{
    constructor(item,item2,price){
        this._item = item;
        this._item2 =item2;
        this._price = price;
    };
};
//PRESENTACIÓN: Diálogos "Le puse Diálogo porque puede ser reutilizada"
function dialogo(dialogo){
    alert(dialogo.join('\n'));
};

function mostrarProductos(){
    console.log('Los productos disponibles para el primer intercambio son:');
    for (const items of intercambioItems1) {
        console.log(items);
    };
    console.log('Los productos disponibles para el segundo intercambio son:');
    for (const items of  intercambioItems2) {
        console.log(items);
    };
};

//DEFINICION DE FUNCIÓN PARA CARGAR PRODUCTOS.
function cargarProducto(arrayProductos) {
    
    //DECLARO VARIABLES//
    // He reutizado la función "solicitarOpcion" presente ejercicio anterior.
    let precio;
    let intercambioItem1 =solicitarOpcion('Por favor, Elige entre tus objetos, cuál quieres intercambiar: ',item);
    let intercambioItem2 =solicitarOpcion('Por favor, Elige entre tus objetos, Por cuál lo quieres intercambiar: ',item2);

    if(intercambioItem1 ==='Tabaco'  && intercambioItem2 ==='Botella de whiskey' ){
        precio =precio2.find((price)=>price === 100);

    }else if(intercambioItem1 === 'Pepita de oro' && intercambioItem2 === 'Alicate'){
        precio =precio2.find((price)=>price === 200);

    }else if( intercambioItem1 === 'Tabaco y pepita de oro' && intercambioItem2 === 'Pico pequeño'){
        precio =precio2.find((price)=>price === 300);
    };

   //INSTANCIA PRODUCTO
    const nuevoProducto = new Producto(intercambioItem1,intercambioItem2,precio);
    //Agrego el producto creado al array de productos.
    arrayProductos.push(nuevoProducto);
    console.log("producto añadido a tu inventario");
    console.log(arrayProductos);
};
//RESUMEN DE TRANSACCIÓN.
function showProductos() {
    arrayProductos.forEach((producto) => {
    console.log(`
    Usted eligió intercambiar: ${producto._item}.\n\
    A cambio de: ${producto._item2}.\n\
    cuyo valor es: ${producto._price} $`);
    });
};
//DEFINICIÓN ARRAYPRODUCTO [INCORPORA LA SELECCIÓN].
let arrayProductos=[];

//EJECUCIÓN DEL PROGRAMA//
let presentacion= dialogo(presentacionInicioDialogoJoe);
let catalogo=mostrarProductos();
let cargaProducto=cargarProducto(arrayProductos);
let muestrarEleccion=showProductos();

