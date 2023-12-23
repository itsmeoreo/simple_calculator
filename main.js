var col4Btn= document.getElementsByClassName('column-4')
for (let i = 0; i < col4Btn.length; i++) {
  col4Btn[i].addEventListener('click', ()=> {
    var oriColor= col4Btn[i].style.color;
    col4Btn[i].style.backgroundColor= 'white';
    col4Btn[i].style.color= 'black';
    setTimeout(()=>{
      col4Btn[i].style.transition ="ease-in-out 100ms"
      col4Btn[i].style.backgroundColor= 'rgb(255, 151, 151)';
      setTimeout(()=>{
        col4Btn[i].removeAttribute('style');
        col4Btn[i].setAttribute('style', `color= ${oriColor}`)
      }, 100)
    }, 1)
  });
}

var btn= document.getElementsByClassName('grey-btns')
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', ()=> {
    var oriColor= btn[i].style.color;
    btn[i].style.backgroundColor= 'white';
    btn[i].style.color= 'black';
    setTimeout(()=>{
      btn[i].style.transition ="ease-in-out 100ms";
      btn[i].style.backgroundColor= 'rgb(51, 51, 51)';
      setTimeout(()=>{
        btn[i].removeAttribute('style');
        btn[i].setAttribute('style', `color= ${oriColor}`)
      }, 100)
    }, 1)
  });
}

var input= document.getElementById('input-display');
var firstOperand= 0;
var secondOperand= 0;
var operation= '';

function stimulateKeyPress(key) {
  if (input.value === '0' && key != '.')
    input.value= key
  else if(input.value === '' && key === '.')
    input.value= '0.'
  else
    input.value += key;
}


document.getElementById('all-clear').addEventListener('click', ()=>{
  input.value= '';
  firstOperand= 0;
  secondOperand= 0;
  operation= '';
})
document.getElementById('clear').addEventListener('click', ()=>{
  input.value = input.value.slice(0, input.value.length-1);
})
document.getElementById('pos-neg').addEventListener('click', ()=>{
  if (input.value[0] != '-') {
    input.value = '-'+ input.value;
  }
  else
    input.value= input.value.slice(1)
})
document.getElementById('num0').addEventListener('click', ()=> {
  if (input.value != '0') {
    stimulateKeyPress('0');
  }
})
document.getElementById('num1').addEventListener('click', ()=> {
  stimulateKeyPress('1');
})
document.getElementById('num2').addEventListener('click', ()=> {
  stimulateKeyPress('2');
})
document.getElementById('num3').addEventListener('click', ()=> {
  stimulateKeyPress('3');
})
document.getElementById('num4').addEventListener('click', ()=> {
  stimulateKeyPress('4');
})
document.getElementById('num5').addEventListener('click', ()=> {
  stimulateKeyPress('5');
})
document.getElementById('num6').addEventListener('click', ()=> {
  stimulateKeyPress('6');
})
document.getElementById('num7').addEventListener('click', ()=> {
  stimulateKeyPress('7');
})
document.getElementById('num8').addEventListener('click', ()=> {
  stimulateKeyPress('8');
})
document.getElementById('num9').addEventListener('click', ()=> {
  stimulateKeyPress('9');
})
document.getElementById('num-dot').addEventListener('click', ()=> {
  stimulateKeyPress('.');
})
document.getElementById('plus').addEventListener('click', ()=> {
  firstOperand= input.value;
  input.value= '';
  operation= 'sum'
})
document.getElementById('minus').addEventListener('click', ()=> {
  firstOperand= input.value;
  input.value= '';
  operation= 'difference'
})
document.getElementById('multiply').addEventListener('click', ()=> {
  firstOperand= input.value;
  input.value= '';
  operation= 'product'
})
document.getElementById('divide').addEventListener('click', ()=> {
  firstOperand= input.value;
  input.value= '';
  operation= 'quotient'
})
document.getElementById('equal-to').addEventListener('click', ()=> {
  secondOperand= input.value;
  result(operation, firstOperand, secondOperand);
})
function result(operationFunc, operand1, operand2) {
  function sum(num1, num2) {
    num1= parseFloat(num1);
    num2= parseFloat(num2);
    input.value= ( num1+ num2);
  }
  function difference(num1, num2) {
    input.value= num1- num2;
  }
  function product(num1, num2) {
    input.value= num1* num2;
  }
  function quotient(num1, num2) {
    input.value= num1/ num2;
  }

  switch (operationFunc) {
    case 'sum':
      sum(operand1, operand2)
      break;
    case 'difference':
      difference(operand1, operand2)
      break;
    case 'product':
      product(operand1, operand2)
      break;
    case 'quotient':
      quotient(operand1, operand2)
      break;
  }
  firstOperand= '';
  secondOperand= '';
  operation= '';
}