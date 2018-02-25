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
"use strict";
var chai_1 = require("chai");
require("mocha");
var ext_string_case_1 = require("../src/ext-string-case");
describe('validStr: Checks if value is a string', function () {
    var input = "string me a song";
    var result = ext_string_case_1.ExtStringCase.validStr(input);
    it('Should be true', function () {
        chai_1.expect(result).to.true;
    });
});
describe('validStr: Checks if value is a string', function () {
    var input = null;
    var result = ext_string_case_1.ExtStringCase.validStr(input);
    it('Should be false', function () {
        chai_1.expect(result).to.false;
    });
});
