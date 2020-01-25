const globalMethods = {
    // Pulls out data from object using passed property names
    // Multiple properties can be passed in as an array or a single property can be passed in as a string
    // => array
    getPropertyValue(cars, properties) {
        // Holds all values for selected property
        let container = [];

        // Decides if there are multiple, or just one property passed.
        if (typeof properties == "string") {
            // finds each value for selected property and adds it to container array
            cars.forEach(car => {
                const item = car[properties];
                container.push(item);
            });
        } else {
            // finds each value for selected properties and adds it to container array
            cars.forEach(car => {
                const item = car[properties[0]][properties[1]];
                container.push(item);
            });
        }
        return container;
    },
    //Creates Object that lists how many times a value shows up in an array
    // => object
    countDuplicates(array) {
        // Holds information about duplicates
        let count = {};
        // Counts how many times a number shows up and puts info into count obj
        array.forEach((x) => count[x] = (count[x] || 0) + 1);
        return count;
    },
    // sorts an object from greatest to least using values
    // => object
    sortObj(count, order) {
        // Holds sorted keys
        let keysSorted;

        if (order == "GtoL") {
            // Sorts the keys by number of duplicates greatest to least
            keysSorted = Object.keys(count).sort(function (a, b) {
                return count[b] - count[a]
            });
        } else if (GorL == "LtoG") {
            // Sorts the keys by number of duplicates least to greatest
            keysSorted = Object.keys(count).sort(function (a, b) {
                return count[a] - count[b]
            });
        }
        // New object to hold sorted months
        const sortedObj = {};

        // adds month and amout of duplicates in order of th sorted keys
        keysSorted.forEach(element => {
            sortedObj[/\d/.test(element) ? `"${element}"` : `${element}`] = count[`${element}`];
        });
        return sortedObj;
    },
    // Collects first property in object. If there are others with the same value, it collects that too
    // => array
    collectFirstObjValues(sortedObj) {
        // holds first properties
        const firstKeys = [];

        // Holds value of first property
        let firstValue;

        // counter for property iterator
        let i = 0;

        for (let prop in sortedObj) {

            // tests if property has a number
            if (/\d/.test(prop)) {
                i++;
                // holds property number
                const propNumber = prop[1] + prop[prop.length - 2];

                // adds first key to firstKeys variable
                if (i == 1) {
                    firstValue = sortedObj[prop];
                    firstKeys.push(propNumber);

                } else {
                    // checks to see if there are other keys with same value as first key
                    if (sortedObj[prop] == firstValue) {
                        firstKeys.push(propNumber);
                    }
                }
            } else {
                i++;
                // adds first key to firstKeys variable
                if (i == 1) {
                    firstValue = sortedObj[prop];
                    firstKeys.push(prop);

                } else {
                    // checks to see if there are other keys with same value as first key
                    if (sortedObj[prop] == firstValue) {
                        firstKeys.push(prop);
                    }
                }
            }
        }
        return firstKeys;
    },
    // Combines and matches multiple arrays into one array according to index
    // => array
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
            // Created to combine first and last name array with another array
            let combinedArray = [];
            let i = 0;
            arrays[0].forEach(array => {
                combinedArray.push([`${array} ${arrays[1][i]}`, arrays[2][i]]);
                i++;
            });
            return combinedArray;
        }
    },
    // turns number into month name
    // => string
    getMonthNames(number) {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        return monthNames[parseInt(number, 10) - 1];
    },
    // goes through array to change each item numebr into a month name
    // => array
    changeArrNumWithMonthName(highestKeys) {
        return highestKeys.map(element => this.getMonthNames(element));
    },
    // seperates month number from YYYY-MM-DD format
    // => array of strings
    takeOutMonths(purchaseDates) {
        const monthNumbers = purchaseDates.map(element => {
            return element.split("-")[1];
        });
        return monthNumbers;
    }
};

export default globalMethods;