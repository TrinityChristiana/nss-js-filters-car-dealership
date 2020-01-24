// Which salesperson made the most profit?
import method from "./globalMethods.js";

const findMostMoneySales = {
    run(data) {
        const firstNames = method.getSelector(data, ["sales_agent", "first_name"]);
        const lastNames = method.getSelector(data, ["sales_agent", "last_name"]);
        const profitArray = method.getSelector(data, "gross_profit");
        const nameWithProfits = method.combineArrays([firstNames, lastNames, profitArray]);
        const combinedProfitsObj = this.combineNameswProfit(nameWithProfits);
        const sortedObj = method.sortObjFromGtoL(combinedProfitsObj);
        return method.collectHighestValues(sortedObj);
    },
    filterCarsByPerson() {
        const carsFromSelYear = cars.filter((car) => {
            const year = car.purchase_date.split("-")[0];
            if (year == selYear) return car;
        });
        return carsFromSelYear;
    },
    combineNameswProfit(nameWithProfits) {
        let count = {};
            nameWithProfits.forEach((x) => {
                count[x[0]] = (count[x[0]] || 0) + x[1];
            });
        return count;
    }
}

export default findMostMoneySales;