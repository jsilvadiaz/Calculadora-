var texto = document.getElementById("paisito");
var boton = document.getElementById("botoncito");
var botona = document.getElementById("arg");
var botonb = document.getElementById("ch");
var botonc = document.getElementById("ve");
var botond = document.getElementById("pe");
var botone = document.getElementById("co");

boton.addEventListener("click",verpais);
botona.addEventListener("click", argentina);
botonb.addEventListener("click",chile);
botonc.addEventListener("click", venezuela);
botond.addEventListener("click",peru);
botone.addEventListener("click",colombia);

var dolarargentina = 200;
var dolarchile = 800;
var dolarvenezuela = 4.30;
var dolarcolombia = 4000;
var dolarperu = 3;


function verpais()
{
    alert("ahora elije un pais");
}

function argentina()
{
    var x = texto.value;
    var pesosargentinos = x*dolarargentina
    alert("usted tiene " + " " + pesosargentinos + " " + "pesos argentinos");
}

function chile()
{
    var x = texto.value;
    var pesoschilenos = x*dolarchile
    alert("usted tiene " + " "+ pesoschilenos +" " + "pesos chilenos");
}

function venezuela()
{
    var x = texto.value;
    var bolivaritos = x*dolarvenezuela
    alert("usted tiene " + " "+ bolivaritos +" " + "bolivares digitales");
}

function peru()
{
    var x = texto.value;
    var solperuano = x*dolarperu
    alert("usted tiene " + " "+ solperuano +" " + "soles");
}

function colombia()
{
    var x = texto.value;
    var pesoscolombianos = x*dolarcolombia
    alert("usted tiene " + " "+ pesoscolombianos +" " + "pesos");
}

document.write("Gracias por elejinros")