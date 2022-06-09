class Buch {

    titel
    autor
    seitenzahl
    hersteller
    verlag
    genre
    vorhanden = 20

    constructor(titel, autor, hersteller, verlag, genre, anzahl, seitenzahl,) {
        this.hersteller = hersteller
        this.titel = titel
        this.autor = autor
        this.seitenzahl = seitenzahl
        this.genre = genre
        this.vorhanden = anzahl
        this.verlag = verlag
    }

  verfuegbar(){
        if(this.vorhanden > 0 ){

            console.log(("Es sind noch" + "" + this.vorhanden + "Bücher vorhanden"))
}else{ }

}



}

function HarryOtter(){

    buch1 = new Buch
}

