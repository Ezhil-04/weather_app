const apikey="dddc72e0bcb021f0debe0c6b91aa5c67";
var apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

let search=document.getElementById("search")

let icon=document.getElementById("icon")

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

        searchclass.style.margin=".5rem"
        wrapper.style.height="3.5rem"
        
        imageclass.style.display="none"
        templass.style.display="none"
        cityclass.style.display="none"
        infoclass.style.display="none"

        city.innerHTML="city not found";
        temp.innerHTML="";
        humidity.innerHTML="";
        wind.innerHTML="";
    }

    else{

        
imageclass.style.display="flex"
templass.style.display="flex"
cityclass.style.display="flex"
infoclass.style.display="flex"
        if(data.weather[0].main="clouds")
        {
            image.src="pic/cloudy1.png"

        }
       else if(data.weather[0].main="rain")
        {
            image.src="pic/rain.png"

        }
       else if(data.weather[0].main="drizzle")
        {
            image.src="pic/drizzle.png"

        }
       else if(data.weather[0].main="clear")
        {
            image.src="pic/sun.png"

        }
       else if(data.weather[0].main="mist")
        {
            image.src="pic/mist.png"

        }
        wrapper.style.height="30rem"
    city.innerHTML=data.name;

    temp.innerHTML=Math.round(data.main.temp)+"°C";
    humidity.innerHTML=data.main.humidity+"%";
    wind.innerHTML=data.wind.speed+" km/h";

   
    }



}