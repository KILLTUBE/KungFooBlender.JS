/**
 * @example ```js
 * sum([1, 2, 3]);
 * ```
 * @param {number[]} arr 
 * @returns {number}
 */

function sum(arr) {
  return arr.reduce((acc, cur)=>acc+cur, 0);
}


/**
 * @example ```js
 * console.log(joinBeforeAfter([1,2,3], "  ", ",\n"))
 * ```
 * @param {[]} arr 
 * @param {string} before 
 * @param {string} after 
 * @returns {string}
 */
function joinBeforeAfter(arr, before, after) {
  var ret = '';
  var i;
  var n;
  // #########################
  n = arr.length;
  for (i=0; i<n; i++) {
    ret += before;
    ret += arr[i];
    if (i + 1 < n) {
      ret += after;
    }
  }
  return ret;
}

/**
 * @param {any[]} arr
 * @returns 
 */

function isArray(arr) {
  if (arr instanceof Array) {
    return true;
  }
  if (arr instanceof Float32Array) {
    return true;
  }
  // Not using any other array's currently and there should be a better way.
  //if (arr instanceof Float64Array) {
  //  return true;
  //}
  // Check Int32Array etc.
}

/**
 * @example ```js
 * // Prints: [5,10,12]
 * console.log(min([10,11,12], [5,10,15]))
 * ```
 * @todo
 * Support varargs, so code like `min(...Entity.all.map(e=>e.position))` will work
 * @param {Array} a 
 * @param {Array} b 
 * @returns {Array}
 */
function min(a, b) {
  if (isArray(a) && isArray(b)) {
    var n = Math.max(a.length, b.length);
    var ret = Array(n);
    for (var i=0; i<n; i++) {
      // If one array is shorter than the other, this will compare undefined and return NaN...
      // IMO programmers fault to find minimum values in such cases
      ret[i] = Math.min(a[i], b[i]);
    }
    return ret;
  } else {
    console.warn(`Unimplemented: min(${typeof a}, ${typeof b})`);
  }
}