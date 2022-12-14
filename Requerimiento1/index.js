
/*** CREAMOS EL NAVBAR ***/
//Convertimos en objeto el div ya existente en nuestro HTML
let divPrincipal = document.getElementById("divPrincipal");

//creamos un div contenedor para el navbar
var navbar = document.createElement("nav");
navbar.id = "navbarContainer";

//Le añadimos el child navbar al div principal ya existente
divPrincipal.appendChild(navbar);

//Creamos una ul para las secciones del navbar
var menuList = document.createElement("ul");
menuList.id = "menuList";
//añadimos la ul al navbar
navbar.appendChild(menuList);

//Asignamos los li a la ul
//Creamos un array con los puntos del menú
var menuArray = ["INFORMACIÓN", "CÓDIGO VESTIMENTA", "REGALOS", "REGISTRO"];

//Para cada item del menú:
var i = 0;
menuArray.forEach((item) => {
    console.log(item);

    //creamos un li
    var li = document.createElement("li");

    //guardamos su posición del array
    var index = menuArray.indexOf(item);

    //Le asignamos al li el valor del item
    li.textContent = item;

    //agragamos el li a nuestra ul menuList
    menuList.appendChild(li);

    //asignamos como id li+el índice del campo en el array
    li.id = "li-" + i;

    //Asignamos la propiedad onclick al li3 y la función mostrarFormulario()
    if (i === 3)
        li.onclick = () => {
            mostrarFormulario();
        };

    i++;
    //MANERA 2
    // if (index === 3) li.addEventListener("click",()=>{mostrarFormulario()});
});

//Cargamos el logo
let divLogo = document.createElement("div");
divLogo.id = "divLogo";

var imagenLogo = document.createElement("img");
imagenLogo.id ="imagenLogo";
imagenLogo.src = "Pictures/b_f_vector_logo.png";
imagenLogo.alt = "RF_Logo";

divLogo.appendChild(imagenLogo)
navbar.appendChild(imagenLogo);

let formCreado = false

/**
 * Muestra el formulario de Registro, al hacer click en Registro
 */
function mostrarFormulario() {

if(!formCreado){
    /* Creamos el div contenedor del formulario */
    var formContainer = document.createElement("div");

    //Le asignamos un id
    formContainer.id = "formContainer";

    //Le asignamos propiedades de CSS para probar
    //formContainer.style.backgroundColor="blue";

    //Le añadimos el formContainer al div principal ya existente
    divPrincipal.appendChild(formContainer);

    /* Creamos el formulario */
    var form = document.createElement("form");
    form.id = "form";
    formContainer.appendChild(form);

    //Añadimos una imagen
    let divImagen = document.createElement("div");
    divImagen.id = "contenedorImagenes";

    var imagenForm = document.createElement("img");
    imagenForm.id ="imagenForm";
    imagenForm.src = "Pictures/Save_The_Date.gif";
    imagenForm.alt = "Save the date";

    divImagen.appendChild(imagenForm)
    form.appendChild(imagenForm);


    //Creamos los campos del formulario
    //Nombre
    var nombre = document.createElement("p");
    nombre.textContent = "Nombre";
    form.appendChild(nombre);

    var inputNombre = document.createElement("input");
    inputNombre.className = "formItem";
    inputNombre.type = "text";
    inputNombre.name = "nombre";
    inputNombre.size = "60";
    form.appendChild(inputNombre);


    //Apellidos
    var apellidos = document.createElement("p");
    apellidos.textContent = "Apellidos";
    form.appendChild(apellidos);

    var inputApellidos = document.createElement("input");
    inputApellidos.className = "formItem";
    inputApellidos.type = "text";
    inputApellidos.name = "apellidos";
    inputApellidos.size = "60";
    form.appendChild(inputApellidos);

    //DNI
    var dni = document.createElement("p");
    dni.textContent = "DNI";
    form.appendChild(dni);

    var inputDni = document.createElement("input");
    inputDni.className = "formItem";
    inputDni.type = "text";
    inputDni.name = "dni";
    inputDni.size = "60";
    form.appendChild(inputDni);

    //Teléfono
    var telefono = document.createElement("p");
    telefono.textContent = "Telefono";
    form.appendChild(telefono);

    var inputTelefono = document.createElement("input");
    inputTelefono.className = "formItem";
    inputTelefono.type = "number";
    inputTelefono.name = "dni";
    inputTelefono.size = "60";
    form.appendChild(inputTelefono);

    //Dirección
    var direccion = document.createElement("p");
    direccion.textContent = "Dirección";
    form.appendChild(direccion);

    var inputDireccion = document.createElement("input");
    inputDireccion.className = "formItem";
    inputDireccion.type = "text";
    inputDireccion.name = "direccion";
    inputDireccion.size = "60";
    form.appendChild(inputDireccion);

    //Menú
    var menu = document.createElement("p");
    menu.textContent = "Menú";
    form.appendChild(menu);

    var selectorMenu = document.createElement("select");
    selectorMenu.className = "formItem";
    selectorMenu.name = "selectorMenu";
    var optionMenu1 = document.createElement("option");
    optionMenu1.textContent = "Normal";
    var optionMenu2 = document.createElement("option");
    optionMenu2.textContent = "Vegetariano";
    var optionMenu3 = document.createElement("option");
    optionMenu3.textContent = "Vegano";

    form.appendChild(selectorMenu);
    selectorMenu.appendChild(optionMenu1);
    selectorMenu.appendChild(optionMenu2);
    selectorMenu.appendChild(optionMenu3);

    // Acompañantes
    //Cremos el título
    var acompañantes = document.createElement("p");
    acompañantes.textContent = "Acompañantes";
    form.appendChild(acompañantes);

    let opcionesAcompañantes = [0, 1, 2, 3];
    createRadioButton(opcionesAcompañantes, "acompañantes");
    

    //Transporte
    //Cremos el título
    var transporte = document.createElement("p");
    transporte.textContent = "Transporte";
    form.appendChild(transporte);

    let opcionesTransporte = ["Coche propio", "Bus desde Palma", "Bus desde Manacor", "Nave espacial"];
    createRadioButton(opcionesTransporte, "transporte");

    //EstilosMusicales
    //Cremos el título
    var EstilosMusicales = document.createElement("p");
    EstilosMusicales.textContent = "¿Qué música quieres que suene?";
    form.appendChild(EstilosMusicales);

    estilos = ["Jazz", "Pop", "Reggaeton", "Años 80", "ABBA"];
    createCheckbox(estilos, EstilosMusicales);

    //Comentarios
    var comentarios = document.createElement("p");
    comentarios.textContent = "Comentarios";
    form.appendChild(comentarios);

    var commentTextArea = document.createElement("textarea");
    commentTextArea.name = "comments";
    commentTextArea.rows = "3";
    commentTextArea.cols = "60";
    form.appendChild(commentTextArea);

    //Añadir espacio antes del botón de envío 
    var espacio = document.createElement("p");
    form.appendChild(espacio);

    //Botón de Envío
    var sendButton = document.createElement("input");
    sendButton.type = "submit";
    sendButton.style.padding = "10px";
    sendButton.style.margin = "5px";
    sendButton.style.color = "#FFFFFF";
    sendButton.style.backgroundColor = "#2B00FF";
    sendButton.style.left = "300px";
    sendButton.style.borderRadius = "30%";
    sendButton.class = "sendButton";
    sendButton.value = "Enviar";
    form.appendChild(sendButton);

    formCreado = true;
    }  
}

