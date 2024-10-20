const apikey="dddc72e0bcb021f0debe0c6b91aa5c67";
var apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
window.onload=()=>{checkweather("new york")}

let search=document.getElementById("search")

let icon=document.querySelector(".search-icon")

icon.addEventListener("click",()=>
{
    checkweather(search.value)

})


async function checkweather(cityname){

    console.clear()
    const response=await fetch(apiurl+cityname + `&appid=${apikey}`);
    var data =await response.json();
    console.log(data);
    let temp=document.getElementById("temperature")
let city=document.getElementById("city-name")
let humidity=document.getElementById("humidity")
let wind=document.getElementById("wind")
let image=document.getElementById("image")
let wrapper=document.querySelector(".wrapper")
let searchclass=document.querySelector(".search")
let templass=document.querySelector(".temp")
let imageclass=document.querySelector(".image")
let cityclass=document.querySelector(".city")
let infoclass=document.querySelector(".info")




    if(data.cod==404)
    {

 
        temp.innerHTML="city not found"
        city.innerHTML="";
        city.style.fontSize="1rem"
     
        humidity.innerHTML="";
        wind.innerHTML="";
    }

    else{

        
imageclass.style.display="flex"
templass.style.display="flex"
cityclass.style.display="flex"
infoclass.style.display="flex"
        if(data.weather[0].icon=="04n" || data.weather[0].icon=="04d")
        {
            image.src="pic/cloudy1.png"

        }
       else if(data.weather[0].icon=="11n" || data.weather[0].icon=="11d" )
        {
            image.src="pic/rain.png"

        }
       else if(data.weather[0].icon=="10n" || data.weather[0].icon=="10d")
        {
            image.src="pic/drizzle.png"

        }
       else if(data.weather[0].icon=="01n" || data.weather[0].icon=="01d")
        {
            image.src="pic/sun.png"

        }
       else if(data.weather[0].icon=="50n" || data.weather[0].icon=="50d")
        {
            image.src="pic/mist.png"

        }
        
        if(image.classList.contains("pop-up")){
            image.classList.remove("pop-up")
           
           }
       image.classList.add("pop-up")
    city.innerHTML=data.name;
    temp.innerHTML=Math.round(data.main.temp)+"°C";
    humidity.innerHTML=data.main.humidity+"%";
    wind.innerHTML=data.wind.speed+" km/h";

   
    }



}
