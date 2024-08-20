import { carInformation } from "./goldDesigns.js";
import { solutions } from "./solutions.js";
document.addEventListener('DOMContentLoaded', () => {
const fault = document.querySelector('.js-select-fault');
const startDate = document.querySelector('.js-select-issue-date-start');
const serviceDate = document.querySelector('.js-select-lsdate');
const residentState = document.querySelector('.js-select-state'); 
const faultDisplay = document.querySelector('.faultDisplay'); 
const DIAGNOSE = document.querySelector('.BTN2');
  

window.addEventListener('DOMContentLoaded', () => {
const imgPlce = document.querySelector('.imgPlce');
if(carInformation && carInformation.carBrands){
    const carBrand = carInformation.carBrands.toLowerCase().replace(/ /g, "-");
    const imgHtml = `<img src="../images/${carBrand}.png" alt="${carInformation.carBrands} ${carInformation.model}" style="width:6em; height: auto">`;
    imgPlce.innerHTML = imgHtml;
  } else {
    imgPlce.innerHTML = '<p>No car data available. Please select a car on the previous page.</p>';
  }
}); 

 
function faultInfo() {
  return {
    fault: fault.value,
    startDate: startDate.value,
    serviceDate: serviceDate.value,
    residentState: residentState.value,
    /*faultInformation: fault.innerHTML,
    startDateInformation: startDate.innerHTML,
    serviceDateInformation:serviceDate.innerHTML,
    residentStateInformation: residentState.innerHTML*/
  };
}

 function saveToStorage2() {
  const faultData = faultInfo();
  localStorage.setItem('faultData', JSON.stringify(faultData));
}



DIAGNOSE.addEventListener('click', () => {
  saveToStorage2();

  let faultData = JSON.parse(localStorage.getItem('faultData'));

  console.log(faultData);

  solutions.forEach((item)=>{

    if(item.SN === faultData.fault){
      console.log(item.problem);
      console.log(item.solution);
    }
  })
/*
 if (faultData) {
    faultDisplay.innerHTML = `
      <p>Fault: ${faultData.fault}</p>
      <p>Start Date: ${faultData.startDate}</p>
      <p>Service Date: ${faultData.serviceDate}</p>
      <p>Resident State: ${faultData.residentState}</p>
      <p>Fault info: ${faultData.faultInformation}</p>
      <p>Start info: ${faultData.startDateInformation}</p>
      <p>Service dte: ${faultData.serviceDateInformation}</p>
      <p>Resident State info: ${faultData.residentStateInformation}</p>
    `;
  } else {
    faultDisplay.innerHTML = '<p>No fault data available.</p>';
  } 
  */
});
});
export let faultData = JSON.parse(localStorage.getItem('faultData'));