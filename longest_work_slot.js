// Function to find the nurse with the longest single shift
function findLongestSingleSlot(leaveTimes) {
    let longestShift = 0;
    let longestShiftNurse = -1;
    let previousLeaveTime = 0;

    for (let i = 0; i < leaveTimes.length; i++) {
        let currentShift = leaveTimes[i][1] - previousLeaveTime;
        if (currentShift > longestShift) {
            longestShift = currentShift;
            longestShiftNurse = leaveTimes[i][0];
        }
        previousLeaveTime = leaveTimes[i][1];
    }

    // Convert the employee number to a character
    return String.fromCharCode(97 + longestShiftNurse);
}

// Test the function with some data
let leaveTimes = [
    [0, 5],
    [1, 10],
    [2, 15],
    [3, 20],
    [4, 25],
    [5, 30]
];

console.log(findLongestSingleSlot(leaveTimes));