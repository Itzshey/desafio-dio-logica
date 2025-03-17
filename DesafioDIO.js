// Desafio classificador de nível de Herói
let nomeHeroi = "Jefin";
let xp = 5786;

if (xp < 1000) {
    console.log(`O herói de nome ${nomeHeroi} está no nível Ferro com ${xp} de XP`);
} else if (xp >= 1000 && xp < 2000) {
    console.log(`O herói de nome ${nomeHeroi} está no nível Bronze com ${xp} de XP`);
} else if (xp >= 2000 && xp < 5000) {
    console.log(`O herói de nome ${nomeHeroi} está no nível Prata com ${xp} de XP`);
} else if (xp >= 5000 && xp < 7000) {
    console.log(`O herói de nome ${nomeHeroi} está no nível Ouro com ${xp} de XP`);
} else if (xp >= 7000 && xp < 8000) {
    console.log(`O herói de nome ${nomeHeroi} está no nível Platina com ${xp} de XP`);
} else if (xp >= 8000 && xp < 9000) {
    console.log(`O herói de nome ${nomeHeroi} está no nível Ascendente com ${xp} de XP`);
} else if (xp >= 9000 && xp < 10000) {
    console.log(`O herói de nome ${nomeHeroi} está no nível Imortal com ${xp} de XP`);
} else {
    console.log(`O herói de nome ${nomeHeroi} está no nível Radiante com ${xp} de XP`);
}