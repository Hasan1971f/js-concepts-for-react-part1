// 1 array Destructuring

const numbers = [42, 65]

// const x = numbers[0]
// const y = numbers[1]

const [x, y] = [42, 65]
// console.log(x, y)

// 2 Object Destructuring

const { name, age } = { name: 'alu', age: 14 }
// console.log(name, age)

const employee = {
    ide: 'vs code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    speciation: {
        height: 66,
        weight: 67,
        address: 'kalibari',
        drink: 'water'
    }

}

const { designation, machine } = employee
// console.log(designation, machine)

const { weight, address, drink } = employee.speciation
console.log(weight, address, drink)

