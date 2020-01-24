// In which month did they sell the most cars?
import method from "./globalMethods.js";

const findPopularMonth = {
    getMonthNames(propNumber) {
        const monthNames = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
        return monthNames[parseInt(propNumber, 10) - 1];
    },
    changeArrNumWithMonthName(highestKeys){
        return highestKeys.map(element => this.getMonthNames(element));
    },
    takeOutMonths(purchaseDates){
        const monthNumbers = purchaseDates.map(element => {
            return element.split("-")[1];
        });
        return monthNumbers;
    },
    getIt(cars) {
        const purchaseDates = method.getSelector(cars, "purchase_date");
        const monthNumbers = this.takeOutMonths(purchaseDates);
        const duplicates = method.countDuplicates(monthNumbers);
        const sortedObj = method.sortObjFromGtoL(duplicates);
        const highestKeys = method.collectHighestValues(sortedObj);
        return this.changeArrNumWithMonthName(highestKeys);
    }
};

export default findPopularMonth;