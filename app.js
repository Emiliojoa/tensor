import tf from '@tensorflow/tfjs';
import promptSync from 'prompt-sync';

// Inicializa prompt-sync
const prompt = promptSync();

// Solicita el tamaño de la matriz
const matrizSize = parseInt(prompt("Ingrese el tamaño de la matriz: "), 10);

if (isNaN(matrizSize) || matrizSize <= 0) {
    console.error("Por favor, ingrese un tamaño válido (un número entero positivo).");
    process.exit(1);
}

// Genera tensores aleatorios
const x = tf.randomUniform([matrizSize, matrizSize], 1, 20, 'int32');
const y = tf.randomUniform([matrizSize, matrizSize], 1, 20, 'int32');

// Suma de las matrices
const suma = tf.add(x, y);

// Multiplicación de las matrices
const multiplicacion = tf.matMul(x, y);

// Imprime las matrices
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
