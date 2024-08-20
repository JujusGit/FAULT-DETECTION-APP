document.addEventListener('DOMContentLoaded', () => { const brand = document.querySelector('.js-select-brand');
  const carModel = document.querySelector('.js-select-model');
  const carYear = document.querySelector('.js-select-year');
  const nextBtn = document.querySelector('.next');
 
  
  function addCarModel() {
        let optionsArray = [];
  
        carModel.innerHTML = '<option selected>ENTERCARMODEL</option>';
  
        if (brand.value === 'H0NDA') {
          optionsArray = [
            { value: 'Accord', text: 'Accord' },
            { value: 'Civic', text: 'Civic' },
            { value: 'CRV', text: 'CRV' }
          ];
        } else if (brand.value === 'TOYOTA') {
          optionsArray = [
            { value: 'Corolla', text: 'Corolla' },
            { value: 'Camry', text: 'Camry' },
            { value: 'Hilux', text: 'Hilux' }
          ];
        }
        else if (brand.value === 'BMW') {
          optionsArray = [
            { value: 'BMW iX3', text: 'BMW iX3' },
            { value: 'BMW X1', text: 'BMW X1' },
            { value: 'BMW i4', text: 'BMW i4' }
          ];
        }
        else if (brand.value === 'MERCERDESBENZ') {
          optionsArray = [
            { value: 'C Class', text:'C Class' },
            { value: 'E Class', text: 'E Class' },
            { value: 'S Class', text: 'S Class' },
            { value: 'G Class', text: 'G Class' }
          ];
        }
        else if (brand.value === 'LEXUX') {
          optionsArray = [
            { value: 'Lexux ES', text: 'Lexux ES' },
            { value: 'Lexux LX', text: 'Lexux LX' },
            { value: 'Lexux NX', text: 'Lexux NX' },
            { value: 'Lexux LS', text: 'Lexux LS' },
            { value: 'Lexux GX', text: 'Lexux GX' }
          ];
        }
        else if (brand.value === 'KIA') {
          optionsArray = [
            { value: 'Sorento', text: 'Sorento' },
            { value: 'Kia Seltos', text: 'Kia Seltos' },
            { value: 'Picanto', text: 'Picanto' },
            { value: 'Sportage', text: 'Sportage' },
            { value: 'Kia Rio', text: 'Kia Rio' }
          ];
        }
        else if (brand.value === 'VOLKSWAGON') {
          optionsArray = [
            { value: 'Volkswagen ID.4', text: 'Volkswagen ID.4' },
            { value: 'Touareg', text: 'Touareg' },
            { value: 'Volkswagen Nivus', text: 'Volkswagen Nivus'},
            { value: 'Volkswagen Jetta', text: 'Volkswagen Jetta' },
            { value: 'Volkswagen Beetle', text: 'Volkswagen Beetle' }
          ];
        }
        else if (brand.value === 'PEJEOUT') {
          optionsArray = [
            { value: 'Peugeot 3008', text: 'Peugeot 3008' },
            { value: 'Peugeot 308', text: 'Peugeot 308' },
            { value: 'Peugeot 2008', text: 'Peugeot 2008' },
            { value: 'Peugeot 408', text: 'Peugeot 408' },
            { value: 'Peugeot 206', text: 'Peugeot 206' }
          ];
        }
        optionsArray.forEach(optionData => {
          const option = document.createElement('option');
          option.value = optionData.value;
          option.text = optionData.text;
          carModel.appendChild(option);
        });
  }
  
  function carInfo() {
    return {
      carBrands: brand.value,
      model: carModel.value,
      year: carYear.value
    };
  }

  function saveToStorage(){
    const carData = carInfo();
    localStorage.setItem('carData', JSON.stringify(carData));
  }

  nextBtn.addEventListener('click', saveToStorage);
  brand.addEventListener('change', addCarModel);
});
  
export const carInformation = JSON.parse(localStorage.getItem('carData'));