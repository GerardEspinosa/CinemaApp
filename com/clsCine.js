class clsCine{
    constructor(){
        this.sala1;
        this.sala2;
        this.CreateSalas();
        this.DrawSalas();
    }

    CreateSalas(){
        console.log("_________createsalas")
        this.sala1=new clsSala("1",15);
        this.sala1=new clsSala("2",20);
    }

    DrawSalas(){
        this.sala1.DrawAsientos();

    }
}