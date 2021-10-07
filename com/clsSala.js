class clsSala{
    constructor(pID, pNumerodeasientos){

        this.number=pID;
        this.num_asientos=pNumerodeasientos;
        this.asientos=[]
        this.containerHTML= document.getElementById("grid");
        this.CreateAsientos();
        this.DrawAsientos();
    }

    CreateAsientos(){
        for (var i=0; i<this.num_asientos; i++){
            var tA= new clsAsiento(i);
            this.asientos.push(tA)
        }
    }

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
