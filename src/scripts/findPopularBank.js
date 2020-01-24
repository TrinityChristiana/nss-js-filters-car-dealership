import method from "./globalMethods.js";

const findPopularBank = {
    run(data) {
        const banks = method.getSelector(data, ["credit", "credit_provider"]);
        const duplicates = method.countDuplicates(banks);
        const sortedObj = method.sortObjFromGtoL(duplicates);
        return method.collectHighestValues(sortedObj);
    }
}

export default findPopularBank;