var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
   var cdata=data.filter((ele)=>ele.region=='Asia');
console.log(cdata);
   
   var pop=data.filter((ele)=>ele.population<200000);
console.log(pop);

var tot=data.reduce(function(acc,ele){
return acc+ele.population
},0);
console.log(tot);

var cusd=data.filter((x)=>{
   for(var i in x.currencies){
      if(x.currencies[i].code==='USD'){
         return true;
      }
   }
}).map((x)=>console.log(x.name));
 
var det=data.forEach((element)=>
console.log(element.name+" "+element.capital+" "+element.flag));
    
}