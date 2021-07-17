let weights= [60, 40, 55, 75, 64];
function alternatingSums(arr) {
    let team1Weights = [];
    let team2Weights = [];
    for (let i = 0; i < weights.length; i++) {
        if (i % 2 === 0) {
            team1Weights.push(weights[i]);
        } else {
            team2Weights.push(weights[i]);
        }   
    }
    return [team1Weights.reduce((a, b) => a + b, 0), team2Weights.reduce((a, b) => a + b, 0)];
}

console.log(alternatingSums(weights));
