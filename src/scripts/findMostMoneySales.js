// Calculates which salesperson made the most profit
import method from "./globalMethods.js";

const findMostMoneySales = {
    // main function that calls methods to calculate data
    // => array
    run(data) {
        const firstNames = method.getPropertyValue(data, ["sales_agent", "first_name"]);
        const lastNames = method.getPropertyValue(data, ["sales_agent", "last_name"]);
        const profitArray = method.getPropertyValue(data, "gross_profit");
        const nameWithProfits = method.combineArrays([firstNames, lastNames, profitArray]);
        const combinedProfitsObj = this.combineNameswProfit(nameWithProfits);
        const sortedObj = method.sortObj(combinedProfitsObj, "GtoL");
        return method.collectFirstObjValues(sortedObj);
    },
    // Combines profit for each sales person by adding duplicates together
    // => object
    combineNameswProfit(nameWithProfits) {
        let count = {};
            nameWithProfits.forEach((x) => {
                count[x[0]] = (count[x[0]] || 0) + x[1];
            });
        return count;
    }
}

export default findMostMoneySales;