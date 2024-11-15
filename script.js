//funcion suma
function suma(a,b){
    return a+b;
}
//funcion de resta

function resta(a,b){
    return a-b;
}
//funcion multilicacion

function multiplicación(a,b){
    return a*b;
}
//funcion de división

function division(a,b){
    if (b==0){
        return "error en la división  por cero"
    }return a/b;
} 

//funcion calculadora

function calculadora(num1, num2, operacion){
    switch(operacion){
        case 'suma':
            return suma(num1, num2);
        case 'resta':
            return resta(num1, num2);
        case 'multiplicacion':
            return multiplicacion(num1, num2);
        case 'division':
                if(num2!==0){
                    return division(num1, num2);
                }else
            return 'error: División por cero';
    }
}    
    let numero1=parseFloat(prompt("ingrese el numero 1"));
    let numero2=parseFloat(prompt("Ingrese el numero 2"));
    let operacion=prompt("Ingrese la operación (suma,resta,multi,divi)");

    let resultado=calculadora(numero1,numero2,operacion);
    document.write("El resulado es: " + resultado);

