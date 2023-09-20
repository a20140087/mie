var nombre = prompt("Esta es la Trivia de la primavera. Escribe tu nombre: ");
var c = 0;
var i = 0;
var  p1 = prompt("¿Cómo se llama al primer día de la Primavera?\nA: Primer Día de la Primavera\nB: Equinoccio de Primavera\nC: Equinoccio de Invierno");
if (p1 == "B"){
    c = c + 1;
}else{
    i = i + 1;
}

var  p1 = prompt("¿Qué sucede en el Polo Norte cuando llega la Primavera?");
if (p1 == "B"){
    c = c + 1;
}else{
    i = i + 1;
}

var  p1 = prompt("¿En qué mes empieza la Primavera en el Hemisferio Norte?\nA: Setiembre\nB: Junio\nC. Marzo");
if (p1 == "B"){
    c = c + 1;
}else{
    i = i + 1;
}

var  p1 = prompt("¿Qué es la Fiesta de la Primavera en China?\nA: La Navidad\nB: El Año Nuevo\nC. Fiestas Patrias de China");
if (p1 == "B"){
    c = c + 1;
}else{
    i = i + 1;
}

var  p1 = prompt("¿Qué es la Fiesta de la Primavera en China?\nA: La Navidad\nB: El Año Nuevo\nC. Fiestas Patrias de China");
if (p1 == "B"){
    c = c + 1;
}else{
    i = i + 1;
}

if (c > i){
    document.write(nombre + ", has superado con éxito la trivia:<br>");
    document.write("respuestas correctas: "+c+"<br>");
    
}
