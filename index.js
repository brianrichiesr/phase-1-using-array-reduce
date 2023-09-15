const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

/* Assign the result of using reduce on the 'batteryBatches' array */
const totalBatteries = batteryBatches.reduce((acc, curr) => {
    return acc += curr;
}, 0);