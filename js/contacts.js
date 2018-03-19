/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

/*
    N'hésitez surtout pas à faire des remarques et des critiques ; 
    et merci pour votre correction.
 */
//prototype contact
var contact = {
    nom:"",
    prenom:"",
    id:"",
    afficherContact:function(){
        console.log("contact : nom = '"+this.nom+"' , prenom = '"+this.prenom+"' , #id = '"+this.id+"'");
    },
    init: function(id,nom,prenom){
        this.id=id;
        this.nom=nom;
        this.prenom=prenom;
    }
}

//tableau des contacts
var allContacts =[];

//fonction pour ajouter un contact
var ajouterContact=function(nom,prenom){
        var newContact= Object.create(contact);
        newContact.init(nom,prenom);
        allContacts.push(newContact);
}

//fonction pour afficher tou les contacts du tableau (optionel)
var afficherToutContacts=function(){
    allContacts.forEach(function(element) {
        element.afficherContact();
    });
} 


//les 2 contacts à inserer initialement 
ajouterContact("Lévisse","Carole");
ajouterContact("Nelsonne","Mélodie");
ajouterContact("Hello","World");

//mesage d accueil
var messageAccueil = "Bienvenue dans le gestionnaire de contacts";
console.log(messageAccueil);

var option=3; //Le choix de 3 est utilisé juste pour initialiser la variable choix et n'a aucun sens ;-)

while(option!==0){
    console.log(" 1 : Lister les contacts \n 2 : Ajouter un contact \n 0 : Quitter ");
    option= prompt("Choisissez une option: ").trim();   //trim : pour ne pas prendre d'espace utile surtout pour la condition suivante
    if(option!==""){    // Cette condition est faite pour que la chaine vide "" ne soit pas convertit en 0
        option=Number(option);
    }
    if(option===0){
        //quitter
        console.log("bye bye!");
        alert("bye bye!");
    }else{
        if(option===1){
            //lister les contacts
            console.log("Voici la liste de tous vos contacts :");
            afficherToutContacts();
        }else{
            if(option===2){
                //ajouer nv contact
                var nvNom=prompt("entrez le nom du nouveau contact :");
                var nvPrenom=prompt("entrez le prenom du nouveau contact :");
                ajouterContact(nvNom,nvPrenom);
                console.log("nouveau con tact ajouté avec succes !");
            }
            else{
                console.log("choix non pris en charge!");
                alert("choix non pris en charge!");
            }
        }
    }
}