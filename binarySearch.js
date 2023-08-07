// given array
const array = [2, 4, 5, 8, 23, 45, 55, 60, 65, 67, 80, 94, 100];

// we will find the targeted value
const target = 80;

const binarySearch = (arr, x) => {
    let lowBand = 0;
    let upperBand = arr.length - 1;
    let mid;

    while (lowBand <= upperBand) {
        mid = Math.floor((lowBand + upperBand) / 2);

        if (arr[mid] == x)
            return mid;
        
        if (arr[mid] < x) {
            lowBand = mid + 1;
        }

        if (arr[mid] > x) {
            upperBand = mid - 1;
        }
    }
    return false;
};

console.log(binarySearch(array, target));