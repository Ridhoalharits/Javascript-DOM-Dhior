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
