// Task 1
const sales = [102,203,647,473,379]
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






