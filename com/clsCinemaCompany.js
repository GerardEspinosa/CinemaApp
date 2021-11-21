class clsCinemaCompany{


    constructor (){
        var d
        //this.d = new clsDebug();
        this.CreateCines();
        //this.CreateFrontEnd();
        //this.d.log("Objeto de la clase clsMyGame creada");
    }
    totext (){
        this.d.log("totext method");
    }
    CreateCines(){
        this.cine=new clsCine();
    }
    /*CreteFrontEnd(){
        var data= [
            ["A"],["B"],["C"],
            ["D"],["E"],["F"],
            ["G"],["H"],["I"]
        ];
    }*/
}