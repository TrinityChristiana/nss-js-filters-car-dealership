// In which month did they sell the most cars?
import method from "./globalMethods.js";

const findPopularMonth = {
    // main function that calls methods to calculate data
    // => string
    run(data) {
        const purchaseDates = method.getPropertyValue(data, "purchase_date");
        const monthNumbers = method.takeOutMonths(purchaseDates);
        const duplicates = method.countDuplicates(monthNumbers);
        const sortedObj = method.sortObj(duplicates, "GtoL");
        const highestKeys = method.collectFirstObjValues(sortedObj);
        return method.changeArrNumWithMonthName(highestKeys).join(", ");
    }
};

export default findPopularMonth;