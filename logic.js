const express = require('express');
const bodyparser = require('body-parser');
const notifier = require('node-notifier');
const app = express();
app.use(bodyparser.urlencoded({extended:true}));
const ans = new Array(1,4,1,1,4,1,1,1,4,2);
var inputans;
app.get("/",function(request,response){
    response.sendFile(__dirname+"/index.html");
    // console.log(request);
})

app.post("/",function(request,response){
    let totalAns=0;
    const temp = bodyparser.json;
    // // console.log(request.body.firstquestion+" first");
    // console.log(parseInt(request.body.firstquestion));
    
    // console.log(request.body.secoundquestion+" two");
    
    // console.log(request.body.thirdquestion+" third");
    
    // console.log(request.body.fourquestion+" four");
    
    // console.log(request.body.fivequestion+" five");
    
    // console.log(request.body.sixquestion+" six");
    
    // console.log(request.body.sevenquestion+" seven");
    
    // console.log(request.body.eightquestion+" eight");
    
    // console.log(request.body.ninequestion+" nine");
    
    // console.log(request.body.tenquestion+" ten");
    
    
    let first = parseInt(request.body.firstquestion);
    let secound = parseInt(request.body.secoundquestion);
    let third = parseInt(request.body.thirdquestion);
    let four = parseInt(request.body.fourquestion);
    let five = parseInt(request.body.fivequestion);
    let six = parseInt(request.body.sixquestion);
    let seven = parseInt(request.body.sevenquestion);
    let eight = parseInt(request.body.eightquestion);
    let nine = parseInt(request.body.ninequestion);
    let ten = parseInt(request.body.tenquestion);
    inputans = new Array(first,secound,third,four,five,six,seven,eight,nine,ten);
    
    // console.log(first+" "+secound+" "+third+" "+four+" "+five+" "+six+" "+seven+" "+eight+" "+nine+" "+ten);
    // console.log(ans);
    if(isNaN(first)||isNaN(secound)||isNaN(third)||isNaN(four)||isNaN(five)||isNaN(six)||isNaN(seven)||isNaN(eight)||isNaN(nine)||isNaN(ten)){
        console.log("checking");
        notifier.notify({
            title:'Error',
            message:'Select All Option',
        })
    }else{
        for(let i=0;i<ans.length;i++){
            if(inputans[i]===ans[i]){
                console.log(totalAns+" "+inputans[i]+" "+ans[i]+" "+i);
                totalAns++;
            }
        }
        console.log(totalAns);
        response.send("<center><h1>Successfully Completed</h1>"+"<h3>Total Questions:"+(ans.length)+"</h3>"+"<h3>Total Correct Ans:"+totalAns+"</h3>"+"<h3>Total Wrong Ans:"+((ans.length)-totalAns)+"</h3></center>");
    }
    // console.log(totalAns+" total Ans");
})

app.listen(8080,function(){
    console.log("server started on port 8080");
})