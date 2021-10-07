/**
 * @instructions
 * `sum(numbers): Number`
 * Given an array of numbers, return a sum total of all the numbers.
 */
function sum(numbers) {
    // TODO: Add your solution here.
    if (numbers.length > 0) {
        const result = numbers.reduce((total, curVal) => total + curVal);
        return result;
    }
    return 0;
}

/**
 * @instruction
 * `doubleNumbers(numbers): Array`
 * Given an array of numbers, return an array where each element is double its original value.
 */
function doubleNumbers(numbers) {
    // TODO: Add your solution here.
    let total = [];
    for (let num of numbers) {
        total.push(num * 2);
    }
    return total;
}

/**
 * @instruction
 * `doubleCharacters(chars): Array`
 * Given a string, return an array where each element is double its original value. (e.g. 'ab' -> 'aabb')
 */
function doubleCharacters(chars) {
    // TODO: Add your solution here.
    let doubleChar = [];
    for (let i = 0; i < chars.length; i++) {
        doubleChar.push(chars[i]);
        doubleChar.push(chars[i]);
    }
    return doubleChar.join("");
}

/**
 * @instruction
 * `backwardsify(array): Array`
 * Reverse or flip the values in the array.
 */
function backwardsify(array) {
    // TODO: Add your solution here.
    if (array.length > 0) {
        return array.reverse();
    }
    return {};
}

/**
 * @instruction
 * `interleave(list1, list2): Array`
 * Should return a combined single array, with individual values alternating between list1 & list2.
 */
function interleave(arr1, arr2) {
    if (arr1.length == arr2.length) {
        let merge = [];
        for (let i = 0; i < arr1.length; i++) {
            merge.push(arr1[i], arr2[i]);
        }

        return merge;
    }
    return null;
}

/**
 * @instruction
 * `makeRange(count, fillString): Array`
 * Return array of `count` length where each element is set to `fillString`
 */
function makeRange(count, fillString) {
    let result = [];
    let length = parseInt(count);

    for (let i = 0; i < length; i++) {
        result.push(fillString);
    }
    return result;
}

/**
 * @instuction
 * `countByFirstLetter(words): Object`
 * Given an array of words, return an object using *lowercase* letters as keys.
 * The value should be a Number, with the count of words with same starting character.
 *
 * @example
 *
 * const input = ['cat', 'kitty', 'catzilla', 'fluffykins']
 * countByFirstLetter(input)
 * // will return:
 * // {
 * //  c: 2, // cat + catzilla
 * //  k: 1, // kitty
 * //  f: 1  // fluffykins
 * // }
 */

function countByFirstLetter(words) {
    // TODO: Add your solution here.
}

/**
 * @instructions
 * `groupByFirstLetter(words): Object`
 * Given an array of words, return an object using *lowercase* letters as keys.
 * The key value should be an array with only
 * the words sharing a starting character.
 *
 * @example
 *
 * const input = ['Cat', 'Kitty', 'catzilla', 'fluffykins']
 * const result = groupByFirstLetter(input)
 * // result deep equals:
 * // {
 * //  c: ['cat', 'catzilla'],
 * //  k: ['kitty'],
 * //  f: ['fluffykins']
 * // }
 *
 */

function groupByFirstLetter(words) {
    // TODO: Add your solution here.
}

/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////

if (typeof exports !== "undefined") {
    // IGNORE: Test/Env Detected
    // For Node/Non-browser test env
    module.exports = {
        sum,
        doubleCharacters,
        doubleNumbers,
        backwardsify,
        interleave,
        makeRange,
        countByFirstLetter,
        groupByFirstLetter,
    };
}
