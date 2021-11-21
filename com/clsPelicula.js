class clsPelicula{
    constructor(idd, nom, dura ){
        this.id=idd;
        this.nombre=nom;
        this.duracion=dura;
        this.sala1;
        this.sala2;
        this.sala3;
        this.salas=[];
        this.containerHTML=document.getElementById("grid");
        this.DrawCertainSala();
    }

    DrawingMovies(){
        this.html_cell=document.createElement("div");
        let cPeli=this.html_cell;
        cPeli.innerHTML= this.nombre;
        cPeli.className="cartelera";
        cPeli.id=this.id;
        cPeli.addEventListener("click",this.onclick.bind(this));
        this.containerHTML.appendChild(cPeli);
        
        return cPeli;
    }

    CreateSalas(){
        console.log("_________createsalas")
        this.sala1=new clsSala("1",15);
        this.salas.push(this.sala1);
        
        this.sala2=new clsSala("2",20);
        this.salas.push(this.sala2);
        
        this.sala3=new clsSala("3",20);
        this.salas.push(this.sala3); 
        //this.sala2=new clsSala("2",20);
    }
    
    DrawCertainSala(){
        for (var x=0; x<this.salas.length; x++){
            var tA=this.salas[x];
            var tCell=tA.DRAWING();
            this.containerHTML.appendChild(tCell);
        }
    }

    EreaseMovies(){
        this.containerHTML.innerHTML="";
    }

    onclick(){
        this.EreaseMovies();
        this.CreateSalas();
        this.DrawCertainSala();
        
    }
}