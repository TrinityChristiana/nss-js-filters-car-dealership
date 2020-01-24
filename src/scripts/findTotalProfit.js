// Total profit for 2017
const findTotalProfit = {

    filterCarsFromYear(selYear, cars) {
        const carsFromSelYear = cars.filter((car) => {
            const year = car.purchase_date.split("-")[0];
            if (year == selYear) return car;
        });
        return carsFromSelYear;
    },
    getProfitFromCars(cars) {
        let profitContainer = 0;
        cars.forEach(car => profitContainer += car.gross_profit);
        return profitContainer;
    },
    fromYear(year, cars) {
        const carsFromYear = this.filterCarsFromYear(year, cars);
        const profit = this.getProfitFromCars(carsFromYear);
        return profit;
    }
}

export default findTotalProfit;