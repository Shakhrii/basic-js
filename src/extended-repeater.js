const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';
  str = String(str);

  let additionStr = options.addition;
  const repeatTimes = options.repeatTimes || 1;
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  const separator = options.separator || '+';
  const additionSeparator = options.additionSeparator || '|';
  
  if (additionStr !== undefined) {
    additionStr = String(additionStr);
  } else {
    additionRepeatTimes = 0;
  }

  for (let i = 0; i < repeatTimes; i += 1) {
    result += str;
    for (let j = 0; j < additionRepeatTimes; j += 1) {
      result += additionStr;
      if (additionRepeatTimes > 1 && j !== additionRepeatTimes - 1) {
        result += additionSeparator;
      }
    }
    if (repeatTimes > 1 && i !== repeatTimes - 1) {
      result += separator;
    }
  }

  return result;
}

repeater('la', {repeatTimes: 3,});

module.exports = {
  repeater
};
