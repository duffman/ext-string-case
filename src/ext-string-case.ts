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

let log = console.log;

enum StringCasing {
	None,
	Snake,
	Dash,
	Pascal,
	Camel,
	Word,
}

export class ExtStringCase {

	static testLog(desc: string, value: string) {
		log(desc, value);
	}

	static testLogBool(desc: string, value: boolean) {
		let valueStr = value ? "true" : "false";
		log(desc, valueStr);
	}

	/**
	 * Check wheter a string is assigned and has a length
	 * @param str
	 * @returns {boolean}
	 */
	public static validStr(str: any): boolean {
		return !((str === undefined) || (!str || 0 === str.length));
	}

	/**
	 * Determines if the given char is an ASCII Char
	 * @param char - char to test
	 * @returns {boolean}
	 */
	public static isLetter(char: string): boolean {
		let firstChar = char.charAt(0).toUpperCase();
		return !(firstChar.toLowerCase() == firstChar);
	}

	/**
	 * Tests if a given string contains only letters
	 * @param str
	 * @returns {boolean}
	 */
	public static onlyLetters(str: string): boolean {
		return (/^[a-zA-Z]+$/.test(str));
	}

	/**
	 * Returns the given string with first letter in upper case
	 * @param str - input string
	 * @returns {string}
	 */
	public static upperFirst(str: string) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	/**
	 * Returns the given string with first letter in lower case
	 * @param str - input string
	 * @returns {string}
	 */
	public static lowerFirst(str: string) {
		return str.charAt(0).toLowerCase() + str.slice(1);
	}

	/**
	 * Detects if the first char of a given string is upper case
	 * @param str
	 */
	public static isFirstUpper(str: string): boolean {
		if (!ExtStringCase.validStr(str)) return false;
		return ExtStringCase.isUpperCase(str.charAt(0));
	}

	/**
	 * Detects if the first char of a given string is upper case
	 * @param str
	 */
	public static isFirstLower(str: string): boolean {
		if (!ExtStringCase.validStr(str)) return false;
		return ExtStringCase.isLowerCase(str.charAt(0));
	}

	/**
	 * Determines if the given string is in lower case
	 * @param str - the string to test
	 * @returns {boolean}
	 */
	public static isLowerCase(str: string): boolean {
		return !ExtStringCase.isUpperCase(str);
	}

	/**
	 * Determines if the given string is in upper case
	 * @param str - the string to test
	 * @returns {boolean}
	 */
	public static isUpperCase(str: string): boolean {
		return (str.toUpperCase() == str);
	}

