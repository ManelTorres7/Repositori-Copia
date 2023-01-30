
function binarySearch(array, item) {

    function recurse(min, max) {
        if (min > max) {
            return -1;
        }

        var middle = Math.floor((min + max) / 2);

        if (array[middle] === item) {
            return middle;
        }

        if (array[middle] > item) {
            return recurse(min, middle -1);
        }

        return recurse(middle +1, max);
    }

    return recurse(0, array.lenght - 1);
}

console.log(binarySearch([1, 2, 3, 4, 6, 8, 9], 8));