/*** MÉTODOS PARA CREACIÓN DE ITEMS DEL FORMULARIO ***/
/**
 * Crea, para cada elemento del Array, un imput de tipo radio, y asigna el mismo elemento a su propiedad value.
 * Añade al formulario el input como child
 * crea el label del input y asigna el elemento a la propiedad "for"
 * Añade al formulario el label como child
 * 
 * @param {*} opciones Array con el listado de opciones de nuestro radioButton a crear
 * @param nombreSelector Indica el nombre del input radio, 
 * de manera que todos los inputs creados pertenezcan al mismo conjunto
 */
function createRadioButton(opciones, nombreSelector) {

    opciones.forEach((element) => {
        //Creamos el input
        var acompañantesSelector = document.createElement("input");
        acompañantesSelector.setAttribute("type", "radio");
        acompañantesSelector.setAttribute("name", nombreSelector);
        acompañantesSelector.setAttribute("value", element);

        form.appendChild(acompañantesSelector);

        //Creamos el label
        var labelAcompañantes = document.createElement("label");
        labelAcompañantes.setAttribute("for", element);
        labelAcompañantes.textContent = element;

        form.appendChild(labelAcompañantes);
    })
}

/**
 * Crea, para cada elemento del Array, un imput de tipo checkbox, y asigna el mismo elemento a su propiedad value.
 * Añade al formulario el input como child
 * crea el label del input y asigna el elemento a la propiedad "for"
 * Añade al formulario el label como child
 * 
 * @param {*} opciones Array con el listado de opciones de nuestro checkbox a crear
 * @param nombreSelector Indica el nombre del input checkbox, 
 * de manera que todos los inputs creados pertenezcan al mismo conjunto
 */
function createCheckbox(opciones, nombreSelector) {

    opciones.forEach(element => {
        //Creamos el input
        var inputEstMusicales = document.createElement("input");
        inputEstMusicales.type = "checkbox";
        inputEstMusicales.name = nombreSelector;
        form.appendChild(inputEstMusicales);
        //Creamos el label
        var labelEstMusicales = document.createElement("label");
        labelEstMusicales.setAttribute("for", element);
        labelEstMusicales.textContent = element;

        form.appendChild(labelEstMusicales);
    });
}