	/**
	 * Helper method for the Pascal/Camel Casing identification
	 * @param str
	 */
	public static haveUpperCaseChar(str: string): boolean {
		let char: string = "";
		let result: boolean = false;

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
	public static invertCasing(data: string, toLowerPascal: boolean = false) {
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
	public static unifyString(data: string, fillChar: string = "_", stripNoneLetters: boolean = false): string {
		let prevChar: string = "";
		let currChar: string = "";
		let aheadChar: string = "";

		let chunk = "";

		for (let i = 0; i < data.length; i++) {
			let isFirstChar = (i == 0);
			prevChar = currChar;
			currChar = data[i];
			aheadChar = data[i + 1];

			if (!ExtStringCase.onlyLetters(currChar)) {
				currChar = fillChar;
				if (stripNoneLetters) continue;
			}

			if (prevChar == fillChar && currChar == fillChar) continue;

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
	public static convertFromPascalCasing(data: string, dashCase: boolean = false): string {
		if (data.length < 3) { return data.toLowerCase(); }
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
	public static snakeToPascalCase(data: string, lowerPascal: boolean = false): string {
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
	public static snakeToCamelCase(data: string): string {
		return ExtStringCase.snakeToPascalCase(data, true);
	}

	/**
	 * Converts Snake to Dash case
	 * @param data - string to convert
	 * @returns - converted string
	 */
	public static snakeToDashCase(data: string): string {
		return ExtStringCase.unifyString(data, "-");
	}

	/********** DASH ************************/

	/**
	 * Converts Dash to Pascal case
	 * @param data - string to convert
	 * @returns - converted string
	 */
	public static dashToPascalCase(data: string): string {
		return ExtStringCase.invertCasing(data);
	}

	/**
	 * Converts Dash to Camel case
	 * @param data - string to convert
	 * @returns - converted string
	 */
	public static dashToCamelCase(data: string): string {
		return ExtStringCase.invertCasing(data, true);
	}

	/**
	 * Converts Dash to Snake case
	 * @param data - string to convert
	 * @returns - converted string
	 */
	public static dashToSnakeCase(data: string): string {
		return ExtStringCase.unifyString(data, "_");
	}

	/********** PASCAL **********************/

	/**
	 * Converts Pascal to Snake case
	 * @param data - string to convert
	 * @returns - converted string
	 */
	public static pascalToSnakeCase(data: string): string {
		return ExtStringCase.convertFromPascalCasing(data);
	}

	/**
	 * Converts Pascal to Dash case
	 * @param data - string to convert
	 * @returns - converted string
	 */
	public static pascalToDashCase(data: string): string {
		return ExtStringCase.convertFromPascalCasing(data, true);
	}

	/**
	 * Converts Pascal to Camel case
	 * @param data - string to convert
	 * @returns - converted string
	 */
	public static pascalToCamelCase(data: string): string {
		return ExtStringCase.lowerFirst(data);
	}

	/********** Camel **********************/

	/**
	 * Converts Camel to Pascal case
	 * @param data - string to convert
	 * @returns - converted string
	 */
	public static camelToPascalCase(data: string): string {
		return ExtStringCase.upperFirst(data);
	}

	/**
	 * Converts Camel to Snake case
	 * @param data - string to convert
	 * @returns - converted string
	 */
	public static camelToSnakeCase(data: string): string {
		return ExtStringCase.convertFromPascalCasing(data);
	}

	/**
	 * Converts Camel to Dash case
	 * @param data - string to convert
	 * @returns - converted string
	 */
	public static camelToDashCase(data: string): string {
		return ExtStringCase.convertFromPascalCasing(data);
	}

	/**
	 *
	 * @param - string to convert
	 * @returns - converted string
	 */
	public static toSnakeCase(data: string): string {
		data = ExtStringCase.unifyString(data, "_");
		return data.toLowerCase();
	}

	public static toDashCase(data: string): string {
		data = ExtStringCase.unifyString(data, "-");
		return data.toLowerCase();
	}

	public static toPascalCase(data: string, lowerFirst: boolean = false): string {
		if (!ExtStringCase.onlyLetters(data)) {
			data = ExtStringCase.unifyString(data);
		}

		if (!ExtStringCase.onlyLetters(data)) {
			data = ExtStringCase.unifyString(data);
			data = ExtStringCase.snakeToPascalCase(data, lowerFirst);
		} else {
			data = lowerFirst ? ExtStringCase.lowerFirst(data) : ExtStringCase.upperFirst(data);
		}

		return data;
	}

	public static toCamelCase(data: string): string {
		return ExtStringCase.toPascalCase(data, true);
	}

	public static test(): void {
		let snakeCase = "player_base_data_here_we_come";

		ExtStringCase.testLogBool("Is Letter 'A':", ExtStringCase.isLetter("A"));
		ExtStringCase.testLogBool("Is Letter '?':", ExtStringCase.isLetter("?"));

		ExtStringCase.testLogBool("Is UpperCase 'A':", ExtStringCase.isUpperCase("A"));
		ExtStringCase.testLogBool( "Is UpperCase 'a':", ExtStringCase.isUpperCase("a"));

		ExtStringCase.testLogBool( "Is LowerCase 'y':", ExtStringCase.isLowerCase("y"));
		ExtStringCase.testLogBool( "Is LowerCase 'Y':", ExtStringCase.isLowerCase("Y"));

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

		ExtStringCase.testExperimental("OneStringToRuleThemAll")
	}

	public static testExperimental(data: string): void {
		console.log("toSnakeCase ::", ExtStringCase.toSnakeCase(data));
		console.log("toDashCase ::", ExtStringCase.toDashCase(data));
		console.log("toPascalCase ::", ExtStringCase.toPascalCase(data));
		console.log("toCameCase ::", ExtStringCase.toCamelCase(data));
	}
}

// ExtStringCase.testExperimental("OneStringToRuleThemAll");