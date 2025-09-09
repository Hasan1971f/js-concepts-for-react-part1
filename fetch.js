// 1. json
const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['King khan', 'Dhakar Mastan']
}

const studentJson = JSON.stringify(student)
console.log(studentJson)
console.log(student)

// Stirng krtay JSON.stringfy()
// Object krtay JSON.parse()

// fetch
fetch('url')
    .then(res => res.json())
    .then(data => console.log(data))

// keys, value

const keys = Object.keys(student)
const values = Object.values(student)