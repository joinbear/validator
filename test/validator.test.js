const { ok } = require('assert');
const validator = require('../src/validator');

// test case by mocha
describe("validator",()=>{

	// validator.isPhone
	describe("#isPhone",()=>{
  		it("should return true when the phone number is 18283333330",()=>{
        	ok(validator.isPhone("18283333330"));
		});
		it("should return false when the phone number start with 16",()=>{
        	ok(!validator.isPhone("16283333330"));
		});
		it("should return false when the phone number's length is unequal 11",()=>{
        	ok(!validator.isPhone('158111111111'));
        	ok(!validator.isPhone('1581111111'));
		});
	});
	// validator.isCn
	describe("#isCn",()=>{
		it("should return true if the test string is 我是测试中文！",()=>{
			ok(validator.isCn("我是测试中文！"));
		});
		it("should return true if the test string is test the chinese string",()=>{
			ok(!validator.isCn('test the chinese string'));
		});
	});
	// validator.isCar
	describe("#isCar",()=>{
		it("should return true if the car number like '粤B39006' ",()=>{
			ok(validator.isCar("粤B39006"));
		});

		it("should return false if the car number like 'B39006粤' ",()=>{
			ok(!validator.isCar("B39006粤"));
		});

		it("should return true if the car number like 'AB39006' ",()=>{
			ok(validator.isCar("AB39006"));
		});
	});

	// validator.isWx
	describe("#isWx",()=>{
		it("should return true if the wechat id like flyinwater ",()=>{
			ok(validator.isWx("flyinwater"));
		});

		it("should return false if the wechat id like aaa ",()=>{
			ok(!validator.isWx("aaa"));
		});

		it("should return false if the wechat id like flyinwater255487744474447744 ",()=>{
			ok(!validator.isWx("flyinwater255487744474447744"));
		});
	});

	// validator.isQq
	describe("#isQq",()=>{
		it("should return true if the wechat id like 7390155 ",()=>{
			ok(validator.isQq("7390155"));
		});

		it("should return false if the wechat id like 1234 ",()=>{
			ok(!validator.isQq("aaa"));
		});

		it("should return false if the wechat id like 01234567891124 ",()=>{
			ok(!validator.isQq("01234567891124"));
		});
	});

	// validator.isDay
	describe("#isDay",()=>{
		it("should return true if the wechat id like 2017-01-01 ",()=>{
			ok(validator.isDay("2017-01-01"));
		});

		it("should return false if the wechat id like 2017-15-01 ",()=>{
			ok(!validator.isDay("2017-15-01"));
		});

		it("should return false if the wechat id like 2017-02-31 ",()=>{
			ok(!validator.isDay("2017-02-31"));
		});
	});

	// validator.isColor
	describe("#isColor",()=>{
		it("should return true if the wechat id like #ff6600",()=>{
			ok(validator.isColor("#ff6600"));
		});

		it("should return true if the wechat id like #f60",()=>{
			ok(validator.isColor("f60"));
		});

		it("should return false if the wechat id like #ff660000",()=>{
			ok(!validator.isColor("#ff660000"));
		});

		it("should return false if the wechat id like ff660",()=>{
			ok(!validator.isColor("ff660"));
		});
	});

	// validator.isIpv4
	describe("#isIpv4",()=>{
		it("should return true if the wechat id like 192.168.0.1",()=>{
			ok(validator.isIpv4("192.168.0.1"));
		});

		it("should return false if the wechat id like 128.111.15",()=>{
			ok(!validator.isIpv4("128.111.15"));
		});
	});

	// validator.isIdentity
	describe("#isIdentity",()=>{
		it("should return true if the wechat id like 51032119880514478X",()=>{
			ok(validator.isIdentity("51032119880514478X"));
		});

		it("should return true if the wechat id like 130503670401001",()=>{
			ok(validator.isIdentity("130503670401001"));
		});

		it("should return false if the wechat id like 12512544445414",()=>{
			ok(!validator.isIdentity("12512544445414"));
		});
	});

	// validator.isEmail
	describe("#isEmail",()=>{
		it("should return true if the wechat id like 12345678@qq.com",()=>{
			ok(validator.isEmail("12345678@qq.com"));
		});

		it("should return true if the wechat id like xy1234@163.com",()=>{
			ok(validator.isEmail("xy1234@163.com"));
		});

		it("should return false if the wechat id like 123485741abc.com",()=>{
			ok(!validator.isEmail("123485741abc.com"));
		});
	});

	// validator.isPositive
	describe("#isPositive",()=>{
		it("should return true if the wechat id like 6",()=>{
			ok(validator.isPositive("6"));
		});

		it("should return true if the wechat id like 6.35",()=>{
			ok(validator.isPositive("6.35"));
		});

		it("should return false if the wechat id like -6",()=>{
			ok(!validator.isPositive("-6"));
		});
	});

	// validator.isNegative
	describe("#isNegative",()=>{
		it("should return true if the wechat id like -6",()=>{
			ok(validator.isNegative("-6"));
		});

		it("should return true if the wechat id like -6.35",()=>{
			ok(validator.isNegative("-6.35"));
		});

		it("should return false if the wechat id like 6",()=>{
			ok(!validator.isNegative("6"));
		});
	});

	// validator.isPassword
	describe("#isPassword",()=>{
		it("should return true if the wechat id like A4545adfsfs@123!",()=>{
			ok(validator.isPassword("A4545adfsfs@123!"));
		});

		it("should return true if the wechat id like abc132@55A",()=>{
			ok(validator.isPassword("abc132@55A"));
		});

		it("should return false if the wechat id like 1234",()=>{
			ok(!validator.isPassword("1234"));
		});

		it("should return false if the wechat id like 12345678910111111154@avbg",()=>{
			ok(!validator.isPassword("12345678910111111154@avbg"));
		});
	});


	// validator.isUsername
	describe("#isUsername",()=>{

		it("should return true if the wechat id like abdfc124242",()=>{
			ok(validator.isUsername("abdfc124242"));
		});

		it("should return true if the wechat id like av124ertf",()=>{
			ok(validator.isUsername("av124ertf"));
		});

		it("should return false if the wechat id like a4154544555aaaadff",()=>{
			ok(!validator.isUsername("a4154544555aaaadff"));
		});

		it("should return false if the wechat id like 123",()=>{
			ok(!validator.isUsername("123"));
		});

	});

	// validator.isIos
	describe("#isIos",()=>{
		it("should return true if the wechat id like mozilla/5.0 (iphone; cpu iphone os 5_1_1 like mac os x) applewebkit/534.46 (khtml, like gecko) mobile/9b206 micromessenger/5.0",()=>{
			ok(validator.isIos("mozilla/5.0 (iphone; cpu iphone os 5_1_1 like mac os x) applewebkit/534.46 (khtml, like gecko) mobile/9b206 micromessenger/5.0"));
		});

		it("should return false if the wechat id like ",()=>{
			ok(!validator.isIos("mozilla/5.0 (android; cpu android 8.0) applewebkit/534.46 (khtml, like gecko) mobile/9b206 micromessenger/5.0"));
		});
	});

});
