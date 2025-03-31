const apiKey = 'eeb2955a3047c339352d64892f0a4122'
async function getWeather(city){
// As promises possuem 3 etapas: não realizada, realizada (sucesso), realizada (erro)
try{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt`);
    const data = await response.json();

    if(response.ok){
        document.getElementById("resultado-api").innerText = `O clima da ${city} é ${data.main.temp} com ${data.weather[0].description}`
    }

    //tentar realizar o acesso ao API
}
//Caso eu nao consiga acessar minha APi vou cair aqui.
catch (error){
    console.error(error)
}
 }

let cityButton = document.getElementById("city-button");

cityButton.addEventListener("click", function(){
    let city = document.getElementById("city").value;

    if(city){
        getWeather(city)
    }
    else{
        document.getElementById("resultado-api").innerText = "Coloque uma informação válida"
    }
})
