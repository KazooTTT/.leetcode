/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const dict = new Map();
  for (let i = 0; i < nums.length; i++) {
    const x = target - nums[i];
    if (dict.has(x)) {
      return [dict.get(x), i];
    }
    dict.set(nums[i], i);
  }
};
// @lc code=end
