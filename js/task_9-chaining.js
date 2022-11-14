const numbers = [1, 5, 2, 4, 3, 52, 13, 27, 33]
//потрібно подвоїти всі числа, потім залишити, які бульше 10 і відсортувати
const chainingMethodNumbers = numbers.map(el => el * 2)
    .filter(el => el >= 10)
    .sort((a, b) => a - b)
// console.log(chainingMethodNumbers)


const players = [
    { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
    { id: 'id-2', tag: 'Poly', isOnline: false, rank: 600 },
    { id: 'id-3', tag: 'Ajax', isOnline: true, rank: 100 },
    { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 400 },
]
//потрібно вибрати онлайн гравців і відсортувати по рангу
const onlineAndSorted = players
    .filter(el => el.isOnline)
    .sort((a,b) => a.rank - b.rank)

console.table(onlineAndSorted)