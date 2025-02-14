function expoPopuGrowth() {
    let initialPopulation = parseFloat(prompt('Enter intial population growth:'));
    let rateGrowth = parseFloat(prompt('Enter rate growth:'));
    let time = parseFloat(prompt('Enter time:'));

    let finalPopulationGrowth = Math.round(initialPopulation*(Math.exp(rateGrowth*time)))

    let regionOfMonster = prompt('Enter region of monster:');
    let monsterName = prompt('Enter name of monster:');

    let monsterInformation = monsterName.concat(" ", monsterName).toUpperCase();

    document.getElementById('result').innerHTML = `After ${time} hours, the population of ${monsterName} has risen to ${finalPopulationGrowth}!`;

}
