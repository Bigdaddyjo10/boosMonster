const heroes = [
    {
        name: 'Ronnie Coleman',
        type: 'bodyBuilder',
        muscleLoss: 5,// damage:,
        gains: 100,// health:
        rizz: 5, //gold
        level: 1
    },
    {
        name: 'Deadlift Divas',
        type: 'powerLifter',
        muscleLoss: 10,
        gains: 100,
        rizz: 5,
        level: 1,

    }
]
// the boss
const workOut = {
    gains: 100,
    maxGains: 100,
    muscleLoss: 5,
    level: 1
}
const bodyBuilder = heroes.find((hero) => hero.name == 'Deadlift Divas')
const powerLifter = heroes.find((hero) => hero.name == 'Ronnie Coleman')

// fighting muscels
function loosingGains() {
    const workOutElement = document.getElementById("bossHealth")
    const bodyBuilderLevelElement = document.getElementById('playerLvl')
    const bodyBuilderRizzElement = document.getElementById('rizz') // gold

    bodyBuilderLevelElement.innerText = bodyBuilder.gains
    workOutElement.innerHTML = bodyBuilder.gains -= 10
    bodyBuilderRizzElement.innerText = bodyBuilder.rizz


    if (workOut.gains <= 0) {
        // @ts-ignore
        // player.gold
        bodyBuilder.rizz = workOut.gains

    }
    console.log(workOut.gains);
}
// losing gains or riz++
function loosingGains() {
    const bodyBuilderGainsElement = document.getElementById("playerGains")
    const muscelsTracker = document.getElementById('muscleTracking')

    const muscelsloss = workOut.damage
    // @ts-ignore
    if (bodyBuilder.gains <= 0) {
        //     restart()

        // @ts-ignore
        bodyBuilder.gains = workOut.muscleLoss
    }
    // @ts-ignore
    bodyBuilderGainsElement.innerText = bodyBuilder.gains -= workOut.muscleLoss
    console.log(gym);
}

setInterval(loosingGains, 100)
// Buying steroids and protining shacks
function buyWeapons(money) {
    const rizzElement = document.getElementById('rizz')

    // @ts-ignore
    if (bodyBuilder.rizz == 0) {
        // @ts-ignore
        bodyBuilder.rizz = 20
    } // @ts-ignore
    if (bodyBuilder.rizz > 20) {
        // @ts-ignore
        rizzElement.innerText = bodyBuilder.rizz -= money
    }
}



function restart() {
    bodyBuilder.gains += 100
    bodyBuilder.rizz = 5
    bodyBuilder.level = 1

}