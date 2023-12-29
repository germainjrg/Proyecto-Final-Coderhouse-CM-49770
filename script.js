const encendido = "Encendido";
const apagado = "Apagado";
const apagar = "Apagar"
const encender = "Encender";

urlConsultaLima = "https://api.open-meteo.com/v1/forecast?latitude=-12.06&longitude=-77.0375&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m";

function equipo (estado, idBoton, idEstadoMostrado, textoBoton) {
    this.estado = estado;
    this.boton = document.getElementById(idBoton);
    this.estadoMostrado = document.getElementById(idEstadoMostrado);
    this.textoGuardadoBoton = textoBoton;
}

let luces = new equipo (apagado, "botonLuces", "estadoLuces", encender);
let lavadora = new equipo (apagado, "botonLavadora", "estadoLavadora", encender);
let secadora = new equipo (apagado, "botonSecadora", "estadoSecadora", encender);
let cocina = new equipo (apagado, "botonCocina", "estadoCocina", encender);
let lavavajillas = new equipo (apagado, "botonLavavajillas", "estadoLavavajillas", encender);
let refrigeradora = new equipo (apagado, "botonRefrigeradora", "estadoRefrigeradora", encender);
let computadora = new equipo (apagado, "botonComputadora", "estadoComputadora", encender);
let televisor = new equipo (apagado, "botonTelevisor", "estadoTelevisor", encender);
let sonido = new equipo (apagado, "botonSonido", "estadoSonido", encender);

let equiposDeCasa = [luces,lavadora,secadora,cocina,lavavajillas,refrigeradora,computadora,televisor,sonido];


function cambiarColor(estadoEquipo, idElementoHTML) {
    let elemento = document.getElementById(idElementoHTML);
    elemento.style.backgroundColor = (estadoEquipo == encendido) ? "green" : "red";
}

function actualizarEquiposEncendidos() {
    let totalEquiposEncendidos
    
    for (aparato of equiposDeCasa){
        totalEquiposEncendidos += aparato.estado == encendido ? 1 : 0
    }

    let indicadorDeEquiposEncendidos = document.getElementById("cantidadDeEquiposEncendidos")
    indicadorDeEquiposEncendidos.textContent = "Equipos encendidos en este momento: " + totalEquiposEncendidos;
}

