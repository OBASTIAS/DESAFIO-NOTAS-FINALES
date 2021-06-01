//////////////////////////////// notetable //////////////////////////////////

var nombre = prompt("Ingrese Nombre del Alumno", "Oscar Bastias");
var carrera = prompt("ingrese Nombre de la Carrera", "CSS");

document.write("<div class='container'>");
document.write("<div class='row'>");
document.write("<div class='col-md-2 font'>");
document.write("<h4 class='font-weight-bold'>Nombre:</h4>");
document.write("</div>");
document.write("<div class='col-md-10'>");
document.write("<h4>" + nombre + "</h4>");
document.write("</div>");
document.write("</div>");
document.write("<div class='row'>");
document.write("<div class='col-md-2'>");
document.write("<h4 class='font-weight-bold'>Carrera:</h4>");
document.write("</div>");
document.write("<div class='col-md-10'>");
document.write("<h4>" + carrera + "</h4>");
document.write("</div>");
document.write("</div>");
document.write("</div>");