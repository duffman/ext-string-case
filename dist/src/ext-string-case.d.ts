export declare class ExtStringCase {
    static testLog(desc: string, value: string): void;
    static testLogBool(desc: string, value: boolean): void;
    /**
     * Check wheter a string is assigned and has a length
     * @param str
     * @returns {boolean}
     */
    static validStr(str: any): boolean;
    /**
     * Determines if the given char is an ASCII Char
     * @param char - char to test
     * @returns {boolean}
     */
    static isLetter(char: string): boolean;
    /**
     * Tests if a given string contains only letters
     * @param str
     * @returns {boolean}
     */
    static onlyLetters(str: string): boolean;
    /**
     * Returns the given string with first letter in upper case
     * @param str - input string
     * @returns {string}
     */
    static upperFirst(str: string): string;
    /**
     * Returns the given string with first letter in lower case
     * @param str - input string
     * @returns {string}
     */
    static lowerFirst(str: string): string;
    /**
     * Detects if the first char of a given string is upper case
     * @param str
     */
    static isFirstUpper(str: string): boolean;
    /**
     * Detects if the first char of a given string is upper case
     * @param str
     */
    static isFirstLower(str: string): boolean;
    /**
     * Determines if the given string is in lower case
     * @param str - the string to test
     * @returns {boolean}
     */
    static isLowerCase(str: string): boolean;
    /**
     * Determines if the given string is in upper case
     * @param str - the string to test
     * @returns {boolean}
     */
    static isUpperCase(str: string): boolean;
    /**
     * Helper method for the Pascal/Camel Casing identification
     * @param str
     */
    static haveUpperCaseChar(str: string): boolean;
    /**
     * Semi-smart method to convert snake to pascal
     * and the other way around
     * @param data
     * @param toLowerPascal
     */
    static invertCasing(data: string, toLowerPascal?: boolean): string;
    /**
     *
     * @param data
     * @param fillChar - replace char for
     * @returns {string}
     */
    static unifyString(data: string, fillChar?: string, stripNoneLetters?: boolean): string;
    /**
     * Base method for converting
     * @param data
     * @param dashCase
     * @returns {string}
     */
    static convertFromPascalCasing(data: string, dashCase?: boolean): string;
    /********** SNAKE ************************/
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
    /********** DASH ************************/
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
    /********** PASCAL **********************/
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
    /********** Camel **********************/
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
