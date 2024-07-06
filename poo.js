//poo
class lan{
    Nom;
    Prenom;
    constructor(Nom, Prenom){
        this.Nom = Nom;
        this.Prenom = Prenom
    }

    tst(){
        console.log(this.Nom + this.Prenom);
    }

}
 lan = new lan("justin", "Lantomalala");
 lan.tst()