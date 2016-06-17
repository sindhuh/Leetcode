var array = [1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4];
console.log("array before  removing duplicaties : " +array)
function removeDuplicate(array) {
    var element = 0;
    var i = 0;
    while (i < array.length) {
        element = array[i];
        if (array[i] == array[i + 1]) {
            array.splice(i + 1, 1);
            i = i - 1;
        }
        i = i + 1;
    }
    return array.length;
}

console.log("array after removing duplicaties : " + array)
