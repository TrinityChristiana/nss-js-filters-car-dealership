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
        this.countDuplicates(months);
    },
    countDuplicates(numberArray) {
        // Holds information about duplicates
        let count = {};
        // counts how many times a number shows up and puts info into count obj
        numberArray.forEach((x) => count[x] = (count[x] || 0) + 1);
        this.sortObjFromGtoL(count);
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
        this.collectHighestSaleMonths(sortedMonths);
    },
    getMonthNames(propNumber) {
        const monthNames = ["january", "feburary", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
        return monthNames[parseInt(propNumber, 10) - 1];
    },
    collectHighestSaleMonths(sortedMonths) {
        const highSalesMonths = [];
        let i = 0;
        for (let prop in sortedMonths) {
            i++;
            const propNumber = prop[1] + prop[prop.length - 2];
            const propMonth = this.getMonthNames(propNumber);
            console.log(propMonth);
            if (i == 1) {
                highSalesMonths.push([propMonth, sortedMonths[prop]]);
                console.log(prop.length);
            } else {
                if (sortedMonths[prop] == highSalesMonths[0][1]) {
                    highSalesMonths.push(propMonth);
                }
            }
        }
    },
    holdExtraStuff() {




        carReport.popularMonth = [highSalesMonths[0][0]];
        highSalesMonths.shift();
        if (highSalesMonths.length > 0) {
            highSalesMonths.forEach(month => {
                carReport.popularMonth.push(month);
            });
            highSalesMonths.push(highSalesMonths)
        }
    }
};





export default findPopularMonth;