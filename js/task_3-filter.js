
const numbers = [5, 10, 15, 20, 25]

const filterNumb = numbers.filter(number => number < 10 || number > 20)
// console.log(filterNumb)




const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
]
//отримуємо з масиву players всіх гравців які online
const playerStatus = players.filter(player => player.online)
// console.log(playerStatus)

//отримуємо з масиву players всіх гравців які offline
const statusPlayer = players.filter(player => !player.online)
// console.log(statusPlayer)

//виводимо в консоль всіх гравців, які награли більше 250
const hardcorePlayers = players.filter(player => player.timePlayed > 250)
// console.table(hardcorePlayers)



const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//повертаємо масив чисел, які входять між min i max
const filterRange = (arr, min, max) => arr.filter(el => el >= min && el <= max)

console.log(filterRange(numb, 5, 7))
/////////////////////

