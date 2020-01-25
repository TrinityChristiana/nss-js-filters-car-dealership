import method from "./globalMethods.js";

const findPopularModel = {
    // main function that calls methods to calculate data
    // => string
    run(data) {
        const models = method.getPropertyValue(data, ["vehicle", "model"]);
        const duplicates = method.countDuplicates(models);
        const sortedObj = method.sortObj(duplicates, "GtoL");
        return method.collectFirstObjValues(sortedObj).join(", ");
    }
}

export default findPopularModel;