(function(){ //main DADA by Jocsanex5

    //  GLOBALES
    let dia = document.querySelector('.wrapper .datos #dia'),
        mes = document.querySelector('.wrapper .datos #mes'),
        a = document.querySelector('.wrapper .datos #a'),
        diaActual = document.getElementById('diaActual'),
        btn = document.querySelector('.wrapper .datos button'),
        
        //---!!!
        fecha;

    let error,
        x = 250,
        y = 50; 

        x += 50;

    let dia_d = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
        mes_m = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        dA = document.getElementById('title_fecha');

    //menu de navegacion
        let title = document.getElementById('title'),
            content = document.getElementById('content'),
            btn_no_visible = document.getElementById('no_visible');

            //ayuda
        document.getElementById('ayuda').onclick = function(){ 
            
            document.querySelector('#ayu_qE_A').className = 'ayu_qE_A_visible';

            title.innerHTML = 'Necesitas Ayuda?';
            content.innerHTML = 'Tienes que ingresar la fecha que deseas,' +
                                ' luego presionas el boton y se mostrar el numero exacto de esa fecha!!!';
        };

            //que es
        document.getElementById('que_es').onclick = function(){ 
            
            document.querySelector('#ayu_qE_A').className = 'ayu_qE_A_visible';

            title.innerHTML = 'Que es DADA?';
            content.innerHTML = 'DADA o dia actual del año es una app web desarrollada para ' +
                                'mostrar el dia exacto de una fecha que ingreses, es decir un contador de dias.';
        };

            //autor
        document.getElementById('autor').onclick = function(){ 
            
            document.querySelector('#ayu_qE_A').className = 'ayu_qE_A_visible';

            title.innerHTML = 'By Jocsanex5';
            content.innerHTML = 'Creada y desarrollada por Jocsan Martinez. ' +
                                'Mi correo para consultas o sujerencias -jocsanex5@gmail.com';
        };

        btn_no_visible.onclick = function(){ 
            
            document.querySelector('#ayu_qE_A').className = 'ayu_qE_A_no_visible'; 
            title.innerHTML = '';
            content.innerHTML = '';
        };


        let que_es = document.getElementById('que_es'),
            autor = document.getElementById('autor');
       

    //functions
        dia.onclick = function(){ dia.className = ''; };
        mes.onclick = function(){ mes.className = ''; };
        a.onclick = function(){ a.className = ''; };

        const principal = () =>{

            btn.onclick = function(){ 
                
                validar('dia');
                validar('mes');
                validar('a');

                btn.className = 'btn';
                diaActual.className = 'DIA';
                dA.className = 'title_fecha';

                if( error == false ){

                    document.querySelector('#ayu_qE_A').className = 'ayu_qE_A_no_visible';

                    let contador1 = 0;

                    let carga = setInterval(function(){

                        contador1++;

                            btn.className = 'btnCarga';

                        if( contador1 == 4 ){

                            clearInterval(carga);

                            btn.className = 'btn';
                        }

                    }, 500);  

                    //----------Mostrando el dia---------------
                
                    let contador2 = 0;

                    let DA = setInterval( function(){ 

                        contador2++;

                        if( contador2 == 2 ){

                            diaActual.className = 'DIA';
                            dA.className = 'title_fecha';

                            clearInterval(DA);
                        }

                        diaActual.className = 'diaActual';

                        diaActual.innerHTML = dia_actual(parseInt(dia.value), parseInt(mes.value)); 

                    //---mostrar la fecha 
                        EvaluarFecha();

                        dA.className = 'title_fecha_animation'; 

                     }, 2000 );

                } else if( error == true ){

                        msjError('Upss!!!', 'Fecha invalida.');
                }
                
            };

        }

        class mostFecha{

                constructor( dia, mes ){

                    this.dia = dia;
                    this.mes = mes;
                }

            escribir = (cont) =>{

                    //--FECHA---
                dA.innerHTML = `${this.dia} de ${mes_m[this.mes-1]} 2020`;

                    //--CONT DE FECHA
                document.getElementById('cont_fecha').innerHTML = cont;

            }
        }

            const EvaluarFecha = () =>{

                //Mostrar contenido de fecha
                fecha = new mostFecha( dia.value, mes.value );

                    //escribir la fecha
                    fecha.escribir( `Faltan ${366 - dia_actual(parseInt(dia.value), parseInt(mes.value))} dias para año nuevo` );
            }

            const msjError = (error, contenido) =>{

                document.querySelector('#ayu_qE_A').className = 'ayu_qE_A_visible';
                    
                                title.innerHTML = error;
                                content.innerHTML = contenido;
            } 

            const validar = (input) =>{


                switch(input){

                    case 'dia':  

                            if( parseInt(dia.value) > 31 || dia.value == '' ){

                                dia.className = 'error';


                            }
    
                            break;

                    case 'mes': 

                            if( parseInt(mes.value) > 12 || mes.value == ''){

                                mes.className = 'error';

                                //msjError('Upss!!!', 'Fecha invalida.');
                            }

                            else{

                                mes.className = '';
                            } 

                            break;

                    case 'a': 

                            if( parseInt(a.value) != 2020  || a.value == ''){

                                a.className = 'error';

                                //msjError('Upss!!!', 'Fecha invalida.');
                            }

                            else{

                                a.className = '';
                            } 

                            break;
                }

                if( dia.className == 'error' || mes.className == 'error' || a.className == 'error' ){

                    error = true;

                    //msjError('Upss!!!', 'Fecha invalida.');
                }

                else{
                    
                    error = false;
                }
            }

            const dia_actual = (dia, mes) =>{

                let diaA;

                switch(mes){

                    case 1: //Enero
                            diaA = dia;

                            return diaA; break;

                    case 2: //febrero 
                            diaA = dia + 31;

                            return diaA; break;

                    case 3: //marzo 
                            diaA = dia + 60;

                            return diaA; break;

                    case 4: //abril
                            diaA = dia + 91;

                            return diaA; break;

                    case 5: //Mayo
                            diaA = dia + 121;

                            return diaA; break;

                    case 6: //Junio
                            diaA = dia + 152;

                            return diaA; break;

                    case 7: //Julio
                            diaA = dia + 182;

                            return diaA; break;

                    case 8: //Agosto
                            diaA = dia + 213;

                            return diaA; break;

                    case 9: //Septiembre
                            diaA = dia + 244;

                            return diaA; break;

                    case 10: //Octubre
                            diaA = dia + 274;

                            return diaA; break;

                    case 11: //Noviembre
                            diaA = dia + 305;

                            return diaA; break;

                    case 12: //Diciembre
                            diaA = dia + 335;

                            return diaA; break;
                }
            }

            const dibujarReloj = () =>{

                let today = new Date(), hours = today.getHours(), minutes = today.getMinutes(),
                    date = today.getDate(), day = today.getDay(), month = today.getMonth();

                    //operadores ternarios
                    hours = (hours == 0) ? 12: hours;
                    hours = (hours > 12) ? hours - 12 : hours;

                hours = checkTime(hours);
                minutes = checkTime(minutes);

                let hr = document.getElementById('time'). innerHTML = `${hours}:${minutes}`;

                    let time = setTimeout(function(){dibujarReloj();}, 500);
            }

            const checkTime = (e) =>{

                if( e < 10 ){
                    e = `0 ${e}`;
                }

                return e;
            }

        window.onload = function(){principal(); dibujarReloj()};
}())