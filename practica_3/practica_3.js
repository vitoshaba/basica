var canva = document.getElementById("mi_canvas");
var papel = canva.getContext("2d");

var fondo = {url:"tile.png",cargaOk: false};
var vaca = {url:"vaca.png",cargaOk: false};
var cerdo = {url:"cerdo.png",cargaOk: false};
var pollo = {url:"pollo.png",cargaOk: false};
var teclas = {UP:38, DOWN:40, LEFT: 37, RIGHT:39};
var total_vacas = aleatorio(0,50);
var total_pollos = aleatorio(0,50);
var cx = 150, cy = 150;
var movimiento = 5;
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load",cargarFondo);
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load",cargarVacas);
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load",cargarCerdo);
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load",cargarPollos);
document.addEventListener("keydown",moverCerdo);

functionaleatorio(min,max){
  var res;
  res = Math.floor(Math.random()*(max - min +1))+min;
  return res;
}
functioncargarFondo(){
  fondo.cargaOk = true;
  dibujar();
}
functioncargarVacas(){
  vaca.cargaOk = true;
  vaca.x = [];
  vaca.y = [];
  for(var n=0; n < total_vacas; n++){
    vaca.x[n] = aleatorio(0,7) * 60;
    vaca.y[n] = aleatorio(0,7) * 60;
  }
  dibujar();
}
functioncargarCerdo(){
  cerdo.cargaOk = true;
  dibujar();
}
functioncargarPollos(){
  pollo.cargaOk = true;
  pollo.x = [];
  pollo.y = [];
  for(var e=0; e < total_pollos; e++){
    pollo.x[e] = aleatorio(0,7) * 80;
    pollo.y[e] = aleatorio(0,4) * 80;
  }
  dibujar();
}
functionmoverCerdo(evento){
  switch (evento.keyCode){
    caseteclas.UP
      cy = cy - movimiento;
      if(cy < 0) cy = 0;
      dibujar();
    break;
    caseteclas.DOWN:
      cy = cy + movimiento;
      if(cy > 420) cy = 420;
      dibujar();
    break;
    caseteclas.LEFT:
      cx = cx - movimiento;
      if(cx < 0) cx = 0;
      dibujar();
    break;
    caseteclas.RIGHT:
      cx = cx + movimiento;
      if(cx > 420)cx = 420;
      dibujar();
    break;
    default:
      console.log("No se realiza ninguna accion.");
  }
}
functiondibujar(){
    if(fondo.cargaOk){
        papel.drawImage(fondo.imagen,0,0);
    }
    if(vaca.cargaOk){
      for(var v=0; v < total_vacas; v++){
        papel.drawImage(vaca.imagen,vaca.x[v],vaca.y[v]);
      }
    }
    if(cerdo.cargaOk){
        papel.drawImage(cerdo.imagen,cx,cy);
    }
    if(pollo.cargaOk){
      for(var v=0; v < total_pollos; v++){
        papel.drawImage(pollo.imagen,pollo.x[v],pollo.y[v]);
      }
    }
    console.log(pollo.image);
    document.getElementById("status").innerHTML = "<p>Asi queda tu Villa platzi con:<br>" + total_vacas + " vacas, distribuidas aleatoriamente.<br>Un cerdo en la posicion ("+cx+","+cy+") y una gallina.</p>";
}