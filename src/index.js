
exports.min = function min (array) {
if (array !== undefined && array.length > 0) {
    let min_value = array[0];
    for (i = 0; i < array.length; i++) {
        if (min_value > array[i]) {
            min_value = array[i];
        }
        }
return min_value;
        }
    else {
        return 0;
    }
    }

exports.max = function max (array) {
    if (array !== undefined && array.length > 0) {
    let max_value = array[0];
    for (i = 0; i < array.length; i++) {
        if (max_value < array[i]) {
            max_value = array[i];
        }
        }
return max_value;
        }
    else {
        return 0;
    }
}

exports.avg = function avg (array) {
  if (array !== undefined && array.length > 0) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        let avg_array = sum / array.length
        return avg_array
    } else return 0;
}
