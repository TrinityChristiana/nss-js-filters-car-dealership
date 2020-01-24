
// In which month did they sell the most cars?

// Array to hold month numbers
let months = [];

// Takes month numbers out of object
cars.forEach(car => {
    const month = car.purchase_date.split("-")[1];
    months.push(month);
})

// Holds information about duplicates
let count = {};
// counts how many times a number shows up and puts info into count obj
months.forEach((x) => count[x] = (count[x] || 0) + 1);

// Sorts the keys by number of duplicates greatest to least
const keysSorted = Object.keys(count).sort(function (a, b) {
    return count[b] - count[a]
});

// New object to hold sorted months
const sortedMonths = {};

// adds month and amout of duplicates in order of th sorted keys
keysSorted.forEach(element => {
    sortedMonths[`"${element}"`] = count[`${element}`];
});
console.log(sortedMonths);

const monthNames = ["january", "Feburary", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

const highSalesMonths = [];
let i = 0;
for (let prop in sortedMonths) {
    i++;
    const propNumber = prop[1] + prop[prop.length - 2];
    const propMonth = monthNames[parseInt(propNumber, 10) - 1];
    if (i == 1) {
        highSalesMonths.push([propMonth, sortedMonths[prop]]);
        console.log(prop.length);
    } else {
        if (sortedMonths[prop] == highSalesMonths[0][1]) {
            highSalesMonths.push(propMonth);
        }
    }
}
carReport.popularMonth = [highSalesMonths[0][0]];
highSalesMonths.shift();
if (highSalesMonths.length > 0) {
    highSalesMonths.forEach(month => {
        carReport.popularMonth.push(month);
    });
    highSalesMonths.push(highSalesMonths)
}