function cargarEstados (){

    //carga de temperatura
    fetch(urlConsultaLima)
    .then(response => response.json())
    //.then(data => console.table(data))
    .then(data => {
        const temperatura = data.current
        //console.log(temperatura.temperature_2m)

        let indicador = document.getElementById("indicadorDeTemperatura")
        indicador.textContent += temperatura.temperature_2m + " °C"
    })
    .catch(error => console.error('Error: No se pudo conseguir la temperatura.', error))

    actualizarEquiposEncendidos();

    // CARGAR ESTADO DE LUCES
    let estadoLucesGuardado_jsonstring = localStorage.getItem("estadoLuces");
    let estadoLucesRecuperado = JSON.parse(estadoLucesGuardado_jsonstring);
    luces.estado = estadoLucesRecuperado.estado;
    luces.estadoMostrado.value = luces.estado;
    luces.boton.innerText = estadoLucesRecuperado.textoGuardadoBoton;
    cambiarColor(luces.estadoMostrado.value,"estadoLuces");

    // CARGAR ESTADO DE LAVADORA
    let estadoLavadoraGuardado_jsonstring = localStorage.getItem("estadoLavadora");
    let estadoLavadoraRecuperado = JSON.parse(estadoLavadoraGuardado_jsonstring);
    lavadora.estado = estadoLavadoraRecuperado.estado;
    lavadora.estadoMostrado.value = lavadora.estado;
    lavadora.boton.innerText = estadoLavadoraRecuperado.textoGuardadoBoton;
    cambiarColor(lavadora.estadoMostrado.value,"estadoLavadora");

    // CARGAR ESTADO DE SECADORA
    let estadoSecadoraGuardado_jsonstring = localStorage.getItem("estadoSecadora");
    let estadoSecadoraRecuperado = JSON.parse(estadoSecadoraGuardado_jsonstring);
    secadora.estado = estadoSecadoraRecuperado.estado;
    secadora.estadoMostrado.value = secadora.estado;
    secadora.boton.innerText = estadoSecadoraRecuperado.textoGuardadoBoton;
    cambiarColor(secadora.estadoMostrado.value,"estadoSecadora");
    
    // CARGAR ESTADO DE COCINA
    let estadoCocinaGuardado_jsonstring = localStorage.getItem("estadoCocina");
    let estadoCocinaRecuperado = JSON.parse(estadoCocinaGuardado_jsonstring);
    cocina.estado = estadoCocinaRecuperado.estado;
    cocina.estadoMostrado.value = cocina.estado;
    cocina.boton.innerText = estadoCocinaRecuperado.textoGuardadoBoton;
    cambiarColor(cocina.estadoMostrado.value,"estadoCocina");

    // CARGAR ESTADO DE LAVAVAJILLAS
    let estadoLavavajillasGuardado_jsonstring = localStorage.getItem("estadoLavavajillas");
    let estadoLavavajillasRecuperado = JSON.parse(estadoLavavajillasGuardado_jsonstring);
    lavavajillas.estado = estadoLavavajillasRecuperado.estado;
    lavavajillas.estadoMostrado.value = lavavajillas.estado;
    lavavajillas.boton.innerText = estadoLavavajillasRecuperado.textoGuardadoBoton;
    cambiarColor(lavavajillas.estadoMostrado.value,"estadoLavavajillas");

    // CARGAR ESTADO DE REFRIGERADORA
    let estadoRefrigeradoraGuardado_jsonstring = localStorage.getItem("estadoRefrigeradora");
    let estadoRefrigeradoraRecuperado = JSON.parse(estadoRefrigeradoraGuardado_jsonstring);
    refrigeradora.estado = estadoRefrigeradoraRecuperado.estado;
    refrigeradora.estadoMostrado.value = refrigeradora.estado;
    refrigeradora.boton.innerText = estadoRefrigeradoraRecuperado.textoGuardadoBoton;
    cambiarColor(refrigeradora.estadoMostrado.value,"estadoRefrigeradora");
    
    // CARGAR ESTADO DE COMPUTADORA
    let estadoComputadoraGuardado_jsonstring = localStorage.getItem("estadoComputadora");
    let estadoComputadoraRecuperado = JSON.parse(estadoComputadoraGuardado_jsonstring);
    computadora.estado = estadoComputadoraRecuperado.estado;
    computadora.estadoMostrado.value = computadora.estado;
    computadora.boton.innerText = estadoComputadoraRecuperado.textoGuardadoBoton;
    cambiarColor(computadora.estadoMostrado.value,"estadoComputadora");

    // CARGAR ESTADO DE TELEVISOR
    let estadoTelevisorGuardado_jsonstring = localStorage.getItem("estadoTelevisor");
    let estadoTelevisorRecuperado = JSON.parse(estadoTelevisorGuardado_jsonstring);
    televisor.estado = estadoTelevisorRecuperado.estado;
    televisor.estadoMostrado.value = televisor.estado;
    televisor.boton.innerText = estadoTelevisorRecuperado.textoGuardadoBoton;
    cambiarColor(televisor.estadoMostrado.value,"estadoTelevisor");

    // CARGAR ESTADO DE SONIDO
    let estadoSonidoGuardado_jsonstring = localStorage.getItem("estadoSonido");
    let estadoSonidoRecuperado = JSON.parse(estadoSonidoGuardado_jsonstring);
    sonido.estado = estadoSonidoRecuperado.estado;
    sonido.estadoMostrado.value = sonido.estado;
    sonido.boton.innerText = estadoSonidoRecuperado.textoGuardadoBoton;
    cambiarColor(luces.estadoMostrado.value,"estadoSonido");
    
}

//Se espera el evento del boton de LUCES
luces.boton.addEventListener("click", function() {
    let estadoGuardado = luces.estado;
    estadoGuardado = (estadoGuardado == encendido) ? apagado : encendido;
    luces.boton.innerText = (estadoGuardado == encendido) ? apagar : encender;
    luces.textoGuardadoBoton = luces.boton.innerText;
    luces.estadoMostrado.value = (luces.boton.innerText == encender) ?  apagado : encendido;
    cambiarColor(estadoGuardado,"estadoLuces");
    luces.estado = estadoGuardado;
    let lucesJSON = JSON.stringify(luces);
    localStorage.setItem("estadoLuces", lucesJSON);

    Swal.fire({
        title: 'Cambio de estado',
        text: 'Has ' + luces.estadoMostrado.value.toUpperCase() + " las luces con exito.",
        icon: 'success',
    })

    actualizarEquiposEncendidos();
});

