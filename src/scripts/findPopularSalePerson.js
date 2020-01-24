// Which salesperson sold the most cars?
import method from "./globalMethods.js";

const findPopularSalePerson = {
    run(data){
        const firstNames = method.getSelector(data, ["sales_agent", "first_name"]);
        const lastNames = method.getSelector(data, ["sales_agent", "last_name"]);
        const fullName = this.combineNames(firstNames, lastNames);
        const duplicates = method.countDuplicates(fullName);
        const sortedObj = method.sortObjFromGtoL(duplicates);
        const highestKeys = method.collectHighestValues(sortedObj);

        console.log("highestKeys", highestKeys);
        return highestKeys;
    },
    combineNames(firsts, lasts) {
        let fullNames = [];
        let i = 0;
        firsts.forEach(first => {
            fullNames.push(`${first} ${lasts[i]}`);
            i++;
        });
        return fullNames;
    }
};

export default findPopularSalePerson;