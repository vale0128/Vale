window.alert("Estás preparad@ para ver esta pagina? ");

    

function uncheck(a,b,c){ /*Función para que solo una celda por pregunta sea escogida*/

    var checkbox1 = document.getElementById(a);
    var checkbox2 = document.getElementById(b);
    var checkbox3 = document.getElementById(c);
    checkbox1.onclick = function(){
        if(checkbox1.checked != false){
            checkbox2.checked =null;
            checkbox3.checked=null;
        }
    }
    checkbox2.onclick = function(){
        if(checkbox2.checked != false){
            checkbox1.checked=null;
            checkbox3.checked=null;
        }
    }
    checkbox3.onclick = function(){
        if(checkbox3.checked != false){
            checkbox1.checked=null;
            checkbox2.checked =null;
        }
    }
    return uncheck();
}

function boton(){ /*Botón para que me abra la pagina de la solucion del test, pensaba hacerlo en popup(por eso el nonmbre, pero no pude uwu)*/
    var url="popup.html";
    var opciones = 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes,width=300,height=300,top=85,left=140';
    window.open(url,opciones);

}