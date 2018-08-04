/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    var tmp = nums1;
    nums1 = nums2;
    nums2 = tmp;
  }

  var minI = 0;
  var maxI = nums1.length;
  var done = false;

  do {
    var i = Math.floor((minI + maxI) / 2);
    var j = Math.floor((nums1.length + nums2.length + 1) / 2) - i;

    var lastLeft1 = (nums1[i - 1] === undefined) ? -Infinity : nums1[i - 1];
    var lastLeft2 = (nums2[j - 1] === undefined) ? -Infinity : nums2[j - 1];
    var firstRight1 = (nums1[i] === undefined) ? Infinity : nums1[i];
    var firstRight2 = (nums2[j] === undefined) ? Infinity : nums2[j];

    var aBeforeB = lastLeft1 <= firstRight2;
    var bBeforeA = lastLeft2 <= firstRight1;
    done = aBeforeB && bBeforeA;

    if (aBeforeB) minI = i + 1;
    if (bBeforeA) maxI = i - 1;

    if (done) {
      const totalLength = nums1.length + nums2.length;
      const isOdd = !!(totalLength % 2);
      return isOdd
        ? Math.max(lastLeft1, lastLeft2)
        : ((Math.max(lastLeft1, lastLeft2) + Math.min(firstRight1, firstRight2)) / 2);
    }
  } while (!done);
};

var test = [[-5, 3, 6, 12, 15], [-12, -10, -6, -3, 4, 10]];
console.log('testing:', test);
console.log(findMedianSortedArrays(test[0], test[1]));
console.log(' ');
test = [[2, 3, 5, 8], [10, 12, 14, 16, 18, 20]];
console.log('testing:', test);
console.log(findMedianSortedArrays(test[0], test[1]));
