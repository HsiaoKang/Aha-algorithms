// try to sort the numbers
// 6 1 2 5 4 3 9 7 10 8
const { getNumbers ,createInterface} = require('../units')
let a = getNumbers(10)
let n
console.log('before',a)
function quickSort(left, right) {
    let i, j, t, temp
    if (left > right) {
        return
    }
    temp = a[left]
    i = left
    j = right
    while (i != j) {
        while (a[j] >= temp && i < j) j--
        while (a[i] <= temp && i < j) i++
        if (i < j) {
            t = a[i]
            a[i] = a[j]
            a[j] = t
        }
    }
    a[left] = a[i]
    a[i] = temp
    quickSort(left, i - 1)
    quickSort(i + 1, right)
}
createInterface(null,(value)=>{
    n=value
})
quickSort(1, n)

console.log('after',a)