// Total profit for 2017
const findTotalProfit = {
    // main function that calls methods to calculate data
    // => string
    run(year, data) {
        const carsFromYear = this.filterCarsFromYear(year, data);
        const profit = this.getProfitFromCars(carsFromYear);
        return "$" + profit.toFixed(2);
    },
    // Finds cars from certain year and puts them into an array
    // => array
    filterCarsFromYear(selYear, data) {
        const carsFromSelYear = data.filter((car) => {
            // seperates year number from YYYY-MM-DD format
            const year = car.purchase_date.split("-")[0];
            if (year == selYear) return car;
        });
        return carsFromSelYear;
    },
    // Calculates profit from all cars passed
    // => number
    getProfitFromCars(data) {
        let profitContainer = 0;
        data.forEach(car => profitContainer += car.gross_profit);
        return profitContainer;
    }
}

export default findTotalProfit;