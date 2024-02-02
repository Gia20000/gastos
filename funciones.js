//https://docs.google.com/spreadsheets/d/1W1cb_DZw1CJbakimlqxwjjEFyciQ2oWnsIG4UlVctO8/edit#gid=189206400'
// variable 
function doGet() {


  var html = HtmlService.createHtmlOutputFromFile("principal")
 return html

   };

function escribirSh(registroSalida){
 var ss= SpreadsheetApp.openById("1W1cb_DZw1CJbakimlqxwjjEFyciQ2oWnsIG4UlVctO8")
 var hojaSalidas = ss.getSheetByName("Salidas");
 var hojaProductos= ss.getSheetByName("Productos");
 var datosProductos = hojaProductos.getDataRange().getValues()
 var ref=registroSalida.ref
 var cantidad = registroSalida.cantidad
 var listaProductos = datosProductos.map(function(fila){ return fila[0]}) 
 Logger.log(listaProductos)
var indice = listaProductos.indexOf(ref)
var descripcion = datosProductos[indice][1]
var precio = datosProductos[indice][5]
var total = precio*cantidad
var fecha = new Date()
 hojaSalidas.appendRow([ref,descripcion,precio,cantidad,total,fecha]);
}




