class clsCartelera{
    constructor(){
        this.pelicula1;
        this.pelicula2;
        this.pelicula3;
        this.peliculas=[];
        this.containerHTML = document.getElementById("grid");
        this.CreatePeliculas();
        this.DrawPeliculas();
    }

    CreatePeliculas(){
        this.pelicula1=new clsPelicula("3213", "Harry Potter", 230);
        this.peliculas.push(this.pelicula1);

        this.pelicula2=new clsPelicula;
        this.peliculas.push(this.pelicula2);

        this.pelicula3=new clsPelicula;
        this.peliculas.push(this.pelicula3);
    }

    DrawPeliculas(){
        for (var i=0; i<this.peliculas.length; i++){
            var tP=this.peliculas[i];
            var tPC=tP.DrawingMovies();
            //this.containerHTML.appendChild(tPC);
        }
    }

    DrawingCatalog(){
        this.html_cell=document.createElement("div");
        let cCata=this.html_cell;
        cCata.innerHTML="Cartelera";
        cCata.className="cartelera";
        return cCata;
    }

    EraseCartelera(){
        this.containerHTML.innerHTML="";
    }

    onclick(){
        this.EraseCartelera();
        this.CreatePeliculas();
        this.DrawPeliculas();
    }
}