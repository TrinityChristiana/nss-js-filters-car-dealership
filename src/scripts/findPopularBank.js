import method from "./globalMethods.js";

const findPopularBank = {
    // main function that calls methods to calculate data
    // => array
    run(data) {
        const banks = method.getPropertyValue(data, ["credit", "credit_provider"]);
        const duplicates = method.countDuplicates(banks);
        const sortedObj = method.sortObj(duplicates, "GtoL");
        return method.collectFirstObjValues(sortedObj);
    }
}

export default findPopularBank;