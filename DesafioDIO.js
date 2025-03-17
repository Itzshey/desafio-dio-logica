// Desafio classificador de nível de Herói
let nomeHeroi = ["Jefin", "Maikon", "Aspas", "DGGames"];
let xp = [3504, 4567, 100000, 678];

for ( i = 0; i < nomeHeroi.length; i++) {
    let nivel;
    
    if (xp[i] < 1000) {
        nivel = "Ferro";
    } else if (xp[i] < 2000) {
        nivel = "Bronze";
    } else if (xp[i] < 5000) {
        nivel = "Prata";
    } else if (xp[i] < 7000) {
        nivel = "Ouro";
    } else if (xp[i] < 8000) {
        nivel = "Platina";
    } else if (xp[i] < 9000) {
        nivel = "Ascendente";
    } else if (xp[i] < 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    console.log(`O herói de nome ${nomeHeroi[i]} está no nível ${nivel} com ${xp[i]} de XP.`);
}

