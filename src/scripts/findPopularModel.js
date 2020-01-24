import method from "./globalMethods.js";

const findPopularModel = {
    run(data){
        const models = method.getSelector(data, ["vehicle", "model"]);
        const duplicates = method.countDuplicates(models);
        const sortedObj = method.sortObjFromGtoL(duplicates);
        console.log(sortedObj);
        return method.collectHighestValues(sortedObj);
    }
}

export default findPopularModel;