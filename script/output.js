import { faultData } from "./femi.js";
import { carInformation } from "./goldDesigns.js";
import { solutions, Mechanics } from "./solutions.js";

const serviceOutput = document.querySelector('.service-output');

  solutions.forEach((item)=>{

    if(item.SN === faultData.fault){
    
      const faultDisplay = document.querySelector('.fault');
      faultDisplay.innerHTML = item.problem;
      const solutionDisplay = document.querySelector('.solutionDisplay');
      solutionDisplay.innerHTML  = item.solution.toUpperCase();
      if(faultData.serviceDate === "6M" || faultData.serviceDate === "more")
      {
        serviceOutput.innerHTML = item.options.yes;
      }
      else{
        serviceOutput.innerHTML = item.options.no;
      };
    }
  });

  if(serviceOutput.innerHTML === 'Yes'){
    serviceOutput.classList.remove('red');
    serviceOutput.classList.add('green')
  }
  else if(serviceOutput.innerHTML === 'No'){
    serviceOutput.classList.remove('green');
    serviceOutput.classList.add('red')
  }

  window.addEventListener('DOMContentLoaded', () => {
    const imgPlce = document.querySelector('.imgPlce');
    if(carInformation && carInformation.carBrands){
      const carModel = document.querySelector('.car-model');
    carModel.innerHTML  = carInformation.carInformation.carBrands;
  }});

  Mechanics.forEach((item)=>{
    if(item.SN === faultData.residentState){
      const stateOutput = document.querySelector('.state-output');
      stateOutput.innerHTML = item.StateName;

      const contactInfoNumber = document.querySelector('.contact-info-number');
      contactInfoNumber.innerHTML = item.MechanicNumber;

      const contactInfoName = document.querySelector('.contact-info-name');
      contactInfoName.innerHTML = `Gold Auto ${item.StateName} Branch`;
      
    };
  })