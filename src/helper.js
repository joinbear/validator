'use strict';
/**
 * [exports use regexp resolve problem]
 * @type {Object}
 */
const helper = {
	/**
	 * [pattern text替换规则，实现可以扩展]
	 * @type {Array}
	 */
	pattern:[{
		label: '<',
		value: '&lt;'
	},{
		label: '>',
		value: '&gt;'
	},{
		label: '&',
		value: '&amp;'
	},{
		label: '\"',
		value: '&quot;'
	},{
		label: '\r',
		value: '<br>'
	},{
		label: '\n',
		value: '<br/>'
	}],
	/**
	 * [createReg 创建替换正则]
	 * @param  {Boolean} positive [正向为true,反向为false]
	 * @return {[type]}           [description]
	 */
	createReg(positive = true){
		const reg = helper.pattern.map((element)=>{
			return positive ? element.label : element.value;
		}).join("|");
		return new RegExp(reg,'g');
	},
	/**
	 * [findPattern 根据匹配的正则，寻找表达式]
	 * @param  {[type]} reg [正则]
	 * @return {[type]}     [description]
	 */
	findPattern(reg){
		let pattern = helper.pattern;
		for(let i in pattern){
			let element = pattern[i];
			if(element.label == reg || element.value == reg){
				return element;
			}
		}
		return "";
	},
	/**
	 * [text2Html 替换textarea内容为html Unicode]
	 * @param  {String} value [替换文本内容]
	 * @return {String}       [description]
	 */
	text2Html(text){
		return text.replace(helper.createReg(),(match)=>{
			return helper.findPattern(match)['value'];
		}); 
	},
	/**
	 * [html2Text 替换html Unicode内容为textarea]
	 * @param  {String} value [替换文本内容]
	 * @return {String}       [description]
	 */
	html2Text(html){
		return html.replace(helper.createReg(false),(match)=>{
			return helper.findPattern(match)['label'];
		}); 
	},
	firstUpperCase(str) {
  		return str.toLowerCase().replace(/\b[a-z]/g,first=> first.toUpperCase() );
  	}
}
module.exports = helper;