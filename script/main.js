// Une fonction de validation de formulaire
let nom = null;
let genre = null;
let response = document.getElementById("respons");

form.onsubmit = () => {
    nom = document.getElementById("nom").value;
    genre = document.getElementById("genre").value;

    if(genre === 'M') {
        respons.textContent = "Bonjour mr "+nom+" !";
    } else {
        respons.textContent = "Bonjour mme "+nom+" !";
    }
    

    // respons.textContent = nb1+nb2;

    return false;
} 



