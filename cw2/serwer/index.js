const express = require('express');
const cors = require('cors')
const msyql = require('mysql')
const md5 = require('md5')

let app = express()
app.use(cors())

let con = msyql.createConnection({
    host:'localhost', 
    user:'root', 
    password:'',
    database:'logowanie'
})

con.connect((err)=>{
    if(!err){
        console.log('poloczono')
    }else{
        console.log('nie poloczono')
    }
})

app.get("/rejestracja/:login/:haslo", (rq,res)=>{
    let login = rq.params.login
    let haslo = rq.params.haslo
    sql = `select login from osoby where login = '${login}'`
    con.query(sql,(err,result)=>{
        if(result.length > 0 ){
            result.status(302)
            res.send("login zajety")
        }else{
             let sql = `insert into osoby (login, haslo, uprawnienia) values ('${login}','${md5(haslo)}','user')`
                        con.query(sql,(err,result)=>{
                            if(err) throw err
                            console.log(result)
                        })
        }
    })
    
})

app.listen(3000, ()=>{
    console.log('dziala');
})