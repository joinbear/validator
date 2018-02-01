const { equal } = require('assert');
const helper = require('../src/helper');


// test case by mocha
describe("helper",()=>{
	let textStr = '<111111>"test&1234"\n\raaaa\r\n';
	let htmlStr = '&lt;111111&gt;&quot;test&amp;1234&quot;<br/><br>aaaa<br><br/>';
	let htmlAddStr = '&lt;111111&gt;&quot;test&amp;1234&quot;<br/><br>bbbb<br><br/>';
	describe("#text2Html",()=>{
		it(`should return ${htmlStr}`,()=>{
			equal(htmlStr,helper.text2Html(textStr));
		});
	});

	describe("#html2Text",()=>{
		it(`should return ${textStr}`,()=>{
			equal(textStr,helper.html2Text(htmlStr));
		});
	});

	describe("#pattern",()=>{
		it(`should return ${htmlAddStr}`,()=>{
			helper.pattern.push({
				label: 'a',
				value: 'b'
			});
			equal(htmlAddStr,helper.text2Html(textStr));
		});
	});
	
	describe("#pattern",()=>{
		it(`should return ${textStr}`,()=>{
			equal(textStr,helper.html2Text(htmlAddStr));
		});
	});

});