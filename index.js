let dinos = [
    {
        id: 0,
        name: 'Scipionyx',
        img: 'http://images.dinosaurpictures.org/Scipionyx_QY_200_3742.jpg',
        cena: 221
    },
    {
        id: 1,
        name: 'Becklespinax',
        img: 'http://images.dinosaurpictures.org/altispinax-becklespinax_e05c.jpg',
        cena: 275
    },
    {
        id: 2,
        name: 'Sciurumimus',
        img: 'http://images.dinosaurpictures.org/Sciurumimus_albersdoerferi_web_fa15.jpg',
        cena: 341
    },
    {
        id: 3,
        name: 'Hypsilophodon',
        img: 'http://images.dinosaurpictures.org/hypsilophodon-1024x636_6963.jpg',
        cena: 189
    },
    {
        id: 4,
        name: 'Dacentrurus',
        img: 'http://images.dinosaurpictures.org/Dacentrurus_20140118_5d27.jpg',
        cena: 315
    },
    {
        id: 5,
        name: 'Iguanodon',
        img: 'http://images.dinosaurpictures.org/Iguanodon_1157950_ea00.jpg',
        cena: 374
    },
    {
        id: 6,
        name: 'Asylosaurus',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Asylosaurus_NT.jpg/440px-Asylosaurus_NT.jpg',
        cena: 301
    },
    {
        id: 7,
        name: 'Efraasia',
        img: 'http://images.dinosaurpictures.org/efraasia_0a4e.jpg',
        cena: 199
    },
    {
        id: 8,
        name: 'Cryptosaurus',
        img: 'https://images.dinosaurpictures.org/Cryptosaurus/Cryptosaurus_tumblr_inline_on3a5nVchm1rx4yme_1280_94c8.jpg',
        cena: 218
    }
]

const zaUnosDiv = document.querySelector('.form-style-2')
const zaUnosForma = document.querySelector('#forma')
const kupacLabel = document.querySelector('kupac')
const kupacSpan = document.querySelector('.required')
const kupacInput = document.querySelector('#kupac')
const dinolabel = document.querySelector('dino')
const dinoSelect = document.querySelector('#select-dino')

const napomenaLabel = document.querySelector('napomena')
const napomenaName = document.querySelector('.textarea-field')
const dugmeIzbrisiSve = document.querySelector('#btn-all')
const narudzbineDiv = document.querySelector('#item-container')
const ispisNarDiv = document.querySelector('#item')
const dugmeNaruci = document.querySelector('#naruci')

Narudzbine=[]
dinos.forEach(element => {
    const izabrati = document.createElement('option')
    const listaDino = document.createElement ('li')
    listaDino.value= element.id
    listaDino.innerHTML= element.name
    izabrati.appendChild(listaDino)
    dinoSelect.appendChild(izabrati)

})

zaUnosForma.addEventListener('submit', () => {
    event.preventDefault()
    if(kupacInput.value.trim()!== '' && kupacInput.value.length >=4 ){
        const novoporucen = document.createElement('div')
        novoporucen.className="item"
        dinos.find(element => {
            return element.id == element.name.value
        })
        novoporucen.textContent= 'Kupac: '+ kupacInput.value +
        "Dinosaurus: " +dinoSelect.value  + "Napomena: " + napomena() + "Cena: "+ cena()
        Narudzbine.push(novoporucen)
        narudzbineDiv.appendChild(novoporucen)
        console.log(Narudzbine)
    }else {
        const greska= document.createElement('p')
        greska.className="item-container"
        greska.textContent="Mora da sadrzi bar 4 slova!"
        narudzbineDiv.appendChild(greska)

    }

    

})
 function napomena () {
     if (napomenaName.value.trim()===''){
     return napomenaName.textContent="/"
    
 }
 else {
    return napomenaName.textContent= napomenaName.value
 }
}

function cena(){
    let nadji = dinos.find(element => {
       if(dinoSelect.value == element.name){
           return element.cena
       }
    })
}