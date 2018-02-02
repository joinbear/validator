const pattern = require('./pattern');
const helper = require('./helper');
const Validator = function(){
	const validator = {};
	for( let key in pattern ){
		const letter = helper.firstUpperCase(key);
		const actionName = `is${letter}`;
		validator[actionName] = (value)=>{
			return pattern[key].test(value);
		}
	}
	return validator;
}
/**
 * [build validate function base on the patter]
 * @param  {[type]} () [description]
 * @return {[type]}    [description]
 */
module.exports = new Validator();