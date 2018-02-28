module.exports = function solveEquation(equation) {

    var str1 = equation.replace(/ /g,'');

    var coeffTemp1 = str1.split("*x^2");  
    var coeff1 = coeffTemp1[0];

    if (Number.isInteger(parseInt(coeff1)) == false)  {
//      alert('Equation does not match requirements. Coefficient #1 is incorrect. Enter correct equation.');
    console.log("wrong 1");
    }
      
    var coeffTemp2 = coeffTemp1[1].split("*x");  
    var coeff2 = coeffTemp2[0];
      
    if (Number.isInteger(parseInt(coeff2)) == false)  {
//      alert('Equation does not match requirements. Coefficient #2 is incorrect. Enter correct equation.');
    console.log("wrong 2");
    }

    var coeff3 = coeffTemp2[1];
      
    if (Number.isInteger(parseInt(coeff3)) == false)  {
//      alert('Equation does not match requirements. Coefficient #3 is incorrect. Enter correct equation.');
    console.log("wrong 3");
    }
          
    console.log("coeff1 = " + coeff1);
    console.log("coeff2 = " + coeff2);
    console.log("coeff3 = " + coeff3);
      
    
    var d,
        x1,
        x2,
        result = [];
            
    a = parseInt(coeff1);
    b = parseInt(coeff2);
    c = parseInt(coeff3);
    
    d = Math.pow(b, 2) - 4 * a * c;
      
    if ( d > 0 ) {
        x1 = (-b + Math.sqrt(d)) / (2 * a);
        x2 = (-b - Math.sqrt(d)) / (2 * a);
    } else if ( d == 0 ) {
        x1 = x2 = (-b + Math.sqrt(d)) / (2 * a);
    } else {
        console.log( 'Please enter another numbers' );
    }
    
        result = [Math.round(x1), Math.round(x2)];
    
        console.log("result = " + result);
        console.log("x1 = " + x1);
        console.log("x2 = " + x2);
      
    if (x1 > x2) {
        result = [Math.round(x2), Math.round(x1)];        
    }
        return result;
    
    }