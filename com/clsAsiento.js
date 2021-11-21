class clsAsiento{
    constructor(pNumberAsiento){

        this.number=pNumberAsiento;
        this._occupied=Math.round(Math.random()); //0=libre 1=ocupado 2=pendiente de pago
        console.log(this.IsOccupied());
        this.reservado=[];
        this.x=0;
        this.y=0;

    }
////////////////////////////////////////
    reservarAsiento(){
        this._occupied=1;
        this.html_cell.className="cell_red"
    }
////////////////////////////////////////
    DRAW(){
        this.html_cell=document.createElement("div");
        let cell=this.html_cell;
        cell.innerHTML="Asiento " + this.number;

        if (this.IsOccupied()){
            cell.className="cell_red";
        } else{
            cell.className="cell";
        }
    
        cell.addEventListener("click",this.onclick.bind(this)); //="alert('hola');";

        cell.id="a"+this.number;

        var comp=localStorage.getItem(JSON.stringify(cell.id));
        if (cell.id==comp){
            cell.className="cell_green";
        }

        return cell;
    }
///////////////////////////////////////
    IsOccupied(){
        return (this._occupied>0);
    }

    onclick(){
        console.log("test.click"+ this.html_cell.id);
        /*
        if (this._occupied==0){
            this.html_cell.className="cell_red";
        } else if (this._occupied==1){
            this.html_cell.className="cell"
        }
        */
        switch (this._occupied){
            case 0:
                this.html_cell.className="cell_green";
                break;
            case 2:
                this.html_cell.className="cell";
                break;
        }
        localStorage.setItem(JSON.stringify(this.html_cell.id), this.html_cell.id);
    }
    
}