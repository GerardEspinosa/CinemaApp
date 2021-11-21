class clsCine{
    constructor(){
        this.sala1;
        this.sala2; 
        this.salas=[];
        this.cartelera1;
        this.cartelera=[];
        this.containerHTML= document.getElementById("grid");
        //this.CreateSalas();
        //this.DrawCertainSala();
        this.CreateCartelera();
        //this.DrawCartelera();
    }

    CreateCartelera(){
        this.cartelera1=new clsCartelera;
        this.cartelera.push(this.cartelera1);
    }
    /*
    DrawCartelera(){
        for (var y=0; y<this.cartelera.length; y++){
            var tA=this.cartelera[y];
            var tCell=tA.DrawingCatalog();
            this.containerHTML.appendChild(tCell);
            //this.containerHTML.appendChild(tCarte);
        }
    }
    */
    /**
     * 
     
    CreateSalas(){
        console.log("_________createsalas")
        this.sala1=new clsSala("1",15);
        this.salas.push(this.sala1);
        
        this.sala2=new clsSala("2",20);
        this.salas.push(this.sala2);
        //this.sala2=new clsSala("2",20);
    }
    
    DrawCertainSala(){
        for (var x=0; x<this.salas.length; x++){
            var tA=this.salas[x];
            var tCell=tA.DRAWING();
            this.containerHTML.appendChild(tCell);
        }
    }
    
    Draw(){
        var x=this.salas.length;
        for (var i=0; i<x; i++){
            this.html_sala=document.createElement("div");
            let sala=this.html_sala;
            this.number=Drawing(i);
        }
        /*
        this.html_sala=document.createElement("div");
        let sala=this.html_sala;
        this.number=salas[i].Drawing();
        sala.innerHTML="Sala " + this.number;
        sala.className="sala";
        return sala;
    }*/
    /*
    onclick(){
        for (var i=0; i<this.salas.length; i++){
            this.salas[i].DrawAsientos();
        }        
    }
    */

    /*
    DrawSalas(){
        for (var i=0; i<this.salas.length; i++){
            this.salas[i].DrawAsientos();
        }
    }
    */
    /*
    DrawSalas(){
        this.sala1.DrawAsientos();
    }
    */
}