//Se espera el evento del boton de LAVADORA
lavadora.boton.addEventListener("click", function() {
    let estadoGuardado = lavadora.estado;
    estadoGuardado = (estadoGuardado == encendido) ? apagado : encendido;
    lavadora.boton.innerText = (estadoGuardado == encendido) ? apagar : encender;
    lavadora.textoGuardadoBoton = lavadora.boton.innerText;
    lavadora.estadoMostrado.value = (lavadora.boton.innerText == encender) ?  apagado : encendido;
    cambiarColor(estadoGuardado,"estadoLavadora");
    lavadora.estado = estadoGuardado;
    let lavadoraJSON = JSON.stringify(lavadora);
    localStorage.setItem("estadoLavadora", lavadoraJSON);

    Swal.fire({
        title: 'Cambio de estado',
        text: 'Has ' + lavadora.estadoMostrado.value.toUpperCase() + " la lavadora con exito.",
        icon: 'success',
    })

    actualizarEquiposEncendidos();
});

//Se espera el evento del boton de SECADORA
secadora.boton.addEventListener("click", function() {
    let estadoGuardado = secadora.estado;
    estadoGuardado = (estadoGuardado == encendido) ? apagado : encendido;
    secadora.boton.innerText = (estadoGuardado == encendido) ? apagar : encender;
    secadora.textoGuardadoBoton = secadora.boton.innerText;
    secadora.estadoMostrado.value = (secadora.boton.innerText == encender) ?  apagado : encendido;
    cambiarColor(estadoGuardado,"estadoSecadora");
    secadora.estado = estadoGuardado;
    let secadoraJSON = JSON.stringify(secadora);
    localStorage.setItem("estadoSecadora", secadoraJSON);

    Swal.fire({
        title: 'Cambio de estado',
        text: 'Has ' + secadora.estadoMostrado.value.toUpperCase() + " la secadora con exito.",
        icon: 'success',
    })

    actualizarEquiposEncendidos();
});

//Se espera el evento del boton de COCINA
cocina.boton.addEventListener("click", function() {
    let estadoGuardado = cocina.estado;
    estadoGuardado = (estadoGuardado == encendido) ? apagado : encendido;
    cocina.boton.innerText = (estadoGuardado == encendido) ? apagar : encender;
    cocina.textoGuardadoBoton = cocina.boton.innerText;
    cocina.estadoMostrado.value = (cocina.boton.innerText == encender) ?  apagado : encendido;
    cambiarColor(estadoGuardado,"estadoCocina");
    cocina.estado = estadoGuardado;
    let cocinaJSON = JSON.stringify(cocina);
    localStorage.setItem("estadoCocina", cocinaJSON);

    Swal.fire({
        title: 'Cambio de estado',
        text: 'Has ' + cocina.estadoMostrado.value.toUpperCase() + " la cocina con exito.",
        icon: 'success',
    })

    actualizarEquiposEncendidos();
});

//Se espera el evento del boton de LAVAVAJILLAS
lavavajillas.boton.addEventListener("click", function() {
    let estadoGuardado = lavavajillas.estado;
    estadoGuardado = (estadoGuardado == encendido) ? apagado : encendido;
    lavavajillas.boton.innerText = (estadoGuardado == encendido) ? apagar : encender;
    lavavajillas.textoGuardadoBoton = lavavajillas.boton.innerText;
    lavavajillas.estadoMostrado.value = (lavavajillas.boton.innerText == encender) ?  apagado : encendido;
    cambiarColor(estadoGuardado,"estadoLavavajillas");
    lavavajillas.estado = estadoGuardado;
    let lavavajillasJSONJSON = JSON.stringify(lavavajillas);
    localStorage.setItem("estadoLavavajillas", lavavajillasJSONJSON);

    Swal.fire({
        title: 'Cambio de estado',
        text: 'Has ' + lavavajillas.estadoMostrado.value.toUpperCase() + " el lavavajillas con exito.",
        icon: 'success',
    })

    actualizarEquiposEncendidos();
});

//Se espera el evento del boton de refrigeradora
refrigeradora.boton.addEventListener("click", function() {
    let estadoGuardado = refrigeradora.estado;
    estadoGuardado = (estadoGuardado == encendido) ? apagado : encendido;
    refrigeradora.boton.innerText = (estadoGuardado == encendido) ? apagar : encender;
    refrigeradora.textoGuardadoBoton = refrigeradora.boton.innerText;
    refrigeradora.estadoMostrado.value = (refrigeradora.boton.innerText == encender) ?  apagado : encendido;
    cambiarColor(estadoGuardado,"estadoRefrigeradora");
    refrigeradora.estado = estadoGuardado;
    let refrigeradoraJSON = JSON.stringify(refrigeradora);
    localStorage.setItem("estadoRefrigeradora", refrigeradoraJSON);

    Swal.fire({
        title: 'Cambio de estado',
        text: 'Has ' + refrigeradora.estadoMostrado.value.toUpperCase() + " la refrigeradora con exito.",
        icon: 'success',
    })

    actualizarEquiposEncendidos();
});

