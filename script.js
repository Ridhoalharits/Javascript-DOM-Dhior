//DOM Selectin
const judul = document.getElementById('judul')
judul.style.color='red'
judul.innerHTML = "<em>Halo nama gua ridho</em>"

const paragraph = document.getElementsByTagName('p')
console.log(paragraph)

for (let i = 0; i < paragraph.length ;i++){
    paragraph[i].style.backgroundColor = 'lightblue';
}

const p = document.querySelector('#b p')
p.style.color = 'red'

const list = document.querySelector('section#b ul li:nth-child(2)')
list.style.backgroundColor='green'

const queryAll = document.querySelectorAll('p')
p.style.color='orange'

const b = document.querySelector('section#a p')
b.innerHTML = "Hello World"



for (let l =0;l<5;l++){
    const pBaru = document.createElement('p')
const textBaru = document.createTextNode('ini paragraf baru')
//ini buat save
pBaru.appendChild(textBaru)
const sectionA = document.getElementById('a')
sectionA.appendChild(pBaru)


}
const pBaru = document.createElement('p')
const textBaru = document.createTextNode('ini paragraf baru')
//ini buat save
pBaru.appendChild(textBaru)
const sectionA = document.getElementById('a')
sectionA.appendChild(pBaru)




