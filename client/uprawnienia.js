let jsonLocalStorge = JSON.parse(localStorage.getItem('login'))
let jsonLocalStorgeUprawnienia = JSON.parse(localStorage.getItem('uprawnienia'))
let siteUrl  = window.location.href
let uprawnieniaCheck = siteUrl.slice(
    siteUrl.lastIndexOf('/') + 1,
    siteUrl.lastIndexOf('.')
)
if(jsonLocalStorge === null || jsonLocalStorgeUprawnienia != uprawnieniaCheck){
    window.location.href = './logowanie.html'
}