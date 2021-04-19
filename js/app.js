'use strict';


const TabelHeader =  ['City','6am ','7am  ','8am  ','9am  ','10am','11am','12pm','1pm  ','2pm  ','3pm  ','4pm  ','5pm  ','6pm  ','7pm  ', 'Total'];
const parentElement = document.getElementById('salesTable');
const tElement = document.createElement('table');
parentElement.appendChild(tElement);
const thElement = document.createElement('th');
tElement.appendChild(thElement);
for (let i =0; i <TabelHeader.length; i++){
  const timeRow = document.createElement('td');
  thElement.appendChild(timeRow);
  timeRow.textContent = `${TabelHeader[i]}`;
}


function CitySales(name ,minCust,maxCust,avgCust,workingHours) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCust = avgCust;
  this.workingHours = workingHours;

}

CitySales.prototype.render= function() {

  const cityElement = document.createElement('tr');
  thElement.appendChild(cityElement);
  cityElement.textContent= `${this.name}`;
  let cookiesPerCity=[];

  for(let i=0; i < this.workingHours.length ; i++){
    let liElement = document.createElement('td');
    let customers = (getRandomInt(this.minCust,this.maxCust));
    let num = Math.floor(customers*this.avgCust);
    cookiesPerCity.push(num);
    liElement.textContent = `${cookiesPerCity[i]}`;
    cityElement.appendChild(liElement);

  }
  let total = cookiesPerCity.reduce(function(a, b){
    return a + b;
  }, 0);

  let liElement = document.createElement('tr');
  liElement.textContent= `${total}`;
  cityElement.appendChild(liElement);

  let cookiesEachHour =[];
  let eachHour = document.createElement('tfoot');
  for(let i = 0; i < this.workingHours.length; i++){
    let tfElement = document.createElement('tr');
    eachHour.appendChild(tfElement);
    let tfTotals = document.createElement('td');
    tfElement.appendChild(tfTotals);
    cookiesEachHour.push(cookiesPerCity[i]);

    tElement.appendChild(eachHour);

    let totals = cookiesEachHour.reduce(function(a, b){
      return a + b;
    }, 0);
    tfTotals.textContent =`${totals}`;
  }





};




let seattelSales = new CitySales ('Seattel',23,65,6.3,['6am ','7am  ','8am  ','9am  ','10am','11am','12pm','1pm  ','2pm  ','3pm  ','4pm  ','5pm  ','6pm  ','7pm  ']);
let tokyoSales = new CitySales ('Tokyo',3,24,1.5,['6am ','7am  ','8am  ','9am  ','10am','11am','12pm','1pm  ','2pm  ','3pm  ','4pm  ','5pm  ','6pm  ','7pm  ']);
let dubaiSales = new CitySales ('Dubai',11,38,3.7,['6am ','7am  ','8am  ','9am  ','10am','11am','12pm','1pm  ','2pm  ','3pm  ','4pm  ','5pm  ','6pm  ','7pm  ']);
let parisSales = new CitySales ('Paris',20,38,2.3,['6am ','7am  ','8am  ','9am  ','10am','11am','12pm','1pm  ','2pm  ','3pm  ','4pm  ','5pm  ','6pm  ','7pm  ']);
let limaSales = new CitySales ('Lima',2,16,4.6,['6am ','7am  ','8am  ','9am  ','10am','11am','12pm','1pm  ','2pm  ','3pm  ','4pm  ','5pm  ','6pm  ','7pm  ']);


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

seattelSales.render();
tokyoSales.render();
dubaiSales.render();
parisSales.render();
limaSales.render();
