const bt = document.getElementById('changecolor')
console.log(bt)

bt.addEventListener("click", function(){
    // document.body.style.backgroundColor='green'
    // document.body.setAttribute('class', 'biru')
    document.body.classList.toggle('biru')
})

const btRandom = document.createElement('button')
const textRandom = document.createTextNode("Random Color")
btRandom.appendChild(textRandom)
btRandom.setAttribute('type', 'button')

bt.after(btRandom)

btRandom.addEventListener('click', function(){
    const r = Math.round(Math.random()*255+1)
    const g = Math.round(Math.random()*255+1)
    const b = Math.round(Math.random()*255+1)
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
})

const sMerah = document.querySelector('input[name=sMerah]')
const sHijau = document.querySelector('input[name=sHijau]')
const sBiru = document.querySelector('input[name=sBiru]')


sMerah.addEventListener('input', function(){
    const red = sMerah.value
    const green = sHijau.value
    const blue = sBiru.value
    console.log(red)
    document.body.style.backgroundColor='rgb('+red+','+green+','+blue+')'

})

sHijau.addEventListener('input', function(){
    const red = sMerah.value
    const green = sHijau.value
    const blue = sBiru.value
    console.log(red)
    document.body.style.backgroundColor='rgb('+red+','+green+','+blue+')'
})

sBiru.addEventListener('input', function(){
    const red = sMerah.value
    const green = sHijau.value
    const blue = sBiru.value
    console.log(red)
    document.body.style.backgroundColor='rgb('+red+','+green+','+blue+')'
})

const judul = document.getElementById('judul')
judul.style.color='rgb('+red+','+green+','+blue+')'
