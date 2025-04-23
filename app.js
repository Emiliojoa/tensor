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

console.log("Matriz X:");
x.print();

console.log("Matriz Y:");
y.print();


console.log("Resultado de tf.einsum('ij,ik->jk', x, y):");
tf.einsum('ij,ik->jk', x, y).print();
