


let icon = document.querySelector(".header .container .toggles");
let nav = document.querySelector(".header .container nav");
let cloes = document.querySelector(".header .container nav .close");

icon.onclick = function () {
  nav.classList.add("open");
};
cloes.onclick = function () {
  this.parentElement.classList.remove("open");
};
document.onkeyup = function (e) {
if(e.key === "Escape") {
  nav.classList.remove("open");
}
};


const allskills = document.querySelectorAll(".header .container nav ul li");
// function name(params) {
allskills.forEach(ele => {
      ele.addEventListener("click", (e) => {
    //   e.preventDefault();
    //       document.querySelector(e.target.dataset.section).scrollIntoView({
    //           behavior: 'smooth'
    //       });
          nav.classList.remove("open");
        });
  });
// }

allskills.forEach((li) => {
  li.addEventListener("click", removeActivee);
});
function removeActivee() {
  allskills.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

async function search(a){let t=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=07eade16d5474a5686b173159241112&q=${a}&days=7`);
if(t.ok&&400!=t.status)
    {let a=await t.json();
        displayCurrent(a.location,a.current),
        displayAnother(a.forecast.forecastday)}
    }
        document.getElementById("search").addEventListener("keyup",a=>{search(a.target.value)});
        var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"];
        function displayCurrent(a,t){
            if(null!=t)
                {var e=new Date(t.last_updated.replace(" ","T"));
                let n=`<div class="today forecast">
                <div class="forecast-header"  id="today">
                <div class="day">${days[e.getDay()]}</div>
                <div class=" date">${e.getDate()+monthNames[e.getMonth()]}</div>
                </div> \x3c!-- .forecast-header --\x3e
                <div class="forecast-content" id="current">
                <div class="location">${a.name}</div>
                <div class="degree">
                <div class="num">${t.temp_c}<sup>o</sup>C</div>
                <div class="forecast-icon">
                <img src="https:${t.condition.icon}" alt="" width=90>
                </div>
                </div>
                <div class="custom">${t.condition.text}</div>
                <span><img src="img/icon-umberella.png" alt=""></span>
                <span><img src="img/icon-wind.png" alt=""></span>
                <span><img src="img/icon-compass.png" alt=""></span>`;
                document.getElementById("forecast").innerHTML=n
            }
            }
            function displayAnother(a){
                let t="";
                for(let i=1;i<a.length;i++){
                    
                    let cueeent= days[new Date(a[i].date.replace(" ","T")).getDay()];
                    t+=`\t<div class="forecast colorprived">
                <div class="forecast-header">
                <div class="day">${cueeent}</div>
                </div> \x3c!-- .forecast-header --\x3e
                <div class="forecast-content">
                <div class="forecast-icon">
                <img src="https:${a[i].day.condition.icon}" alt="" width=48>
                </div>
                <div class="degree">${a[i].day.maxtemp_c}<sup>o</sup>C</div>
                <small>${a[i].day.mintemp_c}<sup>o</sup></small>
                <div class="custom">${a[i].day.condition.text}
                </div>
                </div>
                </div>`;
            }
            document.getElementById("forecast").innerHTML+=t
        }
            search("cairo");





