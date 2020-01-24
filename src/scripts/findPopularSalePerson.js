// Which salesperson sold the most cars?
import method from "./globalMethods.js";

const findPopularSalePerson = {
    run(data){
        const firstNames = method.getSelector(data, ["sales_agent", "first_name"]);
        const lastNames = method.getSelector(data, ["sales_agent", "last_name"]);
        const fullName = method.combineArrays([firstNames, lastNames]);
        const duplicates = method.countDuplicates(fullName);
        const sortedObj = method.sortObjFromGtoL(duplicates);
        const highestKeys = method.collectHighestValues(sortedObj);
        return highestKeys;
    },
};

export default findPopularSalePerson;