let button = document.createElement('button')
button.innerHTML = 'wyloguj'
document.querySelector("html").appendChild(button)
button.addEventListener("click", ()=>{
    localStorage.removeItem('login')
    localStorage.removeItem('uprawnienia')
    window.location.href = './logowanie.html'
})