
const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
]

//перевіряємо чи всі гравці онлайн:
const isEveryOnline = players.every(player => player.online)
console.log(isEveryOnline)

//перевіряємо чи хоть один гравець онлайн
const someoneOnline = players.some(player => player.online)
console.log(someoneOnline)

//перевіряємо чи є гравці, які награли більше 400
const hardcorePlayer = players.some(player => player.timePlayed > 400)
console.log(hardcorePlayer)