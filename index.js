// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2);
}
const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(drivers.length - 2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = (fareMultiplier) => {
    return (fare) => {
        return fare * fareMultiplier;
    }
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (arrayOfDrivers, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(arrayOfDrivers);
}