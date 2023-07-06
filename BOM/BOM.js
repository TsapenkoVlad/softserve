/* window.open('second.html','_blank','width=300,height=300'); */


/*  function changeCSS() {    
const colorChange = document.getElementById('text')
addEventListener('click', () => {
colorChange.style.color = 'orange'
colorChange.style.fontSize = '20px'
colorChange.style.fontFamily =  "Comic Sans MS"
})
}

function changeBg() {
    
    document.body.style.backgroundColor = 'blue'
}

function doubleClick() {
    document.body.style.backgroundColor = 'pink'
}


const bgChange = document.querySelector('.buttonThird');
    bgChange.addEventListener('mousedown', () => {
        document.body.style.backgroundColor = '#964B00'
    })

   
bgChange.addEventListener('mouseup', () => {
        document.body.style.backgroundColor = 'white'
    })

const linkChange = document.querySelector('.link');
linkChange.addEventListener('mouseover', () => {
    document.body.style.backgroundColor = 'yellow'
})    


linkChange.addEventListener('mouseout', () => {
    document.body.style.backgroundColor = 'white'
})  
 */
/* const peopleChange = () => {
    const dropdown = document.getElementById('people');
    const selectedOption = dropdown.options[dropdown.selectedIndex];
    dropdown.removeChild(selectedOption);
    console.log(selectedOption);
    console.log({...dropdown});
} */
/* let text = '';
const p = document.getElementById('mouseOmMe')
const button = document.querySelector('.button');
    button.addEventListener('mouseover', (event) => {
       text = text +  'Mouse on me!\n'
       p.innerText = text 
console.log(event);
   
    })
    button.addEventListener('mouseout', () => {
       text = text +  'Mouse is not on me!\n'
       p.innerText = text
    })

    button.addEventListener('click', () => {
        text = text +  'I was pressed!\n'
        p.innerText = text
     }) */


    /*  window.addEventListener('resize', function() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const sizeInfo = document.getElementById('sizeInfo');
        sizeInfo.textContent = 'Ширина: ' + width + ', Висота: ' + height;
      });
       */


/*       const countrySelect = document.getElementById('country');
const citySelect = document.getElementById('cities');
const output = document.querySelector('p');

const citiesByCountry = {
  ger: ['Berlin', 'Munich', 'Hamburg'],
  usa: ['New York', 'Los Angeles', 'Chicago'],
  ukr: ['Kyiv', 'Lviv', 'Odessa']
};

countrySelect.addEventListener('change', function() {
  const selectedCountry = countrySelect.value;
  const selectedCities = citiesByCountry[selectedCountry];

  
  citySelect.innerHTML = '';


  selectedCities.forEach(function(city) {
    const option = document.createElement('option');
    option.value = city;
    option.textContent = city;
    citySelect.appendChild(option);
  });

  
  const selectedCountryName = countrySelect.options[countrySelect.selectedIndex].text;
  const selectedCity = citySelect.value;
  output.textContent =  selectedCountryName + ',' +  '' + selectedCity;
});


const firstCountry = countrySelect.value;
const firstCities = citiesByCountry[firstCountry];

firstCities.forEach(function(city) {
  const option = document.createElement('option');
  option.value = city;
  option.textContent = city;
  citySelect.appendChild(option);
});
 */