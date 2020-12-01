let next_class, actual_class, horario_ordenado, linkzoom, day, horario = [],hourOut;

const microcontroladores = [
    "Microcontroladores",
    "Marco",
    ["Miercoles", "Jueves", "Viernes"],
    "700","840",
    "https://zoom.us/j/3408751805?pwd=VEg3YWlCcXNXRFI0RnE2ZUR5WFZSZz09"
];

const arduino = [
    "Arduino",
    "Marco",
    ["Lunes", "Martes","Miercoles"],
    "1140","1320",
    "https://zoom.us/j/3408751805?pwd=VEg3YWlCcXNXRFI0RnE2ZUR5WFZSZz09"
];

const calculo = [
    "Calculo integral",
    "Ivan",
    ["Lunes", "Martes", "Jueves"],
    "1050", "1140",
    "https://us04web.zoom.us/j/3266533247?pwd=YlBEOW5oSmZVd0dGaWM0OHQ5K0dEQT09"
];

const ctsyv = [
    "CTSyV",
    "Lourdes",
    ["Martes"],
    "1000", "1050",
    "https://us04web.zoom.us/j/3351914420?pwd=S3dpOWVIaURFcVFCK2ZOU1VlWE9Ldz09"
];

const ingles = [
    "Ingles",
    "Eugenia",
    ["Lunes", "Martes"],
    "700", "840",
    "https://zoom.us/j/99097900149?pwd=eTNtMDhHWFM0WnA2MHRyMzlOSGY0Zz09"
];

const fisica = [
    "Fisica",
    "Exiquio",
    ["Martes"],
    "840", "930",
    "https://us04web.zoom.us/j/5545885473?pwd=VzZMKzBxSkx3Sngwekpoci9LaHROQT09"
];

switch (new Date().getDay()) {
    case 0:
        day = "Domingo";
        break;
    case 1:
        day = "Lunes";
        break;
    case 2:
        day = "Martes";
        break;
    case 3:
        day = "Miercoles";
        break;
    case 4:
        day = "Jueves";
        break;
    case 5:
        day = "Viernes";
        break;
    case 6:
        day = "Sabado";
        break;
}

// horario.push([microcontroladores[0],microcontroladores[3],microcontroladores[4],microcontroladores[5]]);
// horario.push([arduino[0],arduino[3],arduino[4],arduino[5]]);

function todayClassDay() {
    if(microcontroladores[2].includes(day) && hourOut > microcontroladores[4]) {
        horario.push([microcontroladores[0],microcontroladores[3],microcontroladores[4],arduino[5]]);
    }
    
    if(arduino[2].includes(day) && hourOut > arduino[4]) {
        horario.push([arduino[0],arduino[3],arduino[4],arduino[5]]);
    }
    
    if(calculo[2].includes(day) && hourOut > calculo[4]) {
        horario.push([calculo[0],calculo[3],calculo[4],calculo[5]]);
    }
        
    if(ctsyv[2].includes(day) && hourOut > ctsyv[4]) {
        horario.push([ctsyv[0],ctsyv[3],ctsyv[4],ctsyv[5]]);
    }
            
    if(ingles[2].includes(day) && hourOut > ingles[4]) {
        horario.push([ingles[0],ingles[3],ingles[4],ingles[5]]);
    }
                
    if(fisica[2].includes(day) && hourOut > fisica[4]) {
        horario.push([fisica[0],fisica[3],fisica[4],fisica[5]]);
    }
}
                
horario = horario.sort(function(a, b){return b-a});

if (horario.length === 0) {
    actual_class =  "No hay clase";
}

if (horario.length <= 1) {
    next_class = "Ya no hay clase";
}

linkzoom = horario[0][3];

function gotoclass(){
    location.replace(linkzoom);
}
                
// function horario_check() {
//     if(horario_ordenado[0][2] > hourOut){
//         console.log("hola");
//         horario_ordenado.shift()
//     }
// }

function actualClass() {
    document.write(`<p>${actual_class}</p>`);
}

function nextClass() {
    document.write(`<p>${next_class}</p>`);
}
                
actual_class = horario[0][0];

next_class = horario[1][0];

let h = new Date();
let hour = h.getHours();
                
let m = new Date();
let minute = m.getMinutes();
                
let to_string = toString(hour, minute);
                
hourOut = hour.toString() + minute.toString();