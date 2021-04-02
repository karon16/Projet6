let nom = document.querySelector("#nom");
let prenom = document.querySelector("#prenom");
let groupe = document.querySelector("#groupe");
let biographie = document.querySelector("#bio");
let image = document.querySelector('#image');

let btnCreer = document.querySelector("#btncreer");
let btnReinit = document.querySelector("#btnreinit");

let list = document.querySelector('#list')
let imgPreview = document.querySelector('.img-preview')

let contacts;

image.addEventListener("input", function (e) {
    e.preventDefault();
    if (image.files[0]) {
    imgPreview.src = URL.createObjectURL(image.files[0]);
    imgPreview.setAttribute('alt','Image de previsualisation')
    }
});

function carteContact(contacts){
    let listeContact = document.createElement('div');
    listeContact.classList.add('contact-list-element')

    let divCarte = document.createElement('div');
    divCarte.classList.add('divCarte')

    let spanSupprime = document.createElement('span');
    spanSupprime.classList.add('close');
    spanSupprime.textContent = "X";

    spanSupprime.addEventListener('click', (e)=>{
        e.preventDefault();
        listeContact.remove();
    })

    let divImage = document.createElement('div');
    divImage.classList.add('image-container');

    let imgImage = document.createElement('img');
    imgImage.classList.add('img');
    
    if(image.value){ 
        imgImage.src = URL.createObjectURL(image.files[0]);
    }else{
        imgImage.src = 'photo-gallery.png'
    }

    let divInfo = document.createElement('div');
    divInfo.classList.add("contact-info");

    let spanIdentite = document.createElement('span');
    spanIdentite.classList.add()
    spanIdentite.textContent = contacts.prenom + ' ' + contacts.nom;

    let spanGroupe = document.createElement('span');
    spanGroupe.classList.add('group');
    spanGroupe.textContent = contacts.groupe;

    let pBiographie = document.createElement('p');
    pBiographie.textContent = contacts.biographie;

    //Structuration des cartes de contacts
    list.appendChild(listeContact);
    listeContact.appendChild(divCarte);

    divCarte.appendChild(spanSupprime);
    divCarte.appendChild(divInfo);
    divCarte.appendChild(divImage)
    divImage.appendChild(imgImage);

    divCarte.appendChild(divInfo);
    divInfo.appendChild(spanIdentite);
    divInfo.appendChild(spanGroupe);
    divInfo.appendChild(pBiographie);

    btnReinit.addEventListener('click', (e) =>{
        e.preventDefault();
        listeContact.remove();
    })
    

}


btnCreer.addEventListener('click', (e)=>{
    e.preventDefault();
    contacts = {nom:nom.value , prenom : prenom.value, groupe : groupe.value, biographie : biographie.value};
    carteContact(contacts);
    console.log(contacts);
});