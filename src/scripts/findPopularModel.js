import method from "./globalMethods.js";

const findPopularModel = {
    run(data){
        const models = method.getSelector(data, ["vehicle", "model"]);
        const duplicates = method.countDuplicates(models);
        const sortedObj = method.sortObjFromGtoL(duplicates);
        return method.collectHighestValues(sortedObj).join(", ");
    }
}

export default findPopularModel;