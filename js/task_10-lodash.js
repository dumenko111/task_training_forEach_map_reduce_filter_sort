console.dir(_)
//деякі методи із Lodash

//_.isEmpty() - перевіряє чи масив не пустий
// console.log(_.isEmpty({}))
// console.log(_.isEmpty({x: 5}))




//////////////////////////////////////////////////////////////////
const user = {
    nmae: 'Mango',
    location: {
        city: 'Lviv' //попробуй видали!!
    }
}
////////для перевірки чи є така в-сть
console.log(user?.location?.city) //якщо так звертатися і раптом в об'єкті user не буде location замість помилки доступу до в-сті буде undefined


///метод _.union() для зє'днання двох масивів в якому будуть тільки унікальні елементи
console.log(_.union([1, 2, 3, 3], [3, 4, 4, 5, 6]))
