const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const cores = document.querySelector('main');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 12){
        cores.classList.add('manha')
    }else{
        cores.classList.remove('manha')
    };

    if (hr >= 12 && hr < 18 ){
        cores.classList.add('tarde')
    }else{
        cores.classList.remove('tarde')
    };

    if (hr >= 18 || hr < 12 ){
        cores.classList.add('noite')
    }else{
        cores.classList.remove('noite')
    };
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
});