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

function determinePerformanceRating (average) {
     if (average >= 10000)
        return "Excellent"
    else if (10000 >= average >= 7000)
        return "Good"
    else if (7000 >= average >= 4000)
        return "Satisfactory"
    else (4000 >= average)
        return "Needs Improvement"
}

average = determinePerformanceRating (average)
console.log(average)


//Task 3


//Task 4 



