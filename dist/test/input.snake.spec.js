"use strict";
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

 String Helper for converting to and from Pascal, Snake and Dash
 casing, also contains helper methods for determining upper and
 lower case as well as lower and upper casing

 Use this software free of charge, the only thing I ask is that
 you obey to the terms stated in the license, i would also like
 you to keep the file header intact.

 Also, I would love to see you getting involved in the project!

 Enjoy!

 This software is subject to the MIT License, please find
 the full license attached in LICENCE.md

 =---------------------------------------------------------------=*/
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const ext_string_case_1 = require("../src/ext-string-case");
// Snake to Pascal
describe('snakeToPascalCase: Snake to Pascal case', () => {
    let input = "sweet_child_of_mine";
    let result = ext_string_case_1.ExtStringCase.snakeToPascalCase(input);
    it('Should be Pascal cased', () => {
        const expected = "SweetChildOfMine";
        chai_1.expect(result).to.equal(expected);
    });
});
// Snake to Camel
describe('snakeToCamelCase: Snake to Camel case', () => {
    let input = "sweet_child_of_mine";
    let result = ext_string_case_1.ExtStringCase.snakeToCamelCase(input);
    it('Should be Camel cased', () => {
        const expected = "sweetChildOfMine";
        chai_1.expect(result).to.equal(expected);
    });
});
// Snake to Dash
describe('snakeToDashCase: Snake to Dash case', () => {
    let input = "sweet_child_of_mine";
    let result = ext_string_case_1.ExtStringCase.snakeToDashCase(input);
    it('Should be Dash cased', () => {
        const expected = "sweet-child-of-mine";
        chai_1.expect(result).to.equal(expected);
    });
});
