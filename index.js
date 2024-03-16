// Code your solution in this file!
// 1. Functions to select drivers
const returnFirstTwoDrivers = (drivers) => console.log(drivers.slice(0, 2));
const returnLastTwoDrivers = (drivers) => console.log(drivers.slice(-2));

// 2. Array containing driver selection functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 3. Higher-order function to create fare multipliers
const createFareMultiplier = (multiplier) => (fare) => fare * multiplier;

// 4. Fare doubling and tripling functions
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

// 5. Function to select drivers based on a given selection function
const selectDifferentDrivers = (drivers, driverSelector) => driverSelector(drivers);

const drivers = ["Alice", "Bob", "Charlie", "David"];

const firstTwo = selectDifferentDrivers(drivers, returnFirstTwoDrivers);  // Returns ["Alice", "Bob"]
const lastTwo = selectDifferentDrivers(drivers, returnLastTwoDrivers);    // Returns ["Charlie", "David"]

const doubledFare = fareDoubler(10);  // Returns 20
const tripledFare = fareTripler(10); // Returns 30
