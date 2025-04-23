let button  = document.createElement('button')
button.innerHTML = 'wyloguj'
let body = document.querySelector('body')
body.appendChild(button)
button.addEventListener('click', ()=>{
    localStorage.removeItem('login')
    localStorage.removeItem('uprawnienia')
    window.location.href = './logowanie.html'
})