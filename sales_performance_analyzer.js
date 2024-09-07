// Task 1
const sales = [10425,12043,8447,12473,13679]
let total = sales.reduce(sum)

function sum(accumulator,element) {
    return accumulator + element
}

function calculateAverageSales (total) {
    return total/sales.length
}

let average = calculateAverageSales(total)
console.log(`Sales numbers: ${sales}`)
console.log (`The average of the sales is ${average}`)

//Task 2








