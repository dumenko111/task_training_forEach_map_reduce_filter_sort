
const numbers = [5, 10, 15, 20, 25]

const findNumb = numbers.find(number => number > 10)
console.log(findNumb)


const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
]

//шукаємо об'єкт по id-шнику
const idPlayer = 'player-4'
const findIdPlayer = players.find(player => player.id === idPlayer)
console.log(findIdPlayer)

//шукаємо об'єкт по name
const idName = 'Poly'
const findIdPlayerName = players.find(({ name }) => name === idName)
console.log(findIdPlayerName)

//написати ф-цію, яка повертає по id-шнику
const findPlayerById = (allPlayers, playerId) => {
  return allPlayers.find(player => player.id === playerId)
}
console.log(findPlayerById(players, 'player-3'))
console.log(findPlayerById(players, 'player-5'))