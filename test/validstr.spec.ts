/*=--------------------------------------------------------------=

 Extended String Casing

 Author : Patrik Forsberg
 Web:   : http:/www.coldmind.com
 Email  : patrik.forsberg@coldmind.com
 GitHub : https://github.com/duffman

 I hope this piece of software brings joy into your life, makes
 you sleep better knowing that you are no longer have to scratch
 your head when it comes to converting strings from
 snake_casing to or from PascalCasing!

 String Helper for converting to and from Pascal, Snake and Kebab
 casing, also contains helper methods for determining upper and lower
 case as well as lower and upper casing

 Use this software free of charge, the only thing I ask is that
 you obey to the terms stated in the license, i would also like
 you to keep the file header intact.

 Also, I would love to see you getting involved in the project!

 Enjoy!

 This software is subject to the MIT License, please find
 the full license attached in LICENCE.md

 =---------------------------------------------------------------=*/

import { expect } from "chai";
import "mocha";
import { ExtStringCase } from "../src/ext-string-case";

describe('validStr: Checks if value is a string', () => {
	let input = "string me a song";
	let result = ExtStringCase.validStr(input);

	it('Should be true', () => {
		expect(result).to.true;
	});
});

describe('validStr: Checks if value is a string', () => {
	let input = null;
	let result = ExtStringCase.validStr(input);

	it('Should be false', () => {
		expect(result).to.false;
	});
});