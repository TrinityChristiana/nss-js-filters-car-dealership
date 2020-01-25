// Total profit for 2017
const findTotalProfit = {
    // main function that calls methods to calculate data
    // => string
    run(year, cars) {
        const carsFromYear = this.filterCarsFromYear(year, cars);
        const profit = this.getProfitFromCars(carsFromYear);
        return "$" + profit.toFixed(2);
    },
    // Finds cars from certain year and puts them into an array
    // => array
    filterCarsFromYear(selYear, cars) {
        const carsFromSelYear = cars.filter((car) => {
            // seperates year number from YYYY-MM-DD format
            const year = car.purchase_date.split("-")[0];
            if (year == selYear) return car;
        });
        return carsFromSelYear;
    },
    // Calculates profit from all cars passed
    // => number
    getProfitFromCars(cars) {
        let profitContainer = 0;
        cars.forEach(car => profitContainer += car.gross_profit);
        return profitContainer;
    }
}

export default findTotalProfit;