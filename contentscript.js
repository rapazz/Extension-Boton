$(document).ready(function() {


var texto = '<ul class="nav-left list-unstyled"><li class="dropdown"> \
                <a href="#" class="dropdown-toggle" name="step1" id="step1" data-toggle="dropdown"><i class="gb_c gb_e">Servicios KCC</i></a>\
               <div class="dropdown-menu with-arrow panel panel-default admin-options" id="step2" ui-not-close-on-click>\
                    <div class="divTitulo"> Ejemplo Menu(sin formato) </div> <ul class="list-group"><li class="gb_l">\
                    <a class="gb_b" id="gb53" href="http://desrrhh.kcl.cl/?tab=mC" target="_blank" rel="noreferrer" data-pid="53" data-ved="0CAsQwS4oCA"> \
                          <img width="64px" height="64px" align="center"  src="https://sites.google.com/a/kcl.cl/miespacio/_/rsrc/1402579585773/home/Boton-RRHH-03.png"></a></li> \
                          <li class="gb_l">\
                          <img width="64px" height="64px" align="center" src="https://sites.google.com/a/kcl.cl/miespacio/_/rsrc/1402322073637/home/Boton-desempe%C3%B1o-02.png"></li> \
                          <li class="gb_l">\
                          <a class="gb_b" id="gb53" href="http://organigrama.kcl.cl" target="_blank" rel="noreferrer" data-pid="53" data-ved="0CAsQwS4oCA"> \
                          <img width="64px" height="64px" align="center" src="http://www.transparencia.catamarca.gov.ar/administracion/multimedia/images/organigrama.png"></a></li> \
                          <li class="gb_l">\
                          <img width="64px" height="64px" align="center" src="http://static.phalconphp.com/img/phalcon-22.png"><div class="divIcono"> RRHH </div></li> \
                          <li class="gb_l">\
                          <img width="64px" height="64px" align="center" src="http://static.phalconphp.com/img/phalcon-22.png"><div class="divIcono"> RRHH </div></li> \
                           </ul></div></li></ul>'




var texto2= '<li class="gb_l" aria-grabbed="false"><a class="gb_b" id="gb53" href="http://desrrhh.kcl.cl/?tab=mC" target="_blank" rel="noreferrer" data-pid="53" data-ved="0CAsQwS4oCA"> <img width="64px" src="http://static.phalconphp.com/img/phalcon-22.png"><span class="gb_q">Proyectos</span></a></li>'

//Cambio de Version
//$('.gb_gc.gb_e.gb_vc.gb_oc:first').before(texto)
$('.gb_rc.gb_e.gb_Hc.gb_zc:first').before(texto)

$(".gb_C.gb_v:first").prepend(texto2)



if (document.getElementById ('step1')!=null)
document.getElementById ('step1').addEventListener("click",  function(){
 {

if (document.getElementById("step2").style.display!="block")
 document.getElementById("step2").style.display="block";
else 
	document.getElementById("step2").style.display="none"
 }
},false);





});




