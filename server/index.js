var express=require('express')
var app=express()
var mysql=require('mysql')
var bodyParser=require('body-parser')
var cors=require('cors')
const { response } = require('express')
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extension:true}))
const db=mysql.createPool({
    host:'localhost',
    user:'bank_app',
    password:'bharath@112',
    database:'bank'
})

app.get('/api/transaction',(req,res)=>{
    const sqlselect="SELECT * FROM transactions";
    db.query(sqlselect,(err,result)=>{
        res.send(result)
    })
})
var a=null
var a1=[1000,5600,7000,8000,4500,2300,3120,6700,5500,4300]
const sqlSelect1="SELECT * FROM users";
db.query(sqlSelect1,(err,result)=>{
    if (err) throw err
    a = result

})



app.put('/api/update',(req,res)=>{
    const accountno=req.body.id
    const amount=req.body.amount
    const account1=req.body.id1
    const amount1=req.body.amount1
    sqlUpdate1="UPDATE users SET Balance = ? where AccountNumber = ?";
    db.query(sqlUpdate1,[amount,accountno],(err,response)=>{
        
    })
    var amount2=amount1+a[account1-1]['Balance']
    
    db.query(sqlUpdate1,[amount2,account1],(err,response)=>{
        a[accountno-1]['Balance']=amount
        a[account1-1]['Balance']=amount1+a[account1-1]['Balance']
        console.log(a)
    })
    

})
var i = 0;
var b=['ramesh@email.com','suresh@email.com','ram@email.com','raju@email.com','krishna@email.com','sanju@email.com','kohli@email.com','kranthi@email.com','bharath@email.com','sundar@email.com']
app.post('/api/update1',(req,res)=>{
    const sid=req.body.id
    const rid=req.body.rid
    const amount = req.body.amount
    const datenow = new Date();
    var si=b[sid-1]
    var ri = b[rid - 1]
    const sqlUpdate2="INSERT INTO transactions (id,fromemail,toemail,date,transactionamount)Values(?,?,?,?,?)"
    db.query(sqlUpdate2,[i++,si,ri,datenow,amount],(err,result)=>{
        
    })
})
app.get('/api/get',(req,res)=>{
    const sqlSelect="SELECT * FROM users";
    db.query(sqlSelect,(err,result)=>{
        res.send(result)
    })
})
app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.listen(3008,()=>{
    console.log("Server Listening To Port 3008")
})