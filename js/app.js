'use strict';

let hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let datatable = document.getElementById('Datatable');
const addingBranch= document.getElementById('newBranch');

function Salmon(name, mincust, maxcust, avgsale) {
  this.name = name;
  this.mincust = mincust;
  this.maxcust = maxcust;
  this.avgsale = avgsale;
  this.cookiesPerHour = [];
  this.customerPerHour = [];
  this.total = 0;
  Salmon.allCity.push(this);
}
Salmon.allCity = [];

Salmon.prototype.gitCustNumber = function () {
  for (let i = 0; i < hour.length; i++) {
    let cookiee = Math.ceil(getRandomValue(this.mincust, this.maxcust) * this.avgsale);
    this.cookiesPerHour.push(cookiee);
    this.total += cookiee;
  }
};

Salmon.prototype.render = function () {
  this.gitCustNumber();

  const tr = document.createElement('tr');
  datatable.appendChild(tr);

  let td = document.createElement('td');
  tr.appendChild(td);
  td.textContent = this.name;

  for(let i = 0; i < hour.length; i++) {
    let tContent = document.createElement('td');
    tr.appendChild(tContent);
    tContent.textContent = this.cookiesPerHour[i];
  }

  let td1 = document.createElement('td');
  tr.appendChild(td1);
  td1.textContent = this.total;
};

function heading() {
  let thead = document.createElement('tr');
  datatable.appendChild(thead);

  let thEle = document.createElement('th');
  thead.appendChild(thEle);
  thEle.textContent = '';
  for (let i = 0; i < hour.length; i++) {
    let thEle = document.createElement('th');
    thead.appendChild(thEle);
    thEle.textContent = hour[i];
  }

  let th1Ele = document.createElement('th');
  thead.appendChild(th1Ele);
  th1Ele.textContent = 'Total Daily Location';
}

function footers() {
  let tfoot = document.createElement('tr');
  datatable.appendChild(tfoot);

  let thEle = document.createElement('th');
  tfoot.appendChild(thEle);
  thEle.textContent = 'Total';

  let totalOfTotals = 0;
  for (let i = 0; i < hour.length; i++) {
    let thEle = document.createElement('th');
    let hourlyTotal = 0;
    for(let j = 0; j < Salmon.allCity.length; j++) {
      hourlyTotal += Salmon.allCity[j].cookiesPerHour[i];
      totalOfTotals += Salmon.allCity[j].cookiesPerHour[i];
    }
    thEle.textContent = hourlyTotal;
    tfoot.appendChild(thEle);
  }

  let th1Ele = document.createElement('th');
  tfoot.appendChild(th1Ele);
  th1Ele.textContent = totalOfTotals;
}

new Salmon('Seattle', '23', '65', '6.3');
new Salmon('Tokyo', '3', '24', '1.2');
new Salmon('Dubai', '11	', '38', '3.7');
new Salmon('Paris', '20', '38', '2.3');
new Salmon('Lima', '2', '16', '4.6');


function render() {
  for(let i = 0; i < Salmon.allCity.length; i++){
    Salmon.allCity[i].render();

  }
}

heading();
render();
footers();
function getRandomValue(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}


addingBranch.addEventListener('submit',submitNew);
function submitNew(test){
  test.preventDefault();

  const name = test.target.location.value;
  const min = test.target.minCus.value;
  const max = test.target.mixCus.value;
  const avg = test.target.avSale.value;
  let newStore = new Salmon(name,min,max,avg);
  datatable.deleteRow(datatable.rows.length-1);
  newStore.render();
  footers();
}






