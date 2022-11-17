const numbers = [1, 11, 27, 60, 3, 15, 2, 9, 6, 2, 3]
const sorted = [...numbers].sort((prev, next) => prev - next)
//якщо prev мінус next дає менше 0, тоді sort() поставить prev перед next, якщо більше 0 - тоді поставить next перед prev
// console.log(sorted)


const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
]
const sortedBestPlayers = [...players].sort((prev, next) => next.timePlayed - prev.timePlayed)
// console.table(sortedBestPlayers)

const sortedPlayerName = [...players].sort((prev, next) => prev.name[0] > next.name[0] ? 1 : -1)
// console.table(sortedPlayerName) //в колбеці звертаємося до індексу строки [0] і повертаємо 1 або -1

////////////////////////
//посортувати у випадковому порядку
const number = [1, 2, 3, 1, 3, 2, 4, 5, 4, 7, 8]
const copyNum = [...number]
const randomNumber = copyNum.sort(() => Math.random() - 0.5) //0.5 повертає випадкове число
// console.log(randomNumber)
// console.table(number) 

/////////////////////////
//робимо сортування
const prices = [2, 14, 1, 37, 26, 8]
const pricesInAscendingOrder = prices.sort((prev, next) => prev - next)
// console.table(pricesInAscendingOrder)


const pricesInDescendingOrder = pricesInAscendingOrder.reverse()
// console.table(pricesInDescendingOrder)
///////////////


/////////////////////РОБИМО СОРТУВАННЯ МОНІТОРІВ
const items = ['SAMSUNG', 'LG', 'ASUS', 'DELL', 'BENQ'] 

const itemsInAlphabeticalOrder = [...items].sort((prev, next) => prev[0] > next[0] ? 1 : -1)
// console.table(itemsInAlphabeticalOrder)

const itemsInDescAlphabeticalOrder = [...items].sort((prev, next) => prev[0] > next[0] ? -1 : 1)
// console.table(itemsInDescAlphabeticalOrder)

const itemsInAlphabetlOrder = [...items].sort().reverse() //просто sort() і ок @@@@@!!!@@!@!@!@!@!@!@!!@!@!@!@!!!@@!@
// console.table(itemsInAlphabetlOrder)

///////////////////////////////// сортуємо масив об'єктівє
const itemsPrices = [
    { name: 'SAMSUNG', price: 15000 },
    { name: 'LG', price: 9000 },
    { name: 'ASUS', price: 27000 },
    { name: 'DELL', price: 12000 },
    { name: 'BENQ', price: 7000 },
]
//Сортуємо по властивості price
const itemsByAscendingPrice = itemsPrices.sort((prev, next) => prev.price - next.price)
const itemsByDescendingPrice = itemsPrices.sort((prev, next) => next.price - prev.price)
// console.table(itemsByAscendingPrice)
// console.table(itemsByDescendingPrice)

//Сортуємо по властивості name
const sortedName = [...itemsPrices].sort((prev, next) => prev.name > next.name ? 1 : -1)
const sortedNameReverse = [...itemsPrices].sort((prev, next) => prev.name[0] > next.name[0] ? -1 : 1)
console.table(sortedName)
console.table(sortedNameReverse)


