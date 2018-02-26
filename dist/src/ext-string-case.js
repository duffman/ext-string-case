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

 String Helper for converting to and from Pascal, Snake and Dash ("kebab")
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
Object.defineProperty(exports, "__esModule", { value: true });
let log = console.log;
var StringCasing;
(function (StringCasing) {
    StringCasing[StringCasing["None"] = 0] = "None";
    StringCasing[StringCasing["Snake"] = 1] = "Snake";
    StringCasing[StringCasing["Dash"] = 2] = "Dash";
    StringCasing[StringCasing["Pascal"] = 3] = "Pascal";
    StringCasing[StringCasing["Camel"] = 4] = "Camel";
    StringCasing[StringCasing["Word"] = 5] = "Word";
})(StringCasing || (StringCasing = {}));
class ExtStringCase {
    static testLog(desc, value) {
        log(desc, value);
    }
    static testLogBool(desc, value) {
        let valueStr = value ? "true" : "false";
        log(desc, valueStr);
    }
    /**
     * Check wheter a string is assigned and has a length
     * @param str
     * @returns {boolean}
     */
    static validStr(str) {
        return !((str === undefined) || (!str || 0 === str.length));
    }
    /**
     * Determines if the given char is an ASCII Char
     * @param char - char to test
     * @returns {boolean}
     */
    static isLetter(char) {
        let firstChar = char.charAt(0).toUpperCase();
        return !(firstChar.toLowerCase() == firstChar);
    }
    /**
     * Tests if a given string contains only letters
     * @param str
     * @returns {boolean}
     */
    static onlyLetters(str) {
        return (/^[a-zA-Z]+$/.test(str));
    }
    /**
     * Returns the given string with first letter in upper case
     * @param str - input string
     * @returns {string}
     */
    static upperFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    /**
     * Returns the given string with first letter in lower case
     * @param str - input string
     * @returns {string}
     */
    static lowerFirst(str) {
        return str.charAt(0).toLowerCase() + str.slice(1);
    }
    /**
     * Detects if the first char of a given string is upper case
     * @param str
     */
    static isFirstUpper(str) {
        if (!ExtStringCase.validStr(str))
            return false;
        return ExtStringCase.isUpperCase(str.charAt(0));
    }
    /**
     * Detects if the first char of a given string is upper case
     * @param str
     */
    static isFirstLower(str) {
        if (!ExtStringCase.validStr(str))
            return false;
        return ExtStringCase.isLowerCase(str.charAt(0));
    }
    /**
     * Determines if the given string is in lower case
     * @param str - the string to test
     * @returns {boolean}
     */
    static isLowerCase(str) {
        return !ExtStringCase.isUpperCase(str);
    }
    /**
     * Determines if the given string is in upper case
     * @param str - the string to test
     * @returns {boolean}
     */
    static isUpperCase(str) {
        return (str.toUpperCase() == str);
    }
    /**
     * Helper method for the Pascal/Camel Casing identification
     * @param str
     */
    static haveUpperCaseChar(str) {
        let char = "";
        let result = false;
        for (let i = 0; i < str.length; i++) {
            char = str[i];
            if (ExtStringCase.isUpperCase(char)) {
                result = true;
                break;
            }
        }
        return result;
    }
    /**
     * Semi-smart method to convert snake to pascal
     * and the other way around
     * @param data
     * @param toLowerPascal
     */
    static invertCasing(data, toLowerPascal = false) {
        if (data.indexOf("_") > -1 || data.indexOf("-") > -1) {
            return ExtStringCase.snakeToPascalCase(data, toLowerPascal);
        }
        else {
            return ExtStringCase.pascalToSnakeCase(data);
        }
    }
    /**
     *
     * @param data
     * @param fillChar - replace char for
     * @returns {string}
     */
    static unifyString(data, fillChar = "_", stripNoneLetters = false) {
        let prevChar = "";
        let currChar = "";
        let aheadChar = "";
        let chunk = "";
        for (let i = 0; i < data.length; i++) {
            let isFirstChar = (i == 0);
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
    }
    /**
     * Base method for converting
     * @param data
     * @param dashCase
     * @returns {string}
     */
    static convertFromPascalCasing(data, dashCase = false) {
        if (data.length < 3) {
            return data.toLowerCase();
        }
        let currChar = "";
        let aheadChar = "";
        let chunk = "";
        for (let i = 0; i < data.length; i++) {
            currChar = data[i];
            aheadChar = data[i + 1];
            if (i > 0 && ExtStringCase.isUpperCase(currChar)) {
                chunk += dashCase ? "-" : "_";
            }
            chunk += currChar;
        }
        return chunk.toLowerCase();
    }
    /********** SNAKE ************************/
    /**
     * Converts Snake to Pascal case
     * @param data - string to convert
     * @returns - converted string
     */
    static snakeToPascalCase(data, lowerPascal = false) {
        let currChar = "";
        let aheadChar = "";
        let chunk = "";
        for (let i = 0; i < data.length; i++) {
            let isFirstChar = (i == 0);
            currChar = data[i];
            aheadChar = data[i + 1];
            if (isFirstChar) {
                chunk += lowerPascal ? currChar.toLowerCase() : currChar.toUpperCase();
                continue;
            }
            // Patrik: 2017-11-24 - added support for dash input
            if (currChar == "_" || currChar == "-") {
                chunk += ExtStringCase.validStr(aheadChar) ? aheadChar.toUpperCase() : "";
                i++;
                continue;
            }
            chunk += currChar;
        }
        return chunk;
    }
    /**
     * Converts Snake to Camel case
     * @param data - string to convert
     * @returns - converted string
     */
    static snakeToCamelCase(data) {
        return ExtStringCase.snakeToPascalCase(data, true);
    }
    /**
     * Converts Snake to Dash case
     * @param data - string to convert
     * @returns - converted string
     */
    static snakeToDashCase(data) {
        return ExtStringCase.unifyString(data, "-");
    }
    /********** DASH ************************/
    /**
     * Converts Dash to Pascal case
     * @param data - string to convert
     * @returns - converted string
     */
    static dashToPascalCase(data) {
        return ExtStringCase.invertCasing(data);
    }
    /**
     * Converts Dash to Camel case
     * @param data - string to convert
     * @returns - converted string
     */
    static dashToCamelCase(data) {
        return ExtStringCase.invertCasing(data, true);
    }
    /**
     * Converts Dash to Snake case
     * @param data - string to convert
     * @returns - converted string
     */
    static dashToSnakeCase(data) {
        return ExtStringCase.unifyString(data, "_");
    }
    /********** PASCAL **********************/
    /**
     * Converts Pascal to Snake case
     * @param data - string to convert
     * @returns - converted string
     */
    static pascalToSnakeCase(data) {
        return ExtStringCase.convertFromPascalCasing(data);
    }
    /**
     * Converts Pascal to Dash case
     * @param data - string to convert
     * @returns - converted string
     */
    static pascalToDashCase(data) {
        return ExtStringCase.convertFromPascalCasing(data, true);
    }
    /**
     * Converts Pascal to Camel case
     * @param data - string to convert
     * @returns - converted string
     */
    static pascalToCamelCase(data) {
        return ExtStringCase.lowerFirst(data);
    }
    /********** Camel **********************/
    /**
     * Converts Camel to Pascal case
     * @param data - string to convert
     * @returns - converted string
     */
    static camelToPascalCase(data) {
        return ExtStringCase.upperFirst(data);
    }
    /**
     * Converts Camel to Snake case
     * @param data - string to convert
     * @returns - converted string
     */
    static camelToSnakeCase(data) {
        return ExtStringCase.convertFromPascalCasing(data);
    }
    /**
     * Converts Camel to Dash case
     * @param data - string to convert
     * @returns - converted string
     */
    static camelToDashCase(data) {
        return ExtStringCase.convertFromPascalCasing(data);
    }
    /**
     *
     * @param - string to convert
     * @returns - converted string
     */
    static toSnakeCase(data) {
        data = ExtStringCase.unifyString(data, "_");
        return data.toLowerCase();
    }
    static toDashCase(data) {
        data = ExtStringCase.unifyString(data, "-");
        return data.toLowerCase();
    }
    static toPascalCase(data, lowerFirst = false) {
        if (!ExtStringCase.onlyLetters(data)) {
            data = ExtStringCase.unifyString(data);
        }
        if (!ExtStringCase.onlyLetters(data)) {
            data = ExtStringCase.unifyString(data);
            data = ExtStringCase.snakeToPascalCase(data, lowerFirst);
        }
        else {
            data = lowerFirst ? ExtStringCase.lowerFirst(data) : ExtStringCase.upperFirst(data);
        }
        return data;
    }
    static toCamelCase(data) {
        return ExtStringCase.toPascalCase(data, true);
    }
    static test() {
        let snakeCase = "player_base_data_here_we_come";
        ExtStringCase.testLogBool("Is Letter 'A':", ExtStringCase.isLetter("A"));
        ExtStringCase.testLogBool("Is Letter '?':", ExtStringCase.isLetter("?"));
        ExtStringCase.testLogBool("Is UpperCase 'A':", ExtStringCase.isUpperCase("A"));
        ExtStringCase.testLogBool("Is UpperCase 'a':", ExtStringCase.isUpperCase("a"));
        ExtStringCase.testLogBool("Is LowerCase 'y':", ExtStringCase.isLowerCase("y"));
        ExtStringCase.testLogBool("Is LowerCase 'Y':", ExtStringCase.isLowerCase("Y"));
        let tmp = snakeCase;
        console.log("------------");
        ExtStringCase.testLog("Snake:", snakeCase);
        let pascalCase = ExtStringCase.snakeToPascalCase(snakeCase);
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
        ExtStringCase.testExperimental("OneStringToRuleThemAll");
    }
    static testExperimental(data) {
        console.log("toSnakeCase ::", ExtStringCase.toSnakeCase(data));
        console.log("toDashCase ::", ExtStringCase.toDashCase(data));
        console.log("toPascalCase ::", ExtStringCase.toPascalCase(data));
        console.log("toCameCase ::", ExtStringCase.toCamelCase(data));
    }
}
exports.ExtStringCase = ExtStringCase;
// ExtStringCase.testExperimental("OneStringToRuleThemAll"); 
