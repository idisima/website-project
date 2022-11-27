
let count = document.getElementById('bicycle');
let div = document.getElementById('div')
let div2 = document.getElementById('div2')
let div3 = document.getElementById('div3')
let totalbalcance = document.getElementById('totalbalcance')
let itemlist = document.getElementById('itemlist')
let scooterPrice = document.getElementById('scooterPrice')
let sphynxPrice = document.getElementById('sphynxPrice')
let array = []
let secondArray = []



let bicycle = 700
count.innerHTML = `$${bicycle}`

let total = bicycle
totalbalcance.innerHTML = `$${total}`

let bicycleCount = 1
let bicycleAmount;
function btnplus1(){
  bicycleCount++;
  bicycleAmount = bicycleCount * bicycle
  div.innerText = bicycleCount;
  count.innerHTML = `$${bicycleAmount}`
  totalbalcance.innerHTML = `$${bicycleAmount}`
  itemlist.innerHTML = `item:${bicycleCount}`
   array.push(bicycleAmount)
  } 
  console.log(array)
function btnminus1(){

    if (bicycleCount>0){
    bicycleCount--;
    bicycleAmount = bicycleCount * bicycle
    div.innerText = bicycleCount;
    count.innerHTML = `$${bicycleAmount}`
    totalbalcance.innerHTML = `$${bicycleAmount}`
    itemlist.innerHTML = `item:${bicycleCount}`
    array.push(bicycleAmount)
    
    }
}

//
//second button
//

let scooter = 500
scooterPrice.innerHTML = `$${scooter}`

let total2 = scooter;
totalbalcance.innerHTML = `$${total2}`
console.log(scooter)

let i = 1
let scooterAmount;
function btnplus2(){
  i++;
  scooterAmount = i * scooter
  div2.innerText = i;
  scooterPrice.innerHTML = `$${scooter}`
  scooterPrice.innerHTML = `$${scooterAmount}`
  totalbalcance.innerHTML = `$${scooterAmount}`
  itemlist.innerHTML = `item:${i}`
  secondArray.push(scooterAmount)
} 
console.log(secondArray)

function btnminus2(){

  if (i>0){
  i--;
  scooterAmount = i * scooter
  div2.innerText = i;
  scooterPrice.innerHTML = `$${scooter}`
  scooterPrice.innerHTML = `$${scooterAmount}`
  totalbalcance.innerHTML = `${scooterAmount}`
  itemlist.innerHTML = `item:${i}`
  secondArray.push(scooterAmount)
  }
}
let valuee = array
// valuee += array * secondArray
console.log(typeof(valuee))


//
//third button
//
let sphynx = 5400
sphynxPrice.innerHTML = `$${sphynx}`

let total3 = sphynx;
totalbalcance.innerHTML = `$${'0'}`
let a = 0
let sphynxAmount;
function btnplus3(){
  a++;
  sphynxAmount = a * sphynx
  div3.innerText = a;
  sphynxPrice.innerHTML = `$${sphynx}`
  sphynxPrice.innerHTML = `$${sphynxAmount}`
  totalbalcance.innerHTML = `$${sphynxAmount}`
  itemlist.innerHTML = `item:${a}`
} 

function btnminus3(){

  if (a>0){
  a--;
  div3.innerText = a;
  sphynxAmount = a * sphynx
  sphynxPrice.innerHTML = `$${sphynx}`
  sphynxPrice.innerHTML = `$${sphynxAmount}`
  itemlist.innerHTML = `item:${a}`
  totalbalcance.innerHTML = `$${sphynxAmount}`
  }
console.log(a)
}