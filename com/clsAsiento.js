class clsAsiento{
    constructor(pNumberAsiento){

        this.number=pNumberAsiento
        this.ocuppied=0; //0=libre 1=ocupado 2=pendiente de pago

    }
////////////////////////////////////////
    reservarAsiento(){
        this.ocuppied=1 
    }
////////////////////////////////////////
    DRAW(){
        let cell=document.createElement("div");
        cell.innerHTML=this.number;
        cell.className="cell"
        cell.id="a"+this.number;
        return cell;
    }
}