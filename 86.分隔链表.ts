/*
 * @lc app=leetcode.cn id=86 lang=typescript
 *
 * [86] 分隔链表
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

function partition(head: ListNode | null, x: number): ListNode | null {
    let small = new ListNode(0);
    let smallP = small;
    let large = new ListNode(0);
    let largeP = large;

    while (head) {
        if (head.val < x) {
            smallP.next = {
                val: head.val,
                next: null,
            };
            smallP = smallP.next;
        } else {
            largeP.next = {
                val:head.val,
                next: null,
            };
            largeP = largeP.next;
        }
        head = head.next;
    }
    largeP.next = null;
    smallP.next = large.next;
    return small.next;

};
// @lc code=end

