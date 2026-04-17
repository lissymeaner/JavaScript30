document.addEventListener( "DOMContentLoaded", async() => {
  const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

  let cities = [];

  let query = document.querySelector('.search').value;
  
  const response = await fetch(endpoint);
  
  // Fill cities with what is i=in bthe JSON file
  cities = await response.json();
  
  const suggestionsList = document.querySelector('.suggestions');
  
  function clear() {while(suggestionsList.firstChild){suggestionsList.removeChild(suggestionsList.lastChild);}}
  
  clear();
  
  function search() {
    let query = document.querySelector('.search').value;
    let regex = new RegExp(query, 'i');
    
    clear();
    if (query != "") {
      console.log(query);
      for (city of cities){
        console.log(city.city);
        if (regex.test(city.city) || regex.test(city.state)){
          const cityListItem = document.createElement("li");
          cityListItem.innerHTML = `${city.city}, ${city.state}`;
          suggestionsList.appendChild(cityListItem);}
        }
      }
    else {
      console.log(query);
      clear();
    }
  }
    
    document.addEventListener("input",search);
});