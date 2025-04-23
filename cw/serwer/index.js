const express =require('express')
const cors = require('cors')
const  mysql = require('mysql')
const md5 = require('md5')
let app = express()
app.use(cors())
let con = mysql.createConnection({
    host:'localhost', 
    user:'root',
    password:'',
    database:'logowanie3'
})
con.connect((err)=>{
    if(!err){
        console.log("poloczono");
    }else{
        console.log("nie poloczono")
    }
})

app.get("/rejestracja/:login/:haslo",(req,res)=>{
    let login  = req.params.login
    let haslo = req.params.haslo
    let sql = `select login from osoby where login = '${login}'`;
    con.query(sql,(err,result)=>{
        if(result.length > 0){
            res.status(302)
            res.json('login zajety')
        }else{
            let sql = `insert into osoby (login, haslo, uprawnienia) values ('${login}', '${md5(haslo)}', 'user')`;
            con.query(sql,(err,result)=>{
                console.log(result)
                res.json(result)
            })    
        
        }
    })
})

app.get("/logowanie/:login/:haslo",(req,res)=>{
    let login = req.params.login
    let haslo = req.params.haslo

    let sql = `select * from osoby where login = '${login}' and haslo = '${md5(haslo)}'`
    con.query(sql,(err,result)=>{
        console.log(result)
        res.json(result)
    })
})

app.listen(3000,()=>{
    console.log("dziala");
})