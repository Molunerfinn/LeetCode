/*
 * @lc app=leetcode id=239 lang=javascript
 *
 * [239] Sliding Window Maximum
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  if (nums.length === 0) {
    return []
  }
  if (k === 1) {
    return nums
  }
  let queue = []
  let result =[]
  let length = nums.length
  let max

  for (let i = 0; i < k; i++) {
    max = handleQueue(nums, k, i, queue)
  }

  result.push(max)

  for (let i = k; i < length; i++) {
    max = handleQueue(nums, k, i, queue)
    result.push(max)
  }

  return result
};

// 使用单调递增队列来实现
// 每次推入一个新值之前，判断之前最大值的index是否超出滑动窗口
// 如果超出就pop，如果没有就继续插入
// 插入新值时，遇到比新值更小的值就弹出
// 最后返回递增队列最后一个index的value值（最后一个是最大值）
function handleQueue (arr, k, currentIndex, queue) {
  let currentValue = arr[currentIndex]
  let length = queue.length
  if (length === 0) { // 如果队列为空
    queue.push(currentIndex)
    return currentValue
  }
  let maxIndex = queue[length - 1]
  if (currentIndex - k >= maxIndex) { // 如果最大值所在的位置已经超出滑动窗口，就弹出
    queue.pop()
    length--
  }

  if (length === 0) { // 如果队列为空
    queue.push(currentIndex) // 直接push
    return currentValue
  }

  queue = queue.reverse()
  while (arr[queue[queue.length - 1]] < currentValue) { // 将比当前值小的都弹出
    queue.pop()
    if (queue.length === 0) {
      break
    }
  }
  queue.push(currentIndex)
  queue = queue.reverse()
  return arr[queue[queue.length - 1]]
}

