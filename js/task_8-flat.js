const array = [1, 2, [4, [5]], [6, [7, 7, [9]]]]
const flatArray = array.flat(3)
console.log(flatArray)
//повертає новий масив, вихідний не міняє




const tweets = [
    { id: '000', likes: 5, tags: ['js', 'nodejs'] },
    { id: '001', likes: 2, tags: ['html', 'css'] },
    { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
    { id: '003', likes: 8, tags: ['css', 'react'] },
    { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
]

const flatTwets = tweets.map(el => el.tags).flat(1)
// console.log(flatTwets) //отримуємо список всіх tags в одному масиві

//!!!!!!!!!!!!!метод FLATMAP замість того що вище
const tweetsFlatMap = tweets.flatMap(el => el.tags)
console.log(tweetsFlatMap)


//////////////////////////////////
//!!для того щоб отримати статистику к-сті tags
const stats = tweets
    .flatMap(el => el.tags)
    .reduce(
        (acc, tag) => ({
            ...acc,
            [tag]: acc[tag] ? acc[tag] +1 : 1
        }),
        {},
)
    console.log(stats)
