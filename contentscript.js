$(document).ready(function() {




var imgURLrrhh = chrome.extension.getURL("images/rrhh.png")
var imgURLorg = chrome.extension.getURL("images/orgIco.png")
var imgURLint = chrome.extension.getURL("images/intranet.png")


var style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = chrome.extension.getURL('estilos.css');
(document.head||document.documentElement).appendChild(style);


var a = '<div class="gb_rc gb_e gb_Hc gb_zc"><div class="gb_d gb_e gb_f gb_Hc"> \
<ul class="nav-left list-unstyled"><li class="dropdown"> \
                <a href="#" class="gb_c gb_e" name="idkcl" id="idkcl" data-toggle="dropdown"><i class="gb_c gb_e">Aplicaciones KCC</i></a>\
               <div class="dropdown-menu with-arrow panel panel-default admin-options" id="idpanel" ui-not-close-on-click>\
                     <ul class="list-group"> \
                          <li class="gb_l" align="center">\
                          <a  target="_blank"  class="gb_b" href="http://rrhh.kcl.cl"><img width="50px" height="50px" align="center" src="'+ imgURLrrhh  +'"> <span class="gb_q">Of. Virtual</span></a></li> \
                           <li class="gb_l" align="center">\
                          <a  target="_blank"  class="gb_b" href="http://organigrama.kcl.cl"><img width="50px" height="50px" align="center" src="'+ imgURLorg  +'"><span class="gb_q">Organigrama</span></a></li> \
                          <li class="gb_l" align="center">\
                          <a  target="_blank"  class="gb_b" href="http://intranet.kcl.cl"><img width="50px" height="50px" align="center" src="'+ imgURLint  +'"><span class="gb_q">Intranet</span></a></li> \
                           </ul></div></li> \
                           </ul></div></div>'





//$('.gb_rc.gb_e.gb_Hc.gb_zc:first').before(a)
$('.gb_qc.gb_Hc.gb_e:first').before(a)





if (document.getElementById ('idkcl')!=null)
{



document.addEventListener("click",function(){

if (document.getElementById("idpanel").style.display=="block")
 document.getElementById("idpanel").style.display="none";

})
  
document.getElementById ('idkcl').addEventListener("click",  function(e){
 {
e.stopPropagation();
if (document.getElementById("idpanel").style.display!="block")
 document.getElementById("idpanel").style.display="block";
else 
	document.getElementById("idpanel").style.display="none"
 }
},false);

}



});




