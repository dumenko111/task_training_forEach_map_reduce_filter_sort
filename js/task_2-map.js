//метод map
//втконуємо множення кожного числа масиву *2
const numbers = [5, 10, 15, 20, 25]
const doubledNumbers = numbers.map(el => el * 2)
// console.log(doubledNumbers)

//отримуємо список всіх імен гравців
const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
]
const playerNames = players.map(el => el.name) //виводим список всіх імен гравців)
console.log(playerNames)
////////////////////////
const playerId = players.map(el => el.id) //виводимо в консоль список id
console.log(playerId)
////////////////////////
const multipleValuesPlayers = players.map(({name, points}) => ({name, points,}))
console.log(multipleValuesPlayers) //виводимо в консоль декліька значень
////////////////////////
const updatePointsPlayers = players.map(el => ({ ...el, points: el.points * 1.1 }))
console.table(updatePointsPlayers) //повертаємо новий об'єкт зі зміненими points
////////////////////////
//змінюємо значення timePlayed в гравця id: 'player-3'
const playerIdtoUpdate = 'player-3'

const updatePlayers = players.map(player => {
    if (player.id === playerIdtoUpdate) {//знайшли гравця і добавили йому 100 до timePlayed
        return {
            ...player,
            timePlayed: player.timePlayed + 100,
        }
    }
    return player //повертаємо старий об'єкт де нічого не змінювали
})
console.table(updatePlayers)
////////////////////////// робимо те саме тільки ч/з тернарник
const playerIdtoUpd = 'player-1'

const updatePlayer = players.map(player => {
    return player.id === playerIdtoUpd ?
        { ...player, timePlayed: player.timePlayed + 200000, } //повертаємо в новому об'єкті змінену timePlayed
        : player; //повертаємо старий об'єкт де нічого не змінювали
})
console.table(updatePlayers)

