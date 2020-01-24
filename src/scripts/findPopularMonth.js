// In which month did they sell the most cars?
import method from "./globalMethods.js";

const findPopularMonth = {
    getIt(cars) {
        const purchaseDates = method.getSelector(cars, "purchase_date");
        const monthNumbers = method.takeOutMonths(purchaseDates);
        const duplicates = method.countDuplicates(monthNumbers);
        const sortedObj = method.sortObjFromGtoL(duplicates);
        const highestKeys = method.collectHighestValues(sortedObj);
        return method.changeArrNumWithMonthName(highestKeys).join(", ");
    }
};

export default findPopularMonth;