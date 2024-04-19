const n1 = 7;
const n2 = 5;
const n3 = 8.5;
const media = (n1 + n2 + n3) / 3;

if (media >= 7) {
  console.log("Aprovado");
} else if (media >= 5 && media < 7) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}