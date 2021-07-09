// 冒泡排序
// 每次比较相邻的两个元素，顺序错误就交换过来
// Array.from(new Array(10000),(item,i)=>i)
// 一万，72ms
// 十万，栈溢出
function bubbleSort(nums) {
  console.time("run time");
  let count = nums.length - 1;
  let _nums = [...nums];
  function diff() {
    if (count === 0) {
      return _nums;
    }
    for (let i = 0; i < count; i++) {
      if (_nums[i] < _nums[i + 1]) {
        const num = _nums[i];
        _nums[i] = _nums[i + 1];
        _nums[i + 1] = num;
      }
    }
    count--;
    diff();
  }
  diff();
  console.timeEnd("run time");
  return _nums;
}

// 书中的方式
// 十万 7077ms
// 一百万 715225ms 牛逼
// 时间复杂度 O(N^2)
function bubbleSort2(nums) {
  console.time("run time");
  let _nums = [...nums];
  let count = _nums.length - 1;
  // 从左至右遍历，取出与所有数对比的 _nums[i]
  for (let i = 0; i < _nums.length - 1; i++) {
    // 从左至右遍历,取出与 _nums[i] 对比的每一个数
    for (let j = 0; j < count; j++) {
      // 操作对象为新数组，对比相邻数的大小，每次j循环完毕，会把剩余i后的最大值存在j位置
      // 原本j位置的数则向后移一位
      if (_nums[j] < _nums[j + 1]) {
        const num = _nums[j];
        _nums[j] = _nums[j + 1];
        _nums[j + 1] = num;
      }
    }
    count--;
  }
  console.timeEnd("run time");
  return _nums;
}
