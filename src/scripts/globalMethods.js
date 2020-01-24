const globalMethods = {
    getSelector(cars, selectors) {
        // Array to hold month numbers
        let container = [];
        // Takes month numbers out of object
        if (typeof selectors == "string") {
            cars.forEach(car => {
                const item = car[selectors];
                container.push(item);
            });
        } else {
            cars.forEach(car => {
                const item = car[selectors[0]][selectors[1]];
                container.push(item);
            });
        }
        return container;
    },
    countDuplicates(array) {
        // Holds information about duplicates
        let count = {};
        // counts how many times a number shows up and puts info into count obj
        array.forEach((x) => count[x] = (count[x] || 0) + 1);
        return count;
    },
    sortObjFromGtoL(count) {
        // Sorts the keys by number of duplicates greatest to least
        const keysSorted = Object.keys(count).sort(function (a, b) {
            return count[b] - count[a]
        });
        // New object to hold sorted months
        const sortedObj = {};

        // adds month and amout of duplicates in order of th sorted keys
        keysSorted.forEach(element => {
            sortedObj[/\d/.test(element) ? `"${element}"` : `${element}`] = count[`${element}`];
        });
        return sortedObj;
    },
    collectHighestValues(sortedObj) {
        const highestValueKeys = [];

        let topValue;

        let i = 0;
        for (let prop in sortedObj) {
            if (/\d/.test(prop)) {
                i++;
                const propNumber = prop[1] + prop[prop.length - 2];
                if (i == 1) {
                    topValue = sortedObj[prop];
                    highestValueKeys.push(propNumber);

                } else {
                    if (sortedObj[prop] == topValue) {
                        highestValueKeys.push(propNumber);
                    }
                }
            } else {
                i++;
                if (i == 1) {
                    topValue = sortedObj[prop];
                    highestValueKeys.push(prop);

                } else {
                    if (sortedObj[prop] == topValue) {
                        highestValueKeys.push(prop);
                    }
                }
            }

        }
        return highestValueKeys;
    },
    combineArrays(arrays) {
        if (arrays.length == 2) {
            let combinedArray = [];
            let i = 0;
            arrays[0].forEach(array => {
                combinedArray.push(`${array} ${arrays[1][i]}`);
                i++;
            });
            return combinedArray;
        } else if (arrays.length == 3) {
            let combinedArray = [];
            let i = 0;
            arrays[0].forEach(array => {
                combinedArray.push([`${array} ${arrays[1][i]}`, arrays[2][i]]);
                i++;
            });
            return combinedArray;
        }
    }
};

export default globalMethods;