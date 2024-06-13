const heroes = [
    {
        name: 'Slate Slabrock',
        type: 'dwarf',
        damage: 5,
        health: 100,
        gold: 20
    },
    {
        name: 'Flint Ironstag',
        type: 'elf',
        damage: 10,
        health: 100,
        gold: 20
    }
]

const boss = {
    health: 100,
    maxHealth: 100,
    damage: 5,
    level: 1
}


function damgeGhoat() {
    const ghostElement = document.getElementById("bossHelth")
    const hero = heroes
    const playerOne = heroes.find((hero) => hero.name == "Slate Slabrock")
    const PlayerTwo = heroes.find((hero) => hero.name == "Flint Ironstag")
    ghostElement.innerHTML = boss.health -= 10
    if (boss.health <= 0) {
        boss.health += 160
        boss.level++
        playerOne.gold += 5
        PlayerTwo.gold += 5
        const PlayerOneGoldElement = document.getElementById('playerOneGold')
        PlayerOneGoldElement.innerText = playerOne.gold
        const PlayerTwoGoldElement = document.getElementById('playerTwoGold')
        PlayerTwoGoldElement.innerText = PlayerTwo.gold

    }
    console.log(boss.health);

}

function damageplayers() {
    const playerOneElement = document.getElementById("playerOneHealth")
    const playerTwoElement = document.getElementById("playerTwoHealth")
    const playerOne = heroes.find((hero) => hero.name == 'Slate Slabrock')
    const playerTwo = heroes.find((hero) => hero.name == 'Flint Ironstag')
    const bossDange = boss.damage

    if (playerOne.health <= 0) {
        playerOne.health = boss.damage * boss.level
    }
    if (playerTwo.health <= 0) {
        playerTwo.health = 5
    }


    playerOneElement.innerText = playerOne.health -= bossDange * boss.level
    playerTwoElement.innerText = playerTwo.health -= bossDange
    // console.log(playerOne.health--);
}

setInterval(damageplayers, 1000)