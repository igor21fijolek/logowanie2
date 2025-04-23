async function rejestracja(params) {
    let login = document.getElementById('login').value
    let haslo = document.getElementById('haslo').value
    let haslo2 = document.getElementById('haslo2').value
    let url = `http://localhost:3000/rejestracja/${login}/${haslo}`
    if(haslo === haslo2){
        let response = await fetch(url)
        let data  = await response.json()
        if(response.status === 302){
            document.getElementById('res-info').innerHTML = 'login zajety'
        }
        if(response.status === 200){
            document.getElementById('res-info').innerHTML = 'zarejestrowano'
        } 
    }else{
        document.getElementById('res-info').innerHTML = 'hasla nie sa takie same'
    }
}
async function logowanie(){
    let login=  document.getElementById('login').value
    let haslo = document.getElementById("haslo").value

    let url = `http://localhost:3000/logowanie/${login}/${haslo}`

    let response = await fetch(url)
    let data  = await respone.json()
    if(data.length  === 0){
        document.getElementById('logowanie-info').innerHTML = 'nie zalogowano'
    }else{
        document.getElementById('logowanie-info').innerHTML = 'zalogowano'
    }

}