
// Findi Missing Number In Array Using Loop 

var arr = [11, 12, 13, 14, 15, 18, 19, 20];

for (i = 0; i < arr.length; i++) {

    var diff = arr[i + 1] - arr[i];
    if (diff > 1) {

        for (var j = 1; j < diff; j++) {
            arr.splice(i+j ,0,arr[i] + j)
        }
    }
}
console.log(arr)