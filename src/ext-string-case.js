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
var log = console.log;
var StringCasing;
(function (StringCasing) {
    StringCasing[StringCasing["Dash"] = 0] = "Dash";
    StringCasing[StringCasing["Word"] = 1] = "Word";
})(StringCasing || (StringCasing = {}));
var ExtStringCase = (function () {
    function ExtStringCase() {
    }
    ExtStringCase.testLog = function (desc, value) {
        log(desc, value);
    };
    ExtStringCase.testLogBool = function (desc, value) {
        var valueStr = value ? "true" : "false";
        log(desc, valueStr);
    };
    /**
     * Check wheter a string is assigned and has a length
     * @param str
     * @returns {boolean}
     */
    ExtStringCase.validStr = function (str) {
        return !((str === undefined) || (!str || 0 === str.length));
    };
    /**
     * Determines if the given char is an ASCII Char
     * @param char - char to test
     * @returns {boolean}
     */
    ExtStringCase.isLetter = function (char) {
        var firstChar = char.charAt(0).toUpperCase();
        return !(firstChar.toLowerCase() == firstChar);
    };
    /**
     * Tests if a given string contains only letters
     * @param str
     * @returns {boolean}
     */
    ExtStringCase.onlyLetters = function (str) {
        return (/^[a-zA-Z]+$/.test(str));
    };
    /**
     * Returns the given string with first letter in upper case
     * @param str - input string
     * @returns {string}
     */
    ExtStringCase.upperFirst = function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    /**
     * Returns the given string with first letter in lower case
     * @param str - input string
     * @returns {string}
     */
    ExtStringCase.lowerFirst = function (str) {
        return str.charAt(0).toLowerCase() + str.slice(1);
    };
    /**
     * Determines if the given string is in lower case
     * @param str - the string to test
     * @returns {boolean}
     */
    ExtStringCase.isLowerCase = function (str) {
        return !ExtStringCase.isUpperCase(str);
    };
    /**
     * Determines if the given string is in upper case
     * @param str - the string to test
     * @returns {boolean}
     */
    ExtStringCase.isUpperCase = function (str) {
        return (str.toUpperCase() == str);
    };
    /**
     * Semi-smart method to convert snake to pascal
     * and the other way around
     * @param data
     * @param toLowerPascal
     */
    ExtStringCase.invertCasing = function (data, toLowerPascal) {
        if (toLowerPascal === void 0) { toLowerPascal = false; }
        if (data.indexOf("_") > -1 || data.indexOf("-") > -1) {
            return ExtStringCase.snakeToPascalCase(data, toLowerPascal);
        }
        else {
            return ExtStringCase.pascalToSnakeCase(data);
        }
    };
    /**
     *
     * @param data
     * @param fillChar - replace char for
     * @returns {string}
     */
    ExtStringCase.unifyString = function (data, fillChar, stripNoneLetters) {
        if (fillChar === void 0) { fillChar = "_"; }
        if (stripNoneLetters === void 0) { stripNoneLetters = false; }
        var prevChar = "";
        var currChar = "";
        var aheadChar = "";
        var chunk = "";
        for (var i = 0; i < data.length; i++) {
            var isFirstChar = (i == 0);
            prevChar = currChar;
            currChar = data[i];
            aheadChar = data[i + 1];
            if (!ExtStringCase.onlyLetters(currChar)) {
                currChar = fillChar;
                if (stripNoneLetters)
                    continue;
            }
            if (prevChar == fillChar && currChar == fillChar)
                continue;
            chunk += currChar;
        }
        return chunk;
    };
    /**
     * Converts a snake cased string to pascal casing
     * @param data
     * @param lowerPascal
     * @returns {string}
     */
    ExtStringCase.snakeToPascalCase = function (data, lowerPascal) {
        if (lowerPascal === void 0) { lowerPascal = false; }
        var currChar = "";
        var aheadChar = "";
        var chunk = "";
        for (var i = 0; i < data.length; i++) {
            var isFirstChar = (i == 0);
            currChar = data[i];
            aheadChar = data[i + 1];
            if (isFirstChar) {
                chunk += lowerPascal ? currChar.toLowerCase() : currChar.toUpperCase();
                continue;
            }
            // Patrik: 2017-11-24 - added support for kebab input
            if (currChar == "_" || currChar == "-") {
                chunk += ExtStringCase.validStr(aheadChar) ? aheadChar.toUpperCase() : "";
                i++;
                continue;
            }
            chunk += currChar;
        }
        return chunk;
    };
    /**
     * Base method for converting
     * @param data
     * @param kebabCase
     * @returns {string}
     */
    ExtStringCase.convertFromPascalCasing = function (data, kebabCase) {
        if (kebabCase === void 0) { kebabCase = false; }
        if (data.length < 3) {
            return data.toLowerCase();
        }
        var currChar = "";
        var aheadChar = "";
        var chunk = "";
        for (var i = 0; i < data.length; i++) {
            currChar = data[i];
            aheadChar = data[i + 1];
            if (i > 0 && ExtStringCase.isUpperCase(currChar)) {
                chunk += kebabCase ? "-" : "_";
            }
            chunk += currChar;
        }
        return chunk.toLowerCase();
    };
    /**
     * Convert given string to Snake Casing
     * @param data
     * @returns {string}
     */
    ExtStringCase.pascalToSnakeCase = function (data) {
        return ExtStringCase.convertFromPascalCasing(data);
    };
    /**
     * Convert given string to Dash Casing
     * @param data
     * @returns {string}
     */
    ExtStringCase.pascalToDashCase = function (data) {
        return ExtStringCase.convertFromPascalCasing(data, true);
    };
    ExtStringCase.toSnakeCase = function (data) {
        return "";
    };
    ExtStringCase.toDashCase = function (data) {
        data = ExtStringCase.unifyString(data, "-");
        return ""; //ExtStringCase.to
    };
    ExtStringCase.toPascalCase = function (data, lowerFirst) {
        if (lowerFirst === void 0) { lowerFirst = false; }
        if (!ExtStringCase.onlyLetters(data)) {
            data = ExtStringCase.unifyString(data);
        }
        if (!ExtStringCase.onlyLetters(data)) {
            data = ExtStringCase.snakeToPascalCase(data, lowerFirst);
        }
        else {
            data = lowerFirst ? ExtStringCase.lowerFirst(data) : ExtStringCase.upperFirst(data);
        }
        return data;
    };
    ExtStringCase.toCamelCase = function (data) {
        return ExtStringCase.toPascalCase(data, true);
    };
    ExtStringCase.test2 = function () {
        //var res = ExtStringCase.unifyString("Hej -Och hå   upp idet- blå");
        console.log("toSnakeCase ::", ExtStringCase.toSnakeCase(data));
        console.log("toDashCase ::", ExtStringCase.toDashCase(data));
        console.log("toPascalCase ::", ExtStringCase.toPascalCase(data));
        console.log("toCameCase ::", ExtStringCase.toCamelCase(data));
    };
    ExtStringCase.test = function () {
        var snakeCase = "player_base_data_here_we_come";
        ExtStringCase.testLogBool("Is Letter 'A':", ExtStringCase.isLetter("A"));
        ExtStringCase.testLogBool("Is Letter '?':", ExtStringCase.isLetter("?"));
        ExtStringCase.testLogBool("Is UpperCase 'A':", ExtStringCase.isUpperCase("A"));
        ExtStringCase.testLogBool("Is UpperCase 'a':", ExtStringCase.isUpperCase("a"));
        ExtStringCase.testLogBool("Is LowerCase 'y':", ExtStringCase.isLowerCase("y"));
        ExtStringCase.testLogBool("Is LowerCase 'Y':", ExtStringCase.isLowerCase("Y"));
        var tmp = snakeCase;
        console.log("------------");
        ExtStringCase.testLog("Snake:", snakeCase);
        var pascalCase = ExtStringCase.snakeToPascalCase(snakeCase);
        ExtStringCase.testLog("Snake to: Pascal:", pascalCase);
        tmp = ExtStringCase.snakeToPascalCase(snakeCase, true);
        ExtStringCase.testLog("Snake to: Lower Pascal:", tmp);
        console.log("------------");
        tmp = ExtStringCase.pascalToSnakeCase(pascalCase);
        ExtStringCase.testLog("Pascal to: Snake:", tmp);
        tmp = ExtStringCase.pascalToDashCase(pascalCase);
        ExtStringCase.testLog("Pascal to: Dash:", tmp);
        console.log("------------");
        tmp = ExtStringCase.invertCasing(pascalCase);
        ExtStringCase.testLog("Inverted from Pascal:", tmp);
        tmp = ExtStringCase.invertCasing(snakeCase);
        ExtStringCase.testLog("Inverted from Snake:", tmp);
        tmp = ExtStringCase.invertCasing(snakeCase, true);
        ExtStringCase.testLog("Inverted from Snake (lower flag):", tmp);
    };
    return ExtStringCase;
}());
exports.ExtStringCase = ExtStringCase;
ExtStringCase.test2();
