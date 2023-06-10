'use strict';

// Function To convert the given unit according to user

const convertUnit = () => {
  const selectionValue = document.querySelector('.selection').value; // Select the unit from which the conversion start;
  const selectionValue2 = document.querySelector('.selection-1').value; // Unit in which the value will be converted;
  const inputValue = document.querySelector('.input-box-1').value;

  // when the given unit is Meter
  if (selectionValue == 'Meter' && selectionValue2 == 'Centimeter') {
    const outPut = inputValue * 100;
    document.querySelector('.finalValue').textContent = outPut;
  } else if (selectionValue == 'Meter' && selectionValue2 == 'Inches') {
    const outPut = inputValue / 0.0254;
    document.querySelector('.finalValue').textContent = outPut;
  } else if (selectionValue == 'Meter' && selectionValue2 == 'Feet') {
    const outPut = inputValue * 3.28084;
    document.querySelector('.finalValue').textContent = outPut;
  } else if (selectionValue == 'Meter' && selectionValue2 == 'Kilometer') {
    const outPut = inputValue * 0.001;
    document.querySelector('.finalValue').textContent = outPut;
  }
  // Whene the given unit is Inch
  else if (selectionValue == 'Inches' && selectionValue2 == 'Meter') {
    const outPut = inputValue * 0.0254;
    document.querySelector('.finalValue').textContent = outPut;
  } else if (selectionValue == 'Inches' && selectionValue2 == 'Feet') {
    const outPut = inputValue * 0.08333333;
    document.querySelector('.finalValue').textContent = outPut;
  } else if (selectionValue == 'Inches' && selectionValue2 == 'Centimeter') {
    const outPut = inputValue * 2.54;
    document.querySelector('.finalValue').textContent = outPut;
  } else if (selectionValue == 'Inches' && selectionValue2 == 'Kilometer') {
    const outPut = inputValue * (2.54 * 0.000009999999999999999);
    document.querySelector('.finalValue').textContent = outPut;
  }
  // When the given unit is centimeter
  else if (selectionValue == 'Centimeter' && selectionValue2 == 'Meter') {
    const outPut = inputValue * 0.01;
    document.querySelector('.finalValue').textContent = outPut;
  } else if (selectionValue == 'Centimeter' && selectionValue2 == 'Feet') {
    const outPut = inputValue * 0.0328084;
    document.querySelector('.finalValue').textContent = outPut;
  } else if (selectionValue == 'Centimeter' && selectionValue2 == 'Inches') {
    const outPut = inputValue * 0.3937008;
    document.querySelector('.finalValue').textContent = outPut;
  } else if (selectionValue == 'Centimeter' && selectionValue2 == 'Kilometer') {
    const outPut = inputValue * 0.000009999999999999999;
    document.querySelector('.finalValue').textContent = outPut;
  }
  // When the given input is Feet
  else if (selectionValue == 'Feet' && selectionValue2 == 'Kilometer') {
    const outPut = inputValue * (3.048 * 0.00009999999999999999);
    document.querySelector('.finalValue').textContent = outPut;
  } else if (selectionValue == 'Feet' && selectionValue2 == 'Meter') {
    const outPut = inputValue * 0.3048;
    document.querySelector('.finalValue').textContent = outPut;
  } else if (selectionValue == 'Feet' && selectionValue2 == 'Centimeter') {
    const outPut = inputValue * 30.48;
    document.querySelector('.finalValue').textContent = outPut;
  } else if (selectionValue == 'Feet' && selectionValue2 == 'Inches') {
    const outPut = inputValue * 12;
    document.querySelector('.finalValue').textContent = outPut;
  }
  // When the given unit is kilometer
  else if (selectionValue == 'Kilometer' && selectionValue2 == 'Meter') {
    const outPut = inputValue * 1000;
    document.querySelector('.finalValue').textContent = outPut;
  } else if (selectionValue == 'Kilometer' && selectionValue2 == 'Centimeter') {
    const outPut = inputValue * 100000;
    document.querySelector('.finalValue').textContent = outPut;
  } else if (selectionValue == 'Kilometer' && selectionValue2 == 'Inches') {
    const outPut = inputValue * 39370.08;
    document.querySelector('.finalValue').textContent = outPut;
  } else if (selectionValue == 'Kilometer' && selectionValue2 == 'Feet') {
    const outPut = inputValue * 3280.84;
    document.querySelector('.finalValue').textContent = outPut;
  } else {
    const outPut = inputValue * 1;
    document.querySelector('.finalValue').textContent = outPut;
  }
};
