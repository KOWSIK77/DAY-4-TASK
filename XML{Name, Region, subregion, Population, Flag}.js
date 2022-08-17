const rc = new XMLHttpRequest();

rc.open("GET", "https://restcountries.com/v2/all");
rc.send();

rc.responseType = "json";

rc.onload = function displayResult(){
const countries = rc.response;
//console.log(countries.length);

for (let i=0; i<countries.length; i++){
   console.log(i);
   console.log("Country"+"-"+countries[i].name);
   console.log(" Region of " +countries[i].name +" "+"is"+" "+ countries[i].region);
   console.log(" Subregion of " +countries[i].name +" "+"is"+" "+ countries[i].subregion);
   console.log(" Total population of " +countries[i].name +" "+"is"+" "+ countries[i].population);
   console.log("Flag of " +countries[i].name +" "+"is"+" "+ countries[i].flag);  
}


}