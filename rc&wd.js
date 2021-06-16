var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    for( var i in data){
        try{
        var a=data[i].name;
        var b=data[i].latlng;
        if(b.length===0)throw new Error("longitude not found");
        weatherdata(a,...b);
        }catch(e)
        {

            console.log("some coordinates are invalid"+" "+a+" "+e.message);
        }
        
    }
    
}
var weatherdata=function(a,lat,lang)
{
    //console.log(a+" "+lat+" "+lang);
    var request=new XMLHttpRequest();
request.open('GET','https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lang+'&appid=06035af4fb00df6438a17d3ed005f2da',true);
request.send();
request.onload=function(){
    try{
    var data=JSON.parse(this.response);
    console.log(`${a} : ${data.main.temp}`);
    }catch(e)
    {
        console.log("undefined response"+" "+a);
    }

}
}