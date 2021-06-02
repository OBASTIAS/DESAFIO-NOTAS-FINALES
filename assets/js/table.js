////////////////////////////// ingreso de alumnos//////////////////////////////

var nombre = prompt("Ingrese Nombre del Alumno", "Oscar Bastias");
var carrera = prompt("ingrese Nombre de la Carrera", "Desarrollo Web");


////////////////////////////// ingreso de ramos///////////////////////////////

var ramo1 = prompt("Ingrese ramo uno ", "HTML");
var ramo2 = prompt("Ingrese ramo dos", "CSS");
var ramo3 = prompt("Ingrese ramo tres", "JavaScript");

//////////////////////////////// Notas Ramo 1 /////////////////////////////////////////////////
//////////////////////////////// ingreso de notas del Ramo 1 /////////////////////////////////

var nota1 = prompt("Ingrese nota 1  [" + ramo1 + "]", 7);
var nota2 = prompt("Ingrese nota 2  [" + ramo1 + "]", 6);
var nota3 = prompt("Ingrese nota 3 [" + ramo1 + "]", 4);

//////////////////////////////// Notas  Ramo 2 ////////////////////////////////////////////////
//////////////////////////////// ingreso de notas del Ramo 2 /////////////////////////////////

var nota1_ramo2 = prompt("Ingrese nota 1  [" + ramo2 + "]", 7);
var nota2_ramo2 = prompt("Ingrese nota 2  [" + ramo2 + "]", 6);
var nota3_ramo2 = prompt("Ingrese nota 3  [" + ramo2 + "]", 4);

//////////////////////////////// header //////////////////////////////////

document.write("<header>");
document.write("<div class='container py-5'>");
document.write("<div class='row'>");
document.write("<div class='col-md-10'>");
document.write("<h1 class='display-5'>Notas Finales</h1>");
document.write("</div>");
document.write("<div class='col-md-2 col-4'>");
document.write("<img class='img-fluid' src='assets/img/logo-desafio.png' alt='logo desafio'>");
document.write("</div>");
document.write("</div>");
document.write("</div>");
document.write("</header>");

//////////////////////////////// section //////////////////////////////////

document.write("<div class='container py-4'>");
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

//////////////////////////////// table //////////////////////////////////

document.write("<section class=' bg-white '>");
document.write("<div class='container'>");
document.write("<div class='row text-white bg-dark'> ");
document.write("<div class='col-md-4'>");
document.write("<h3> Ramo </h3>");
document.write(" </div> <div class='col-md-2'> ");
document.write(" <h3> Nota 1 </h3>");
document.write("</div> <div class='col-md-2'>");
document.write("<h3> Nota 2 </h3> ");
document.write("</div> ");
document.write("<div class='col-md-2'> ");
document.write("<h3> Nota 3 </h3>");
document.write("</div>");
document.write("<div class='col-md-2'> ");
document.write("<h3> Promedio </h3>");
document.write("</div> ");
document.write("</div> ");
//////////////////////////////// ramo 1 //////////////////////////////////

var promedio_1 = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / 3; // calculo de promedio con 3 notas//
var promedio_final_1 = promedio_1.toFixed(2) // promedio con dos deciumales/

document.write("<div class='row bg-white pt-2'>");
document.write("<div class='col-md-4'>");
document.write("<h3>" + ramo1 + "</h3>");
document.write("</div>");
document.write("<div class='col-md-2'>");
document.write("<h3>" + nota1 + " </h3>");
document.write("</div> ");
document.write("<div class='col-md-2'>");
document.write("<h3>" + nota2 + " </h3>");
document.write("</div>");
document.write("<div class='col-md-2'>");
document.write("<h3>" + nota3 + " </h3>");
document.write("</div> ");
document.write("<div class='col-md-2'>");
document.write("<h3>" + promedio_final_1 + "</h3> ");
document.write("</div> ");
document.write("</div>");
//////////////////////////////// ramo 2 //////////////////////////////////

var promedio_2 = (parseInt(nota1_ramo2) + parseInt(nota2_ramo2) + parseInt(nota3_ramo2)) / 3;
var promedio_final_2 = promedio_2.toFixed(2) // promedio con dos deciumales/

document.write("<hr> ");
document.write("<div class='row bg-white'> ");
document.write("<div class='col-md-4'> ");
document.write("<h3>" + ramo2 + "</h3> ");
document.write("</div> ");
document.write("<div class='col-md-2'>");
document.write("<h3>" + nota1_ramo2 + " </h3>");
document.write("</div>");
document.write("<div class='col-md-2'>");
document.write("<h3>" + nota2_ramo2 + " </h3>");
document.write("</div> <div class='col-md-2'>");
document.write("<h3>" + nota3_ramo2 + " </h3> ");
document.write("</div> ");
document.write("<div class='col-md-2'>");
document.write("<h3> " + promedio_final_2 + " </h3>");
document.write("</div> ");
document.write("</div> ");

//////////////////////////////// ramo 3 //////////////////////////////////

var nota1_ramo3 = prompt("Ingrese nota 1  [" + ramo3 + "]", 7);
var nota2_ramo3 = prompt("Ingrese nota 2  [" + ramo3 + "]", 5);
var promedio_ram3 = prompt("Ingrese promedio esperado [" + ramo3 + "]", 5); //ingreso de promedio esperado para calculo de la incognita de la nota 3//
var x = 3; // ingreso de variable del total de notas del ramo//
var nota3 = ((parseInt(promedio_ram3) * x) - (parseInt(nota1_ramo3) + parseInt(nota2_ramo3))); // calculo de nota con incognita de la nota 3//
var nota_esperada_3 = nota3.toFixed(2) // promedio con dos deciumales/

document.write("<hr>");
document.write("<div class='row bg-white'>");
document.write("<div class='col-md-4'> ");
document.write("<h3>" + ramo3 + "</h3> ");
document.write("</div> ");
document.write("<div class='col-md-2'> ");
document.write("<h3>" + nota1_ramo3 + " </h3> ");
document.write("</div> ");
document.write("<div class='col-md-2'>");
document.write("<h3>" + nota2_ramo3 + " </h3>");
document.write("</div> ");
document.write("<div class='col-md-2'> ");
document.write("<h3>-</h3> ");
document.write("</div> ");
document.write("<div class='col-md-2'>");
document.write("<h3>" + promedio_ram3 + "</h3>");
document.write("</div> ");
document.write("</div> ");

//////////////////////////////// comentary //////////////////////////////////


document.write("<div class='row bg-white mt-4'> ");
document.write("<div class='col-md-12'> ");
document.write("<p> Para aprobar el ramo " + ramo3 + " con nota " + promedio_ram3 + ", necesitas obtener un " + nota_esperada_3 + " en la nota 3.</p>");
document.write("</div>");
document.write("</div>");
document.write("</div>}");
document.write("</section>");


////////////////////////////////by Oscar Bastias Jr////////////////////////////////