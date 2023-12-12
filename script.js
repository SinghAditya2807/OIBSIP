function convertTemperature() {
    const temperatureInput = document.getElementById('temperature');
    const scaleSelect = document.getElementById('scale');
    const selectedScale = scaleSelect.value;
    
    const temperatureValue = parseFloat(temperatureInput.value);

    if (!isNaN(temperatureValue)) {
      switch (selectedScale) {
        case 'celsius':
          document.getElementById('celsius').value = temperatureValue;
          document.getElementById('fahrenheit').value = (temperatureValue * 9 / 5) + 32;
          document.getElementById('kelvin').value = temperatureValue + 273.15;
          break;
        case 'fahrenheit':
          document.getElementById('celsius').value = (temperatureValue - 32) * 5 / 9;
          document.getElementById('fahrenheit').value = temperatureValue;
          document.getElementById('kelvin').value = (temperatureValue - 32) * 5 / 9 + 273.15;
          break;
        case 'kelvin':
          document.getElementById('celsius').value = temperatureValue - 273.15;
          document.getElementById('fahrenheit').value = (temperatureValue - 273.15) * 9 / 5 + 32;
          document.getElementById('kelvin').value = temperatureValue;
          break;
        default:
          break;
      }
    }
  }

  function clearInputs() {
    document.getElementById('temperature').value = '';
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
    document.getElementById('kelvin').value = '';
  }