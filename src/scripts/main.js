import findTotalProfit from "./findTotalProfit.js"
import API from "./API.js";
import findPopularMonth from "./findPopularMonth.js";
import renderDOM from "./renderDOM.js";
import findPopularSalePerson from "./findPopularSalePerson.js";
import findMostMoneySales from "./findMostMoneySales.js"
import findPopularModel from "./findPopularModel.js";
import findPopularBank from "./findPopularBank.js"
import findUnpopularMonth from "./findUnpopularMonth.js"

let dataPromise = API.fetchData();

dataPromise.then(data => {
    console.log(data);
    const year = 2017;
    const carReport = {};
    carReport[`Profit in ${year}`] = findTotalProfit.run(year, data);
    carReport["Popular Month(s)"] = findPopularMonth.run(data);
    carReport["Popular Sales Person"] = findPopularSalePerson.run(data);
    carReport["Made Most Profit"] = findMostMoneySales.run(data);
    carReport["Most Popular Model"] = findPopularModel.run(data);
    carReport["Most Loaned Loans"] = findPopularBank.run(data);
    carReport["Month w/ No Car Sales"] = findUnpopularMonth.run(data);
    renderDOM.render("report-container", carReport);
});