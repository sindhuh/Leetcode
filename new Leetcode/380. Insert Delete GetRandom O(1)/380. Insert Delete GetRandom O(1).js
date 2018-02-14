/**
 * Created by sindhuhari on 2/5/18.
 */
/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.nums = [];
    this.map = {};
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.map[val] === undefined) {
        this.nums.push(val);
        this.map[val] = this.nums.length -  1;
        return true;
    }
    return false
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(this.map[val] !== undefined) {
        this.nums.splice(this.map[val], 1)
        this.map[val] = undefined;
        return true;
    }
    return false;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.nums[Math.floor(Math.random()* this.nums.length)]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

var random = new RandomizedSet();
console.log(random.insert(0));
console.log(random.insert(1));
console.log(random.remove(0));
console.log(random.insert(2));
console.log(random.remove(1));
console.log(random.getRandom());




