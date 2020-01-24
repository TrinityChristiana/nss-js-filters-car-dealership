// In which month did they sell the most cars?

const findPopularMonth = {
    getMonthNumbers(cars) {
        // Array to hold month numbers
        let months = [];
        // Takes month numbers out of object
        cars.forEach(car => {
            const month = car.purchase_date.split("-")[1];
            months.push(month);
        });
        return months;
    },
    countDuplicates(numberArray) {
        // Holds information about duplicates
        let count = {};
        // counts how many times a number shows up and puts info into count obj
        numberArray.forEach((x) => count[x] = (count[x] || 0) + 1);
        return count;
    },
    sortObjFromGtoL(count) {
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
        return sortedMonths;
    },
    getMonthNames(propNumber) {
        const monthNames = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
        return monthNames[parseInt(propNumber, 10) - 1];
    },
    collectHighestSaleMonths(sortedMonths) {
        const highSalesMonths = [];
        let topSaleValue;
        let i = 0;
        for (let prop in sortedMonths) {
            i++;
            const propNumber = prop[1] + prop[prop.length - 2];
            const propMonth = this.getMonthNames(propNumber);
            if (i == 1) {
                topSaleValue = sortedMonths[prop];
                highSalesMonths.push(propMonth);
            } else {
                if (sortedMonths[prop] == topSaleValue) {
                    highSalesMonths.push(propMonth);
                }
            }
        }
        return highSalesMonths;
    },
    getIt(cars) {
        const monthNumbers = this.getMonthNumbers(cars);
        const duplicates = this.countDuplicates(monthNumbers);
        const sortedObj = this.sortObjFromGtoL(duplicates);
        return this.collectHighestSaleMonths(sortedObj);
    }
};

export default findPopularMonth;