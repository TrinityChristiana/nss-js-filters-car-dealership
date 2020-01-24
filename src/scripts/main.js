import findTotalProfit from "./findTotalProfit.js"
import API from "./API.js";
import carReport from "./holdCarReport.js";
import findPopularMonth from "./findPopularMonth.js";
import renderDOM from "./renderDOM.js";
import findPopularSalePerson from "./findPopularSalePerson.js";
import findMostMoneySales from "./findMostMoneySales.js"
import findPopularModel from "./findPopularModel.js";
import findPopularBank from "./findPopularBank.js"
import findUnpopularMonth from "./findUnpopularMonth.js"


let dataPromise = API.fetchData();
dataPromise.then(data => {
    const year = 2017;
    carReport[`Profit in ${year}`] = findTotalProfit.fromYear(year, data);
    carReport["Popular Month(s)"] = findPopularMonth.getIt(data);
    carReport["Popular Sales Person"] = findPopularSalePerson;
    carReport["Made Most Profit"] = findMostMoneySales;
    carReport["Most Popular Model"] = findPopularModel;
    carReport["Most Loaned Loans"] = findPopularBank;
    carReport["Month w/ No Car Sales"] = findUnpopularMonth;
    console.log(carReport);
    renderDOM.render("report-container", carReport, year);
});



// Which salesperson made the most profit?
// Which model was the most popular?
// Which bank provided the most loans to our customers?
// In which month did zero cars get sold?

// console.log(carReport);