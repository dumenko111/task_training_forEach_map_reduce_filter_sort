const numbers = [5, 10, 15, 20, 25]

numbers.forEach(el => {
    // console.log(el)
})

///////є масив з числами потрібно вивести тільки парні
const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// numb.forEach(el => {
//     if (el % 2 === 0) 
//     console.log(el)
// })

const evenNumbers = numb.filter(el => el % 2 === 0)
console.log(evenNumbers)