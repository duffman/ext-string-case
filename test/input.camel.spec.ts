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

 String Helper for converting to and from Pascal, Snake, Dash adn
 Camel casing, also contains helper methods for determining upper
 and lower case as well as lower and upper casing

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

// Pascal

describe('camelToPascalCase: Camel to Pascal case', () => {
	let input = "useYourIllusion";
	let result = ExtStringCase.camelToPascalCase(input);

	it('Should be Pascal cased', () => {
		const expected = "UseYourIllusion";
		expect(result).to.equal(expected);
	});
});

// Snake

describe('camelToSnakeCase: Camel to Snake case', () => {
	let input = "useYourIllusion";
	let result = ExtStringCase.camelToSnakeCase(input);

	it('Should be Camel cased', () => {
		const expected = "use_your_illusion";
		expect(result).to.equal(expected);
	});
});

// Dash

describe('camelToDashCase: Camel to Dash case', () => {
	let input = "useYourIllusion";
	let result = ExtStringCase.camelToDashCase(input);

	it('Should be Snake cased', () => {
		const expected = "use_your_illusion";
		expect(result).to.equal(expected);
	});
});