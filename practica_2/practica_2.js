var Boton_LimpiarLienzo = document.getElementById('boton_Limpio');
var ContentDibujo = document.getElementById('mouseContentCanvas');
var LienzoDibujo = ContentDibujo.getContext('2d');
var anchoCanvas = ContentDibujo.width;
var largoCanvas = ContentDibujo.height;
var colorcito = document.getElementById('idColorUser');
var ClickActivo = false;
var color = '#000000';

Boton_LimpiarLienzo.addEventListener('click', dibujo_Limpiar);

ContentDibujo.addEventListener('mousedown', dibujo_SosteniendoClick);

function dibujo_SosteniendoClick(eventoSostenido)
{
   ContentDibujo.addEventListener('mousemove', dibujo_MoviendoClick);
   color = colorcito.value;
   ClickActivo = true;
}

function dibujo_MoviendoClick(eventoMovimiento)
{
   ContentDibujo.addEventListener('mouseup', dibujo_SoltandoClick);

   xinicial = eventoMovimiento.clientX - 7;
   yinicial = eventoMovimiento.clientY - 49;

   xfinal = eventoMovimiento.clientX - 8;
   yfinal = eventoMovimiento.clientY - 50;

   if( ClickActivo == true )
   {
      dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, LienzoDibujo);
   }
	
   var coordenadasLienzo = 'X = ' + xfinal + ' Y = ' + yfinal;
   document.getElementById('vistaCoordenadas').innerHTML = coordenadasLienzo;
}

function dibujo_SoltandoClick(eventoSuelto)
{
   ClickActivo = false;
}

function dibujo_Limpiar()
{
   LienzoDibujo.clearRect(0 , 0, anchoCanvas, largoCanvas);
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) 
{
   lienzo.beginPath();// Iniciar el dibujo
   lienzo.strokeStyle = color;// Indicar color del traso
   lienzo.moveTo(xinicial, yinicial);// Indicar primeras cordenada de la linea
   lienzo.moveTo(xinicial, yinicial);// Indicar primeras cordenada de la linea
   lienzo.lineTo(xfinal, yfinal);// Indicar cordenads finales de la linea
   lienzo.stroke();// Indicar el fin del dibujo de la linea
   lienzo.closePath();// Cierre definitivo del dibujo
}