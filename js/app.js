import * as UI from './interfaz.js';
import {
    API
} from './api.js';

UI.form.addEventListener('submit', e => {
    e.preventDefault();
    // obtener data
    const ARTIST = document.getElementById('artista').value;
    const SONG = document.getElementById('cancion').value;
    // validamos las entradas
    if (ARTIST === '' || SONG === '') {
        // mostramos y ocultamos error
        UI.mensajes.innerHTML = 'Error. Todos los campos son obligatorios';
        UI.mensajes.classList.add('error');
        setTimeout(() => {
            UI.mensajes.innerHTML = '';
            UI.mensajes.classList.remove('error');
        }, 3000);
    } else {
        // realizar consulta
        const api = new API(ARTIST, SONG);
        api.getSong()
            .then(res => {
                if (res.lyrics) {
                    console.log(res.lyrics);
                    UI.resultado.textContent = res.lyrics;
                } else {
                    // mostramos y ocultamos error
                    UI.mensajes.innerHTML = 'La canción no existe, prueba de nuevo';
                    UI.mensajes.classList.add('error');
                    setTimeout(() => {
                        UI.mensajes.innerHTML = '';
                        UI.mensajes.classList.remove('error');
                        UI.form.reset();
                        UI.resultado.textContent = '';
                    }, 3000);
                }
            })
            .catch(err => console.log(err));
    }
});