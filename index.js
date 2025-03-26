/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const lengthCon = 3.281;
const volumeCon = 0.264;
const massCon = 2.204;

let meters = 0;
let liters = 0;
let kilograms = 0;

let feet = 0;
let gallons = 0;
let pounds = 0;

let inputValue;

const inputEl = document.getElementById("input-el");
const btnEl = document.getElementById("convert-btn");

const lenEL = document.getElementById("len-el");
const volEL = document.getElementById("vol-el");
const massEl = document.getElementById("mass-el");

//Pridavam comment

//console.log(inputEl)
//console.log(btnEl)
//console.log(meterCon + " " + volumeCon + " " + kiloCon)

btnEl.addEventListener("click", convert);

function convert() {
  console.log("Function Convert");

  inputValue = inputEl.value;
  let lengthString = `${inputValue} Meters = ${(lengthCon * inputValue).toFixed(
    3
  )} feet |    
                        ${inputValue} feet = ${(inputValue / lengthCon).toFixed(
    3
  )} meters`;
  let volumeString = `${inputValue} Liters = ${(volumeCon * inputValue).toFixed(
    3
  )} Gallons |    
                        ${inputValue} Gallons = ${(
    inputValue / volumeCon
  ).toFixed(3)} Liters`;
  let massString = `${inputValue} Kilograms = ${(massCon * inputValue).toFixed(
    3
  )} Pounds |    
                        ${inputValue} Pounds = ${(inputValue / massCon).toFixed(
    3
  )} Kilograms`;

  lenEL.textContent = lengthString;
  volEL.textContent = volumeString;
  massEl.textContent = massString;

  console.log(inputValue);
  console.log(lengthString);
  console.log(volumeString);
  console.log(massString);
}
