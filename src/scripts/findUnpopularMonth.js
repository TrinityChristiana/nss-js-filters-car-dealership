import method from "./globalMethods.js";

const findUnpopularMonth = {
    getMissingMonth(duplicates) {
        let monthsLeft = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

        for (const prop in duplicates) {
            monthsLeft.forEach(monthNumber => {
                if (prop == monthNumber) {
                    // console.log(prop, monthNumber);
                    // let index = ;
                    monthsLeft.splice(monthsLeft.indexOf(monthNumber), 1);
                }
            });
        }
        return monthsLeft;
    },
    run(data) {
        const purchaseDates = method.getSelector(data, "purchase_date");
        const monthNumbers = method.takeOutMonths(purchaseDates);
        const duplicates = method.countDuplicates(monthNumbers);
        const monthsLeft = this.getMissingMonth(duplicates);
        return method.changeArrNumWithMonthName(monthsLeft);
    }
};

export default findUnpopularMonth;