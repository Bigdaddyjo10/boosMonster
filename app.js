const heroes = [
    {
        name: 'Slate Slabrock',
        type: 'dwarf',
        damage: 5,
        health: 100,
        gold: 5,
        level: 1,
    },
    {
        name: 'Flint Ironstag',
        type: 'elf',
        damage: 10,
        health: 100,
        gold: 5,
        level: 1,

    }
]

const boss = {
    health: 100,
    maxHealth: 100,
    damage: 5,
    level: 1
}
const player = heroes.find((hero) => hero.name == 'Slate Slabrock')

function hitBoss() {
    const ghostElement = document.getElementById("bossHealth")
    const playerLevelElement = document.getElementById('playerLvl')
    const playerGoldElement = document.getElementById('moneyBag')



    playerLevelElement.innerText = player.level
    ghostElement.innerHTML = boss.health -= 10
    playerGoldElement.innerText = player.gold


    if (boss.health <= 0) {
        // @ts-ignore
        player.gold += 10
        // @ts-ignore
        player.level += 1
        // @ts-ignore
        boss.health += boss.maxHealth + 50
    }
    // @ts-ignore

    console.log(boss.health);

}

function damagePlayers() {
    const playerOneElement = document.getElementById("playerHealth")

    const bossDamage = boss.damage
    // @ts-ignore
    if (player.health <= 0) {
        restart()
        window.alert("BITCH!!!!")

        // @ts-ignore
        // player.health = bossDamage
    }
    // @ts-ignore
    playerOneElement.innerText = player.health -= bossDamage
}

setInterval(damagePlayers, 100)

function buyWeapons(money) {
    const moneyBagElement = document.getElementById('moneyBag')

    // @ts-ignore
    if (player.gold == 0) {
        // @ts-ignore
        player.gold = 20
    } // @ts-ignore
    if (player.gold > 20) {
        // @ts-ignore
        moneyBagElement.innerText = player.gold -= money
    }
}



function restart() {
    player.health += 100
    player.gold = 5
    player.level = 1

}