export declare class ExtStringCase {
    static testLog(desc: string, value: string): void;
    static testLogBool(desc: string, value: boolean): void;
    /**
     * Check whether a string is assigned and has a length
     * @param str
     * @returns {boolean}
     */
    static validStr(str: any): boolean;
    /**
     * Determines if the given char is a letter
     * @param char - char to test
     * @returns
     */
    static isLetter(char: string): boolean;
    /**
     * Determines if a given string contains only letters
     * @param str - string to
     * @returns - wether a string is only letterrs
     */
    static onlyLetters(str: string): boolean;
    /**
     * Returns the given string with first letter in upper case
     * @param str - input string
     * @returns - the resulting string
     */
    static upperFirst(str: string): string;
    /**
     * Returns the given string with first letter in lower case
     * @param str - input string
     * @returns - resulting string
     */
    static lowerFirst(str: string): string;
    /**
     * Detects if the first char of a given string is upper case
     * @param str
     */
    static isFirstUpper(str: string): boolean;
    /**
     * Detects if the first char of a given string is upper case
     * @param str - input string
     * @returns {boolean}
     */
    static isFirstLower(str: string): boolean;
    /**
     * Determines if the given string is in lower case
     * @param str - the string to test
     * @returns - {boolean}
     */
    static isLowerCase(str: string): boolean;
    /**
     * Determines if the given string is in upper case
     * @param str - the string to test
     * @returns {boolean}
     */
    static isUpperCase(str: string): boolean;
    /**
     * Checks whether a string contains an upper case
     * @param str
     * @returns {boolean}
     */
    static haveUpperCaseChar(str: string): boolean;
    /**
     * Semi-smart method to convert to and from Snake/Cane and Pascal casing
     * and the other way around
     * @param data - input string
     * @param toLowerPascal - if set the result will be camel case
     */
    static invertCasing(data: string, toLowerPascal?: boolean): string;
    /**
     * Processes a given string and replaces char which is not a valid letter with
     * a given replacement char, only one fill char after an other will be included
     *
     *   Example with "-" as fill char:
     *   Input: "#You___Could___  --> Be <-- Mine!!"
     *   Output: "You-Could-Be-Mine
     *
     * @param data - input string
     * @param fillChar -
     * @returns - resulting string
     */
    static unifyString(data: string, fillChar?: string, stripNoneLetters?: boolean): string;
    /**
     * Base method for converting from pascal to snake/dash case
     * @param data - input
     * @param dashCase - if set output will be dash case
     * @returns - resulting string
     */
    static convertFromPascalCasing(data: string, dashCase?: boolean): string;
    /**
     * Converts Snake to Pascal case
     * @param data - string to convert
     * @returns - converted string
     */
    static snakeToPascalCase(data: string, lowerPascal?: boolean): string;
    /**
     * Converts Snake to Camel case
     * @param data - string to convert
     * @returns - converted string
     */
    static snakeToCamelCase(data: string): string;
    /**
     * Converts Snake to Dash case
     * @param data - string to convert
     * @returns - converted string
     */
    static snakeToDashCase(data: string): string;
    /**
     * Converts Dash to Pascal case
     * @param data - string to convert
     * @returns - converted string
     */
    static dashToPascalCase(data: string): string;
    /**
     * Converts Dash to Camel case
     * @param data - string to convert
     * @returns - converted string
     */
    static dashToCamelCase(data: string): string;
    /**
     * Converts Dash to Snake case
     * @param data - string to convert
     * @returns - converted string
     */
    static dashToSnakeCase(data: string): string;
    /**
     * Converts Pascal to Snake case
     * @param data - string to convert
     * @returns - converted string
     */
    static pascalToSnakeCase(data: string): string;
    /**
     * Converts Pascal to Dash case
     * @param data - string to convert
     * @returns - converted string
     */
    static pascalToDashCase(data: string): string;
    /**
     * Converts Pascal to Camel case
     * @param data - string to convert
     * @returns - converted string
     */
    static pascalToCamelCase(data: string): string;
    /**
     * Converts Camel to Pascal case
     * @param data - string to convert
     * @returns - converted string
     */
    static camelToPascalCase(data: string): string;
    /**
     * Converts Camel to Snake case
     * @param data - string to convert
     * @returns - converted string
     */
    static camelToSnakeCase(data: string): string;
    /**
     * Converts Camel to Dash case
     * @param data - string to convert
     * @returns - converted string
     */
    static camelToDashCase(data: string): string;
    /**
     *
     * @param - string to convert
     * @returns - converted string
     */
    static toSnakeCase(data: string): string;
    static toDashCase(data: string): string;
    static toPascalCase(data: string, lowerFirst?: boolean): string;
    static toCamelCase(data: string): string;
    static test(): void;
    static testExperimental(data: string): void;
}
