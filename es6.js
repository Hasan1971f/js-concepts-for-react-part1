const numbers = [89, 35, 89, 12]
const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['King khan', 'Dhakar Mastan']
}
// 1 Tempalte string
const about = `My Nmae is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`
console.log(about)

// 2 Arroe function
const getFiftyFive = () => 55

const addSistyFive = number => number + 65

const addThree = (x, y, z) => x + y + z

const doMath = (num1, num2) =>{
    const sum = num1 + num2
    return sum
}

// 3 Spread Operator
const number = [1, 2, 3]
const newNumbers = [...number]
numbers.push(8)
const currentNumbers = [...newNumbers, 10]
console.log(newNumbers, number, currentNumbers)

const num1 = [1,2,3]
const num2 = [4,5,6,7]
const merged =[...num1, ...num2]
console.log(merged)