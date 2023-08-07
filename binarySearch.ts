// function interface
interface IBinarySearch {
    (arr:number[], x: number): number | boolean
}

export const binarySearch:IBinarySearch = (arr, x)=> {
    let lowerBand = 0;
    let upperBand = arr.length - 1;
    let mid: number;

    while (lowerBand <= upperBand) {
        mid = Math.floor((lowerBand + upperBand) / 2);
        if (arr[mid] === x)
            return mid;
        
        if (arr[mid] < x) {
            lowerBand = mid + 1;
        }

        if (arr[mid] > x) {
            upperBand = mid - 1;
        }
    }

    return false;
}

const sortedArray = [1, 7, 12, 18, 23, 29, 34, 40, 45, 50, 51, 55];
const result = binarySearch(sortedArray, 45);

console.log(result ? `The tageted value is found at ${result}th element in the given array`
    :
    'The targeted value is not found in the given array');