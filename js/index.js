$(document).ready(function() {

  // getting the number input on enter key
  $("input").keypress(function(event) {
    if (event.which == 13) {
      event.preventDefault();
      // discarding the results from previous conversion
      $("#main").empty();

      // getting the number term from input form
      var input = $("input[name=number]").val();
      showNum(input);
    }
  });

  // getting the number input with button click
  $(".menu__go").click(function(event) {
    event.preventDefault();
    $("#main").empty();
    // getting the number term from input form
    var input = $("input[name=number]").val();
    showNum(input);
  });
});

//creating an element with the result and adding it to the document
function showNum(input) {
  var p = document.createElement('p');
  p.innerHTML = convert(input);
  document.getElementById('main').appendChild(p);
}

function convert(num) {

  function toRoman(n, a, b, c) {
    switch (n) {
      case '0':
        n = "";
        break;
      case '1':
        n = a;
        break;
      case '2':
        n = a + a;
        break;
      case '3':
        n = a + a + a;
        break;
      case '4':
        n = a + b;
        break;
      case '5':
        n = b;
        break;
      case '6':
        n = b + a;
        break;
      case '7':
        n = b + a + a;
        break;
      case '8':
        n = b + a + a + a;
        break;
      case '9':
        n = a + c;
        break;
    }
    return n;
  }

  
  var roman = "";
   if (Number.isInteger(parseFloat(num)) && num < 4000 && num > 0) {
    num=parseInt(num).toString();
    var place = 0;
    for (var i = num.length - 1; i >= 0; i--) {
      place++;
      if (place == 1) roman = toRoman(num.charAt(i), "I", "V", "X");
      else if (place == 2) roman = toRoman(num.charAt(i), "X", "L", "C") + roman;
      else if (place == 3) roman = toRoman(num.charAt(i), "C", "D", "M") + roman;
      else if (place == 4) roman = toRoman(num.charAt(i), "M", "", "") + roman;
    }
  } 
    else if (num == 0) roman = "nulla";
  else roman = "Sorry, converting only integers 0-3999 ;[";
  return roman;
}