//рахуємо загальну суму в масиві
const numbers = [5, 10, 15, 20, 25]
const addNumb = numbers.reduce((acc, number) => acc + number, 0)
// console.log(addNumb)

//підраховуємо ЗП
const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
}
const allSalary = Object.values(salary).reduce((acc, salary) => acc + salary, 0)
// console.log(allSalary)
/////////////////////////////////////////

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
]

//підраховуємо загальну к-сть награних годин
const totalTimePlayed = players.reduce((acc, player) => acc + player.timePlayed, 0)
// console.log(totalTimePlayed)
/////////////////////////////////////////////

const cart = [
  { label: 'Apples', price: 100, quantity: 2 },
  { label: 'Bananas', price: 120, quantity: 3 },
  { label: 'Lemons', price: 70, quantity: 4 },
]
//підрахуємо корзину товарів
const totalAmount = cart.reduce((acc, { price, quantity }) => acc + price * quantity, 0)
// console.log(totalAmount)
///////////////////////////////////////////////

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
]
//робимо список всіх tags 
const allTags = tweets.reduce((acc, tweet) => {
  acc.push(...tweet.tags) //розпилення робимо для того, щоб в асс записалися всі теги в один масив. Якщо робити без розпилення получиться масив масивів
  return acc
}, [])
// console.table(allTags)
//МОЖНА ЗРОБИТИ ПРОСТІШЕ І ЩОБ ЛІНТЕР НЕ СВАРИВСЯ
const allTag = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], [])
console.table(allTag)

//РОБИМО СТАТИСТИКУ К-СТІ ОДНАКОВИХ ТЕГІВ НА РЕЗ-ТАТІ РОБОТИ Ф-ЦІЇ allTag
//логіка така: ЯКЩО В АСС ЩЕ НЕМАЄ В-СТІ З КЛЮЧОМ TAG ДОБАВЛЯЄМО, А ЯКЩО ВЖЕ Є ТО ДОБАВЛЯЄМО 1
const tagsStats = allTag.reduce((acc, tag) => {
  return {
    ...acc, //розпиляємо акумулятор на кожній ітерації
    [tag]: acc[tag] ? acc[tag] +1 : 1 //по тернарнику оприділяємо, якщо в ньому ще немає в-сті tag - добавляємо, якщо вже є то добавляємо +1 
  }
}
  , {})
console.table(tagsStats)
  ////////////////////////////////////////////
  //повертаємо середнє арифметичне
  const numb = [1, 2, 1, 3, 4, 5, 6, 6, 7, 8, 9, 10]

  const getAverage = numb.reduce((acc, el) => acc + el / numb.length, 0)
  console.log(getAverage)

/////////////////////////////////
const notUniqueNumbers = [1, 2, 3, 1, 3, 2, 4, 5, 4, 7, 8]
const uniqueNumbers = notUniqueNumbers.reduce((acc, el) => {
  if (!acc.includes(el)) {
  acc.push(el)}
  return acc
},[])
console.log(uniqueNumbers)
///////////////робимо те саме через SET!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const unique = [...new Set(notUniqueNumbers)] //конструктор Set повертає з масиву тільки унікальні числа
console.log(unique)


//ділимо масив на маленткі масиви
const data = [1, 2, 3, 4, 5, 6, 7]

const chunk = (array, size) => {
  const chunkedArray = array.reduce((acc, el) => {
    const lastArray = acc[acc.length - 1]
    if (lastArray.length < size) {
      lastArray.push(el)
    } else { 
      acc.push([el])
    }
      return acc
    } , [[]])
   
  return chunkedArray
}

console.log(chunk(data, 2))
console.log(chunk(data, 3))

