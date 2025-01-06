const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (Object.prototype.toString.call(arr) !== '[object Array]') {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }

  let isDiscardNext = false;
  let isDoubleNext = false;
  let isPrevExist = true;
  let transformed = [];

  arr.forEach((element) => {
    switch (element) {
      case '--discard-next': 
        isDiscardNext = true;
      break;
      case '--discard-prev':
        if (isPrevExist) {
          if (transformed.length > 1) {
            transformed.splice(-1, 1);
          }
        }  else {
          isPrevExist = true; 
        }
      break
      case '--double-next':
        isDoubleNext = true;
      break;
      case '--double-prev':
        if (isPrevExist) {
          if (transformed.length > 1) {
            transformed.push(transformed[transformed.length - 1]);
          }
        } else {
          isPrevExist = true;
        }
      break;
      default: 
        if (isDiscardNext ||isDoubleNext) {
          if (isDiscardNext) {
            isDiscardNext = false;
            isPrevExist = false;
          }
          if (isDoubleNext) {
            transformed.push(element);
            transformed.push(element);

            isDoubleNext = false;
          }
        } else {
          transformed.push(element);
        }
      break;
    }
  })

  return transformed;
}

module.exports = {
  transform
};
