export class API {

    constructor(artista, cancion) {
        this.artista = artista;
        this.cancion = cancion;
    }

    async getSong() {
        const URL = await fetch(`https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`);
        const RESP = await URL.json();
        return RESP;
    }
}