import method from "./globalMethods.js";

const findUnpopularMonth = {
    // main function that calls methods to calculate data
    // => array
    run(data) {
        const purchaseDates = method.getPropertyValue(data, "purchase_date");
        const monthNumbers = method.takeOutMonths(purchaseDates);
        const duplicates = method.countDuplicates(monthNumbers);
        const monthsLeft = this.getMissingMonth(duplicates);
        return method.changeArrNumWithMonthName(monthsLeft);
    },
    // Compares passed in array with array to find the difference
    // => array
    getMissingMonth(duplicates) {
        let monthsLeft = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

        for (const prop in duplicates) {
            monthsLeft.forEach(monthNumber => {
                if (prop == monthNumber) {
                    monthsLeft.splice(monthsLeft.indexOf(monthNumber), 1);
                }
            });
        }
        return monthsLeft;
    }
};

export default findUnpopularMonth;