// Which salesperson sold the most cars?
import method from "./globalMethods.js";

const findPopularSalePerson = {
    // main function that calls methods to calculate data
    //  => array
    run(data) {
        const firstNames = method.getPropertyValue(data, ["sales_agent", "first_name"]);
        const lastNames = method.getPropertyValue(data, ["sales_agent", "last_name"]);
        const fullName = method.combineArrays([firstNames, lastNames]);
        const duplicates = method.countDuplicates(fullName);
        const sortedObj = method.sortObj(duplicates, "GtoL");
        const highestKeys = method.collectFirstObjValues(sortedObj);
        return highestKeys;
    },
};

export default findPopularSalePerson;