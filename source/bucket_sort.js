// 桶排序
// 目标 8,5,5,3,2 最大值10，从大到小
// 测试数据 Array.from(new Array(1000000),(item,i)=>i)
// 十万 数据 12.4ms
// 一百万 数据 163.3ms
// 时间复杂度 O(M+N)
function bucketSort(nums, max) {
  console.time("run time");
  // 第一次循环 M
  let buckets = Array.from(new Array(max), () => 0);
  // 第二次循环 N
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    buckets[element]++;
  }
  const result = [];
  // M
  for (let i = max - 1; i > -1; i--) {
    const count = buckets[i];
    if (count > 0) {
      const elms = new Array(count);
      // N
      for (let j = 0; j < elms.length; j++) {
        result.push(i);
      }
    }
  }
  console.timeEnd("run time");
  return result;
}

// js 内置排序方法
// 十万 数据 8.5ms
// 一百万 数据 92ms
function sortFn(nums) {
  console.time("run time");
  const _nums = [...nums]
  const result = _nums.sort((a, b) => {
    return b - a;
  });
  console.timeEnd("run time");
  return result;
}
