'use strict';
let TabelHeader = ['City','6am ','7am  ','8am  ','9am  ','10am','11am','12pm','1pm  ','2pm  ','3pm  ','4pm  ','5pm  ','6pm  ','7pm  ', 'Total/Day'];
let TabelFooter = ['Totals',];
let parentElement = document.getElementById('createTable');


function head (){
  for(let i= 0; i<TabelHeader.length; i++){
    const thElement = document.createElement('th');
    parentElement.appendChild(thElement);
    thElement.textContent =`${TabelHeader[i]}`;
  }
}
head();

function footer (){
  for(let i= 0; i<TabelFooter.length; i++){
    const fElement = document.createElement('tfoot');
    parentElement.appendChild(fElement);
    const ftdElement = document.createElement('td');
    fElement.appendChild(ftdElement);
    ftdElement.textContent = `${TabelFooter[i]}`;

  }
}
footer();

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function Sales(name , minCust, maxCust,avgCust, workingHours) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCust = avgCust;
  this.workingHours = workingHours;
  this.custmPerHour = [];
  this.Cookies= [];
  // this.totalPerCity =0;
  this.cookiesPerHour=0;
  this.cookiesPHT = [];
  this.total=0;
  this.leftTotal=0;

  // console.log(this.cookiesPHT);
  // console.log(this.Cookies);
  // console.log(this.custmPerHour);
}

Sales.prototype.customersPerHour = function(){
  for(let i =0; i<this.workingHours.length; i++){
    this.custmPerHour.push(getRandomInt(this.minCust,this.maxCust));
  }
};

Sales.prototype.cookiesSales = function(){
  for(let i=0; i< this.workingHours.length; i++){
    this.Cookies.push(Math.floor(this.custmPerHour[i]*this.avgCust)) ;

  }

};


Sales.prototype.salesPerCity = function(){
  const CitySalesRow = document.createElement('tr');
  parentElement.appendChild(CitySalesRow);
  CitySalesRow.textContent =`${this.name}`;
  for(let i= 0; i< this.workingHours.length; i++){
    const tdElement = document.createElement('td');
    CitySalesRow.appendChild(tdElement);
    tdElement.textContent = `${this.Cookies[i]}`;

  }

  let total = this.Cookies.reduce(function(a, b){
    return a + b;
  }, 0);
  let totalPerCity = document.createElement('td');
  CitySalesRow.appendChild(totalPerCity);
  totalPerCity.textContent = `${total}`;

};

// Sales.prototype.cookiesTotalPerHour =function(){

//   const footerSum = document.createElement('tfoot');
//   parentElement.appendChild(footerSum);
//   for(let i= 0; i< this.workingHours.length; i++){
//     this.cookiesPHT.push=(Math.floor(this.Cookies[0]));
//     const tdfElement = document.createElement('td');
//     footerSum.appendChild(tdfElement);
// for(let i=0; i< this.workingHours.length; i++){

// this.cookiesPerHour = this.cookiesPHT+this.Cookies;
//   }
// };


let seattelSales = new Sales ('Seattel',23,65,6.3,['6am ','7am  ','8am  ','9am  ','10am','11am','12pm','1pm  ','2pm  ','3pm  ','4pm  ','5pm  ','6pm  ','7pm  ']);
seattelSales.customersPerHour();
seattelSales.cookiesSales();
// seattelSales.cookiesTotalPerHour();
seattelSales.salesPerCity();

let tokyoSales = new Sales ('Tokyo',3,24,1.5,['6am ','7am  ','8am  ','9am  ','10am','11am','12pm','1pm  ','2pm  ','3pm  ','4pm  ','5pm  ','6pm  ','7pm  ']);
tokyoSales.customersPerHour();
tokyoSales.cookiesSales();
// tokyoSales.cookiesTotalPerHour();
tokyoSales.salesPerCity();

let dubaiSales = new Sales ('Dubai',11,38,3.7,['6am ','7am  ','8am  ','9am  ','10am','11am','12pm','1pm  ','2pm  ','3pm  ','4pm  ','5pm  ','6pm  ','7pm  ']);
dubaiSales.customersPerHour();
dubaiSales.cookiesSales();
// dubaiSales.cookiesTotalPerHour();
dubaiSales.salesPerCity();

let parisSales = new Sales ('Paris',20,38,2.3,['6am ','7am  ','8am  ','9am  ','10am','11am','12pm','1pm  ','2pm  ','3pm  ','4pm  ','5pm  ','6pm  ','7pm  ']);
parisSales.customersPerHour();
parisSales.cookiesSales();
// parisSales.cookiesTotalPerHour();
parisSales.salesPerCity();

let limaSales = new Sales ('Lima',2,16,4.6,['6am ','7am  ','8am  ','9am  ','10am','11am','12pm','1pm  ','2pm  ','3pm  ','4pm  ','5pm  ','6pm  ','7pm  ']);
limaSales.customersPerHour();
limaSales.cookiesSales();
// limaSales.cookiesTotalPerHour();
limaSales.salesPerCity();
