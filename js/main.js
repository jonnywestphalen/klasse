class Buch {
    Titel
    Verlag
    Seitenanzahl
    vorhanden = 69
    Autor
    Genre

    constructor(Titel, Verlag, Seitenanzahl, Autor, Genre, Anzahl ) {
        this.Autor = Autor
        this.Titel = Titel
        this.Verlag = Verlag
        this.Seitenanzahl = Seitenanzahl
        this.Genre = Genre
        this.vorhanden = Anzahl
    }

    verfuegbar(){
        if(this.vorhanden > 0){
            console.log("Es sind noch "+ this.vorhanden +" vorhanden")
        } else {console.log("Keine Bücher sind vorhanden")
        }

    }
    verkauft(){
        this.vorhanden = 69-1
    }
}
function harrypotter(){
    buch1 = new Buch(
    )
    this.vorhanden = 20
}
harrypotter.verkauft()
buch = new Buch("5", 5, 5, 5, 5, 5)
buch.verfuegbar()

