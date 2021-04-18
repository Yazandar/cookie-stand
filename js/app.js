'use strict';

let seattelSales = {
  name : 'seattle',
  minCust : 23,
  maxCust : 65,
  avgCust : 6.3,
  workingHours:['6am ','7am  ','8am  ','9am  ','10am','11am','12pm','1pm  ','2pm  ','3pm  ','4pm  ','5pm  ','6pm  ','7pm  '],



  Seattel : function(){
    const parentElement = document.getElementById('seattel');
    const ulElement = document.createElement('ul');
    parentElement.appendChild(ulElement);
    let cookiesPerHour=[];
    console.log(cookiesPerHour);


    for(let i=0; i < this.workingHours.length; i++){
      let liElement = document.createElement('li');
      let customers = (getRandomInt(this.minCust,this.maxCust,this.avgCust));
      let num = Math.floor(customers*this.avgCust);
      cookiesPerHour.push(num);
      liElement.textContent = `${this.workingHours[i]}:${cookiesPerHour[i]}`;
      ulElement.appendChild(liElement);
    }
    let total = cookiesPerHour.reduce(function(a, b){
      return a + b;
    }, 0);
    let liElement = document.createElement('li');
    liElement.textContent= `Total  ${total}`;
    ulElement.appendChild(liElement);


  },

};
let tokyoSales = {
  name : 'tokyo',
  minCust : 23,
  maxCust : 65,
  avgCust : 6.3,
  workingHours:['6am ','7am  ','8am  ','9am  ','10am','11am','12pm','1pm  ','2pm  ','3pm  ','4pm  ','5pm  ','6pm  ','7pm  '],

  Tokyo : function(){
    const parentElement = document.getElementById('tokyo');
    const ulElement = document.createElement('ul');
    parentElement.appendChild(ulElement);
    let cookiesPerHour=[];
    console.log(cookiesPerHour);


    for(let i=0; i < this.workingHours.length; i++){
      let liElement = document.createElement('li');
      let customers = (getRandomInt(this.minCust,this.maxCust,this.avgCust));
      let num = Math.floor(customers*this.avgCust);
      cookiesPerHour.push(num);
      liElement.textContent = `${this.workingHours[i]}:${cookiesPerHour[i]}`;
      ulElement.appendChild(liElement);
    }
    let total = cookiesPerHour.reduce(function(a, b){
      return a + b;
    }, 0);
    let liElement = document.createElement('li');
    liElement.textContent= `Total  ${total}`;
    ulElement.appendChild(liElement);

  },
};
let dubaiSales = {
  name : 'dubai',
  minCust : 23,
  maxCust : 65,
  avgCust : 6.3,
  workingHours:['6am ','7am  ','8am  ','9am  ','10am','11am','12pm','1pm  ','2pm  ','3pm  ','4pm  ','5pm  ','6pm  ','7pm  '],
  Dubai : function(){
    const parentElement = document.getElementById('dubai');
    const ulElement = document.createElement('ul');
    parentElement.appendChild(ulElement);
    let cookiesPerHour=[];
    console.log(cookiesPerHour);


    for(let i=0; i < this.workingHours.length; i++){
      let liElement = document.createElement('li');
      let customers = (getRandomInt(this.minCust,this.maxCust,this.avgCust));
      let num = Math.floor(customers*this.avgCust);
      cookiesPerHour.push(num);
      liElement.textContent = `${this.workingHours[i]}:${cookiesPerHour[i]}`;
      ulElement.appendChild(liElement);
    }
    let total = cookiesPerHour.reduce(function(a, b){
      return a + b;
    }, 0);
    let liElement = document.createElement('li');
    liElement.textContent= `Total  ${total}`;
    ulElement.appendChild(liElement);

  },
};
let parisSales = {
  name : 'paris',
  minCust : 23,
  maxCust : 65,
  avgCust : 6.3,
  workingHours:['6am ','7am  ','8am  ','9am  ','10am','11am','12pm','1pm  ','2pm  ','3pm  ','4pm  ','5pm  ','6pm  ','7pm  '],
  Paris : function(){
    const parentElement = document.getElementById('paris');
    const ulElement = document.createElement('ul');
    parentElement.appendChild(ulElement);
    let cookiesPerHour=[];
    console.log(cookiesPerHour);


    for(let i=0; i < this.workingHours.length; i++){
      let liElement = document.createElement('li');
      let customers = (getRandomInt(this.minCust,this.maxCust,this.avgCust));
      let num = Math.floor(customers*this.avgCust);
      cookiesPerHour.push(num);
      liElement.textContent = `${this.workingHours[i]}:${cookiesPerHour[i]}`;
      ulElement.appendChild(liElement);
    }
    let total = cookiesPerHour.reduce(function(a, b){
      return a + b;
    }, 0);
    let liElement = document.createElement('li');
    liElement.textContent= `Total  ${total}`;
    ulElement.appendChild(liElement);

  },
};
let limaSales = {
  name : 'lima',
  minCust : 23,
  maxCust : 65,
  avgCust : 6.3,
  workingHours:['6am ','7am  ','8am  ','9am  ','10am','11am','12pm','1pm  ','2pm  ','3pm  ','4pm  ','5pm  ','6pm  ','7pm  '],
  Lima : function(){
    const parentElement = document.getElementById('lima');
    const ulElement = document.createElement('ul');
    parentElement.appendChild(ulElement);
    let cookiesPerHour=[];
    console.log(cookiesPerHour);


    for(let i=0; i < this.workingHours.length; i++){
      let liElement = document.createElement('li');
      let customers = (getRandomInt(this.minCust,this.maxCust,this.avgCust));
      let num = Math.floor(customers*this.avgCust);
      cookiesPerHour.push(num);
      liElement.textContent = `${this.workingHours[i]}:${cookiesPerHour[i]}`;
      ulElement.appendChild(liElement);
    }
    let total = cookiesPerHour.reduce(function(a, b){
      return a + b;
    }, 0);
    let liElement = document.createElement('li');
    liElement.textContent= `Total  ${total}`;
    ulElement.appendChild(liElement);

  },
};
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
seattelSales.Seattel();
tokyoSales.Tokyo();
dubaiSales.Dubai();
parisSales.Paris();
limaSales.Lima();

