/*
 * @lc app=leetcode.cn id=142 lang=typescript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function detectCycle(head: ListNode | null): ListNode | null {
    let fast = head
    let slow = head
    while (true) {
        fast = fast?.next?.next
        slow = slow?.next
        if (!slow || !fast) return null
        if (fast === slow) break
    }
    // break 说明存在环
    fast = head
    while (true) {
        if (fast === slow) break
        fast = fast.next
        slow = slow.next
    }
    return slow
}

// @lc code=end