//Se espera el evento del boton de computadora
computadora.boton.addEventListener("click", function() {
    let estadoGuardado = computadora.estado;
    estadoGuardado = (estadoGuardado == encendido) ? apagado : encendido;
    computadora.boton.innerText = (estadoGuardado == encendido) ? apagar : encender;
    computadora.textoGuardadoBoton = computadora.boton.innerText;
    computadora.estadoMostrado.value = (computadora.boton.innerText == encender) ?  apagado : encendido;
    cambiarColor(estadoGuardado,"estadoComputadora");
    computadora.estado = estadoGuardado;
    let computadoraJSON = JSON.stringify(computadora);
    localStorage.setItem("estadoComputadora", computadoraJSON);

    Swal.fire({
        title: 'Cambio de estado',
        text: 'Has ' + computadora.estadoMostrado.value.toUpperCase() + " la computadora con exito.",
        icon: 'success',
    })

    actualizarEquiposEncendidos();
});

//Se espera el evento del boton de televisor
televisor.boton.addEventListener("click", function() {
    let estadoGuardado = televisor.estado;
    estadoGuardado = (estadoGuardado == encendido) ? apagado : encendido;
    televisor.boton.innerText = (estadoGuardado == encendido) ? apagar : encender;
    televisor.textoGuardadoBoton = televisor.boton.innerText;
    televisor.estadoMostrado.value = (televisor.boton.innerText == encender) ?  apagado : encendido;
    cambiarColor(estadoGuardado,"estadoTelevisor");
    televisor.estado = estadoGuardado;
    let televisorJSON = JSON.stringify(televisor);
    localStorage.setItem("estadoTelevisor", televisorJSON);

    Swal.fire({
        title: 'Cambio de estado',
        text: 'Has ' + televisor.estadoMostrado.value.toUpperCase() + " el televisor con exito.",
        icon: 'success',
    })

    actualizarEquiposEncendidos();
});

//Se espera el evento del boton de Sonido
sonido.boton.addEventListener("click", function() {
    let estadoGuardado = sonido.estado;
    estadoGuardado = (estadoGuardado == encendido) ? apagado : encendido;
    sonido.boton.innerText = (estadoGuardado == encendido) ? apagar : encender;
    sonido.textoGuardadoBoton = sonido.boton.innerText;
    sonido.estadoMostrado.value = (sonido.boton.innerText == encender) ?  apagado : encendido;
    cambiarColor(estadoGuardado,"estadoSonido");
    sonido.estado = estadoGuardado;
    let sonidoJSON = JSON.stringify(sonido);
    localStorage.setItem("estadoSonido", sonidoJSON);

    Swal.fire({
        title: 'Cambio de estado',
        text: 'Has ' + sonido.estadoMostrado.value.toUpperCase() + " el sonido con exito.",
        icon: 'success',
    })

    actualizarEquiposEncendidos();
});










/* Codigo Preentrega #2
inicio ();

function inicio () {
    alert("Bienvenido a app de asistencia del hogar. \nPor favor, abre la consola y reinicia la pagina para comenzar.");
    console.log("Estos son los equipos de tu hogar:");
    console.table(equiposDeCasa);
    
    let consulta = parseInt(prompt("¿Quieres ver los equipos segun su estado? \n Escribe 1 para los encendidos. \n Escribe 0 para los apagados."));

    let equiposConsultados = equiposDeCasa.filter(function(equipo) {
        
        if (consulta == 1) {
            return equipo.estado == "encendido";
        } else {
            return equipo.estado == "apagado";
        }
        
    });

    console.table(equiposConsultados);

    if (confirm("¿Quieres cambiar el estado de algun equipo?")) {
        let equipo_a_modificar = prompt("Escribe el nombre del equipo a encender/apagar").toLowerCase();
        let busqueda = [];
        busqueda = equiposDeCasa.find(x => x.nombre == equipo_a_modificar);
        console.log(busqueda);
        console.log(busqueda.length);
/*         if (busqueda.length > 0) {
            
        } else {
            
        } 

    } else {
        alert("Gracias por usar el asistente del hogar.");
    }
}  */