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

describe('toSnakeCase: Dash to Snake Case conversion', () => {
	let input = "sweet-child-of-mine";
	let result = ExtStringCase.toSnakeCase(input);

	it('Should be Snake Cased', () => {
		const expected = "sweet_child_of_mine";
		expect(result).to.equal(expected);
	});
});

describe('toSnakeCase: Pascal to Snake Case conversion', () => {
	let input = "SweetChildOfMine";
	let result = ExtStringCase.toSnakeCase(input);

	it('Should be Snake Cased', () => {
		const expected = "sweet_child_of_mine";
		expect(result).to.equal(expected);
	});
});

describe('toSnakeCase: Camel to Snake Case conversion', () => {
	let input = "sweetChildOfMine";
	let result = ExtStringCase.toSnakeCase(input);

	it('Should be Snake Cased', () => {
		const expected = "sweet_child_of_mine";
		expect(result).to.equal(expected);
	});
});

describe('toSnakeCase: Wild String to Snake Case conversion', () => {
	let input = "Sweet_Child of >>mine<< !!";
	let result = ExtStringCase.toSnakeCase(input);

	it('Should be Snake Cased', () => {
		const expected = "sweet_child_of_mine";
		expect(result).to.equal(expected);
	});
});