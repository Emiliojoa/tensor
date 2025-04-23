import tf from '@tensorflow/tfjs';
import promptSync from 'prompt-sync';

const prompt = promptSync();

const matrizSize = parseInt(prompt("Ingrese el tamaño de la matriz: "), 10);

if (isNaN(matrizSize) || matrizSize <= 0) {
    console.error("Por favor, ingrese un tamaño válido (un número entero positivo).");
    process.exit(1);
}


const x = tf.randomUniform([matrizSize, matrizSize], 1, 20, 'int32');
const y = tf.randomUniform([matrizSize, matrizSize], 1, 20, 'int32');


const suma = tf.add(x, y);


const multiplicacion = tf.matMul(x, y);


console.log("Matriz X:");
x.print();

console.log("Matriz Y:");
y.print();

// Imprime la suma de las matrices
console.log("La suma de las matrices es:");
suma.print();

// Imprime la multiplicación de las matrices
console.log("La multiplicación de las matrices es:");
multiplicacion.print();
