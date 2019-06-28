var output = document.getElementById('output');

output.innerHTML = `Po naciśnięciu przycisku wpisz temperaturę. Użyj kropki jako separatora dziesiętnego! <br><br> ${output.innerHTML}`; 

var button = document.getElementById('temp-c');
var button2 = document.getElementById('temp-f');
var whichTemp;

const unit = {
  C : "celc",
  F : "fahr"
}

//Funkcja przeliczająca temperaturę
function convertTemp(val, u) {
  if(u === unit.C) {
    return ((val * 1.8) + 32).toFixed(2);
  } else if (u === unit.F){
    return ((val - 32) / (1.8)).toFixed(2);	
  }
}

//Funkcja zwracająca informacje o stanie skupienia wody
var waterState = function(temp) {		
    if(temp >= 0 && temp < 100) {
      return ' Woda jest w stanie ciekłym. ';
    }
    else if(temp < 0) {
      return ' Woda jest w stanie stałym. ';      
    }
    else {
      return ' Woda jest w stanie gazowym. ';
    }		 	
}

//Funkcja wyświetlająca tekst na stronie
var showText = function(celc, far, cond ) {
  if(whichTemp == far){
    return 'Temperatura wynosi '+ celc +' &#176 C!' + ' W stopniach Fahrenheita: ' + far + '<br><br>'  + cond + '<br><br>'; 
  }
  else if(whichTemp == celc){
    return 'Temperatura wynosi '+ far +' &#176 F!' + ' W stopniach Celsjusza: ' + celc + '<br><br>'  + cond + '<br><br>'; 
  }   
}

//Funkcja zwracająca informację jak się ubrać
var whatToWear = function(temp) {
	if(temp < 0) {
      return 'Ubierz ciepłą kurtkę, czapkę i szalik.' + '<br><br><br><br>'; 
    }
    else if(temp >= 0 && temp < 100) {
      if(temp >= 0 && temp <= 10) {
        return ' Ubierz ciepłą kurtkę.' + '<br><br><br><br>'; 
      }
      else if(temp > 10 && temp < 20) {
        return ' Ubierz lżejszą kurtkę.' + '<br><br><br><br>';  
      }
      else if(temp >= 20 && temp < 40) {
       return ' Ubierz krótkie spodenki i krótki rękaw.' + '<br><br><br><br>'; 
      }
      else {
        return ' Roztopisz się.' + '<br><br><br><br>'; 
      }
    }
    else {
     return ' Roztopisz się.' + '<br><br><br><br>'; 
    }
}

//Button temperatury w stopniach Celsjusza
button.addEventListener('click', function(){
  temp = window.prompt('Jaka jest temperatura?');
  let numberTemp = parseFloat(temp);    
  
  let far = convertTemp(numberTemp, unit.C);
  whichTemp = far;
  
  let t = showText(temp, far, waterState(numberTemp));
  let w = whatToWear(temp);
  
  validate(t,w, temp);
}); 

//Button temperatury w stopniach Fahrenheita
button2.addEventListener('click', function(){
  fahrenheit = window.prompt('Jaka jest temperatura?');
  let numberTemp = parseFloat(fahrenheit);  
  
  let cel = convertTemp(numberTemp, unit.F);
  whichTemp = cel;
  
  let t = showText(cel, fahrenheit, waterState(cel));
  let w = whatToWear(cel);
  
  validate(t,w, fahrenheit);
}); 

function validate(t, w, temp) {
  if(temp == null || temp == ''){
      output.innerHTML = 'Nie wpisano liczby.' + '<br><br>' + output.innerHTML; 
  }
  else if(!isNaN(temp)) {
    output.innerHTML = t + w + output.innerHTML;
  }
  else {
    output.innerHTML = 'Nie wpisano poprawnej liczby' + '<br><br>' + output.innerHTML; 
  }  
}



