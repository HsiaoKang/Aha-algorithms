// try to sort the numbers
// 6 1 2 5 4 3 9 7 10 8
const { getNumbers, createInterface } = require('../units')
let a,call=0
function quickSort(left, right) {
    call++
    console.log(call,a.join(','), left, right)
    let i, j, t, temp
    if (left > right) {
        return
    }

    // 基准数
    temp = a[left]
    i = left
    j = right
    while (i != j) {
        // 将右侧的拿来对比左侧的数
        // 右侧大于等于左侧 && i 与 j 还未相遇
        while (a[j] >= temp && i < j) {
            // 从右往左移动
            // 直到遇到左侧比基准值更大的数，或者遇到 i
            j--
        }

        // 左侧的数小于基准值 && i 与 j 还未相遇
        while (a[i] <= temp && i < j) {
            // 从左往右已动工
            // 直到遇到大于基准值的数，或者遇到 j
            i++
        }
        // 还未相遇之前
        // 每次行动将 a[i] 和 a[j] 交换位置
        if (i < j) {
            t = a[i]·
            a[i] = a[j]
            a[j] = t
        }
        // console.log(i, j)
    }

    // 基准数归位（更新基准数为当前最小值）
    // a的第一位数重置为 a[i]
    // 假设 i 发生了改变，说明改 a[i] 的值小于上次设定的 temp 基准值;
    a[left] = a[i]
    // 于是更新基准值为当前更小的 a[i]
    a[i] = temp
    console.log(call,a.join(','), left, right)

    // 本地排序后剩余左边的
    quickSort(left, i - 1)
    // 本地排序后剩余右边的
    quickSort(i + 1, right)
}

createInterface('请输入排序个数', (count) => {
    console.log(count, getNumbers(count))
    // FIXME: 无法正常通过输入来设置 numbers 暂时固定为10个随机数
    // a = getNumbers(10)
    a = [3,2,4,5,8,0,1,6,7,9]

    quickSort(0, 10 - 1)
    console.log('after', a)
})
