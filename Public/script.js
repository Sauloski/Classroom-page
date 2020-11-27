let day = Miercoles;
let linkZoom;

// switch (new Date().getDay()) {
//     case 0:
//         day = "Domingo";
//         break;
//     case 1:
//         day = "Lunes";
//         break;
//     case 2:
//         day = "Martes";
//         break;
//     case 3:
//         day = "Miercoles";
//         break;
//     case 4:
//         day = "Jueves";
//         break;
//     case 5:
//         day = "Viernes";
//         break;
//     case 6:
//         day = "Sabado";
//         break;
// }

function toNextClass() {
    document.write(`<p>${until_next_class}</p>`);
}

function nextClass() {
    document.write(`<p>${next_class}</p>`);
}

function actualClass() {
    document.write(`<p>${actual_class}</p>`);
}

function todayClassDay() {
    if(microcontroladores[2].includes(day) ) {
        console.log("micro");
        horario.push([microcontroladores[0]]);
        horario.push(microcontroladores[3]);
    }

    // if(arduino[2].includes(day) ) {
    //     console.log("arduino");
    //     horario.push(arduino[0]);
    //     horario.push(arduino[3]);
    // }

    // if(calculo[2].includes(day) ) {
    //     console.log("calculo");
    //     horario.push(calculo[0]);
    //     horario.push(calculo[3]);
    // }

    // if(ctsyv[2].includes(day) ) {
    //     console.log("ctsyv");
    //     horario.push(ctsyv[0]);
    //     horario.push(ctsyv[3]);
    // }

    // if(ingles[2].includes(day) ) {
    //     console.log("ingles");
    //     horario.push([ingles[0]]);
    //     horario.push(ingles[3]);
    // }

    // if(fisica[2].includes(day) ) {
    //     console.log("fisica");
    //     horario.push(fisica[0]);
    //     horario.push(fisica[3]);
    // }
}

let h = new Date();
let hour = h.getHours();
    
let m = new Date();
let minute = m.getMinutes();
    
let s = new Date();
let second = s.getSeconds();
    
let to_string = toString(hour, minute);

let until_next_class, next_class, actual_class;

const microcontroladores = [
    "Microcontroladores",
    "Marco",
    ["Miercoles", "Jueves", "Viernes"],
    "700","840"
];

const arduino = [
    "Arduino",
    "Marco",
    ["Lunes", "Martes"],
    "1140","1320"
];

const calculo = [
    "Calculo integral",
    "Ivan",
    ["Lunes", "Martes", "Jueves"],
    "1050", "1139"
];

const ctsyv = [
    "CTSyV",
    "Lourdes",
    ["Martes"],
    "1000", "1050"
];

const ingles = [
    "Ingles",
    "Eugenia",
    ["Lunes", "Martes"],
    "700", "840"
];

const fisica = [
    "Fisica",
    "Exiquio",
    ["Martes"],
    "840", "930"
];

let hourOut = hour.toString() + minute.toString();

if(day == "Sabado" || day == "Domingo") {
    function classDay(){
        document.write("<h1>Hoy no hay clase</h1>");
    }    
}
else {
    function classDay(){
        document.write("<h1></h1>");
    }
}

if(hourOut > microcontroladores[3] && hourOut < microcontroladores[4]) {
    console.log("1");
    actual_class = "Microcontroladores";
}

else if(hourOut > arduino[3] && hourOut < arduino[4]) {
    console.log("1");
    actual_class = "Ardiuino";
}

else if(hourOut > calculo[3] && hourOut < calculo[4]) {
    console.log("1");
    actual_class = "Calculo integral";
}

else if(hourOut > ctsyv[3] && hourOut < ctsyv[4]) {
    console.log("1");
    actual_class = "CTSyV";
}

else if(hourOut > ingles[3] && hourOut < ingles[4]) {
   console.log("1");
    actual_class = "Ingles";
}

else if(hourOut > fisica[3] && hourOut < fisica[4]) {
    console.log("1");
    actual_class = "Fisica";
}

else {
    actual_class = "No hay clase";
}

let horario = [];

// if(actual_class == "Microcontroladores" || actual_class == "Arduino") {
//     linkZoom = "https://zoom.us/j/3408751805?pwd=VEg3YWlCcXNXRFI0RnE2ZUR5WFZSZz09";
// }

// else if(actual_class == "Calculo integral") {
//     linkZoom = "https://us04web.zoom.us/j/3266533247?pwd=YlBEOW5oSmZVd0dGaWM0OHQ5K0dEQT09";
// }

// else if(actual_class == "CTSyV") {
//     linkZoom = "https://us04web.zoom.us/j/3351914420?pwd=S3dpOWVIaURFcVFCK2ZOU1VlWE9Ldz09";
// } 

// else if(actual_class == "Ingles") {
//     linkZoom = "https://zoom.us/j/99097900149?pwd=eTNtMDhHWFM0WnA2MHRyMzlOSGY0Zz09";
// }

// else if(actual_class == "Fisica") {
//     linkZoom = "https://us04web.zoom.us/j/5545885473?pwd=VzZMKzBxSkx3Sngwekpoci9LaHROQT09";
// }

// else {
//     linkZoom = "google.com";
// }