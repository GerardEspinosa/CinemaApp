class clsSala{
    constructor(pID, pNumerodeasientos){

        this.number=pID;
        this.num_asientos=pNumerodeasientos;
        this.asientos=[]
        this.containerHTML= document.getElementById("grid");
        this.CreateAsientos();
    }
    
    CreateAsientos(){
        for (var i=0; i<this.num_asientos; i++){
            var tA= new clsAsiento(i);
            this.asientos.push(tA)
        }
    }
    
    EraseSalas(){
        this.containerHTML.innerHTML="";
    }

    DRAWING(){
        this.html_cell=document.createElement("div");
        let cell=this.html_cell;
        cell.innerHTML="Sala " + this.number;
        cell.className="sala";
        
        cell.addEventListener("click",this.onclick.bind(this));

        cell.id="s"+this.number;
        return cell;
    }
    
    onclick(){
        this.EraseSalas();
        this.CreateAsientos();
        this.DrawAsientos();
    }
    /*
    Drawing(i)
    {   y=i
        for (var x=0; x<y; x++){
            var tS=this.salas[x][0];
            
            this.containerHTML.appendChil(tSala);
        }
    }*/

    DrawAsientos(){

        for (var i=0; i<this.num_asientos; i++){
            var tA=this.asientos[i];
            var tCell=tA.DRAW();
            this.containerHTML.appendChild(tCell);

        /*
        for (var i=0; i<this.num_asientos; i++){
            var tA=this.asientos[i];
            tA.DRAW();
            let cell=document.createElement("div");
            cell.innerHTML=tA.number;
                cell.className="cell"
                cell.id=tA.number;
                container.appendChild(cell);
        */
        }
    }
}
