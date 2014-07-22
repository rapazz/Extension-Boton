$(document).ready(function() {


var imgURL = chrome.extension.getURL("images/rrhh.png")

var texto = '<ul class="nav-left list-unstyled"><li class="dropdown"> \
                <a href="#" class="gb_c gb_e" name="step3" id="step3" data-toggle="dropdown"><i class="gb_c gb_e">Aplicaciones KCC</i></a>\
               <div class="dropdown-menu with-arrow panel panel-default admin-options" id="step4" ui-not-close-on-click>\
                     <ul class="list-group"> \
                          <li class="gb_l" align="center">\
                          <img width="64px" height="64px" align="center" src="'+ imgURL  +'"></li> \
                           </ul></div></li></ul>'




var texto2= '<li class="gb_l" aria-grabbed="false"><a class="gb_b" id="gb53" href="http://desrrhh.kcl.cl/?tab=mC" target="_blank" rel="noreferrer" data-pid="53" data-ved="0CAsQwS4oCA"> <img width="64px" src="http://static.phalconphp.com/img/phalcon-22.png"><span class="gb_q">Proyectos</span></a></li>'

//Cambio de Version
//$('.gb_gc.gb_e.gb_vc.gb_oc:first').before(texto)
$('.gb_rc.gb_e.gb_Hc.gb_zc:first').before(texto)

$(".gb_C.gb_v:first").prepend(texto2)



if (document.getElementById ('step3')!=null)
document.getElementById ('step3').addEventListener("click",  function(){
 {

if (document.getElementById("step4").style.display!="block")
 document.getElementById("step4").style.display="block";
else 
	document.getElementById("step4").style.display="none"
 }
},false);





});




