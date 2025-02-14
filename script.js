function expoPopuGrowth() {
    let initialPopulation = parseFloat(prompt('Enter intial population growth:'));
    let rateGrowth = parseFloat(prompt('Enter rate growth:'));
    let time = parseFloat(prompt('Enter time:'));
    
    let finalPopulationGrowth = Math.round(initialPopulation*(Math.E**(rateGrowth*time)));

    let regionOfMonster = prompt('Enter region of monster:');
    let monsterName = prompt('Enter name of monster:');

    let monsterInformation = regionOfMonster.concat(" ", monsterName).toUpperCase();

    document.getElementById('result').innerHTML = `After ${time} hours, the population of ${monsterInformation} has risen to ${finalPopulationGrowth}!`;

}
