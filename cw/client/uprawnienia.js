let loginLocalstorage = JSON.parse(localStorage.getItem('login'))
let uprawnieniaLocalStorage = JSON.parse(localStorage.getItem('uprawnienia'))
let url = window.location.href
let upcheck = url.slice(
    url.lastIndexOf('/') +1,
    url.lastIndexOf('.')
)
if(loginLocalstorage === null || uprawnieniaLocalStorage != upcheck){
    window.location.href = './logowanie.html'
}