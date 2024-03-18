

export default class Member{
    id: number | undefined;
    name: string="";
    adress: string = ""

    constructor(initializer ?:any){
        if(!initializer) return;
        if(initializer.id) this.id = initializer.id;
        if(initializer.name) this.name = initializer.name;
        if(initializer.adress) this.adress = initializer.adress;
    }
}