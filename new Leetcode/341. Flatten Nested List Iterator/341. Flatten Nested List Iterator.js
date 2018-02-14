/**
 * Created by sindhuhari on 2/14/18.
 */
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function (nestedList) {
    this.stack = [];
    for (var i = nestedList.length - 1; i >= 0; i--) {
        this.stack.push(nestedList[i])
    }
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
    while (this.stack.length > 0) {
        var topElement = this.stack[this.stack.length - 1];
        if (topElement.isInteger()) {
            return true;
        }
        this.stack.pop();
        var list = topElement.getList();
        for(var i = list.length - 1; i >= 0; i--) {
            this.stack.push(list[i]);
        }
    }
    return false;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
    return this.stack.pop();
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
 */