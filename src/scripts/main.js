import findTotalProfit from "./findTotalProfit.js"
import API from "./API.js";
import carReport from "./holdCarReport.js";
import findPopularMonth from "./findPopularMonth.js"


let dataPromise = API.fetchData()
dataPromise.then(data => {
    carReport.profit = findTotalProfit.fromYear(2017, data);
    carReport.popularMonth = findPopularMonth(data);
    console.log(carReport);
});

// Which salesperson sold the most cars?


// Which salesperson made the most profit?
// Which model was the most popular?
// Which bank provided the most loans to our customers?
// In which month did zero cars get sold?

console.log(carReport);