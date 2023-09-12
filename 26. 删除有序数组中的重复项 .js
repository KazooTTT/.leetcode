/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let pre; // 上一个元素的值
    let len = nums.length; // 当前数组的长度
    for (let index = 0; index < len; index++) {
        const cur = nums[index]
        // 获取上一个元素
        pre = index === 0 ? undefined : nums[index - 1]
        console.log(index, cur, pre, pre === cur)

        // 如果当前元素和上一个元素相等
        if (cur === pre) {
            // 删除当前元素
            nums.splice(index, 1)
            // 数组长度减一
            len--
            // 下标减一
            index--
        } else {
            // 如果当前元素和上一个元素不相等
            // 什么都不做
        }
    }
    return nums.length
};

