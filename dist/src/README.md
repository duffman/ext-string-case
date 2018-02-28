# ExtStringCase
#### String Casing Helper
**Beta version**
***

String Casing Utility for converting strings to and from different casing styles,
this NPM Package came to be since I found myself using 4 half baked packages
in order to achieve these conversions.
 
###### Following casing styles are supported,
* Pascal
* Camel
* Snake
* Dash

there are also a bunch convenience/helper methods for dealing with strings.

### Examples

##### Pascal case

```typescript

ExtStringCase.snakeToPascalCase("welcome_to_the_jungle");
// Result: WelcomeToTheJungle

ExtStringCase.snakeToCamelCase("welcome_to_the_jungle");
// Result: welcomeToTheJungle

ExtStringCase.snakeToDashCase("welcome_to_the_jungle");
// Result: welcome-to-the-jungle
```

##### Dash case

```typescript

ExtStringCase.dashToPascalCase("sweet-child-of-mine");
// Result: SweetChildOfMine

ExtStringCase.dashToCamelCase("sweet-child-of-mine");
// Result: sweetChildOfMine

ExtStringCase.dashToSnakeCase("sweet-child-of-mine");
// Result: sweet_child_of_mine
```

##### Pascal case

```typescript
ExtStringCase.pascalToSnakeCase("UseYourIllusion");
// Result: use_your_illusion

ExtStringCase.pascalToDashCase("UseYourIllusion");
// Result: use-your-illusion

ExtStringCase.pascalToCamelCase("UseYourIllusion");
// Result: useYourIllusion

```
##### Camel case
```typescript
ExtStringCase.camelToPascalCase("youCouldBeMine");
// Result: UseYourIllusion

ExtStringCase.camelToSnakeCase("youCouldBeMine");
// Result: useYourIllusion

ExtStringCase.camelToDashCase("youCouldBeMine");
// Result: use-your-illusion
```

##### Helper Methods
In order to perform these conversions a few helper methods was
born as well and can be used independently of the conversion methods.

	/**
	 * Check wheter a string is assigned and has a length
	 * @param str
	 * @returns {boolean}
	 */
	public static validStr(str: any): boolean;

	/**
	 * Determines if the given char is a letter
	 * @param char - char to test
	 * @returns
	 */
	public static isLetter(char: string): boolean;

	/**
	 * Determines if a given string contains only letters
	 * @param str - string to
	 * @returns - wether a string is only letterrs
	 */
	public static onlyLetters(str: string): boolean;

	/**
	 * Returns the given string with first letter in upper case
	 * @param str - input string
	 * @returns - the resulting string
	 */
	public static upperFirst(str: string);

	/**
	 * Returns the given string with first letter in lower case
	 * @param str - input string
	 * @returns - resulting string
	 */
	public static lowerFirst(str: string);

	/**
	 * Detects if the first char of a given string is upper case
	 * @param str
	 */
	public static isFirstUpper(str: string): boolean;

	/**
	 * Detects if the first char of a given string is upper case
	 * @param str - input string
	 * @returns {boolean}
	 */
	public static isFirstLower(str: string): boolean;

	/**
	 * Determines if the given string is in lower case
	 * @param str - the string to test
	 * @returns - {boolean}
	 */
	public static isLowerCase(str: string): boolean;

	/**
	 * Determines if the given string is in upper case
	 * @param str - the string to test
	 * @returns {boolean}
	 */
	public static isUpperCase(str: string): boolean;

	/**
	 * Checks whether a string contains an upper case
	 * @param str
	 * @returns {boolean}
	 */
	public static haveUpperCaseChar(str: string): boolean;

	/**
	 * Semi-smart method to convert to and from Snake/Cane and Pascal casing
	 * and the other way around
	 * @param data - input string
	 * @param toLowerPascal - if set the result will be camel case
	 */
	public static invertCasing(data: string, toLowerPascal: boolean = false);

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
	public static unifyString(data: string, fillChar: string = "_", stripNoneLetters: boolean = false): string;

	/**
	 * Base method for converting from pascal to snake/dash case
	 * @param data - input
	 * @param dashCase - if set output will be dash case 
	 * @returns - resulting string
	 */
	public static convertFromPascalCasing(data: string, dashCase: boolean = false): string;


###### Following methods are shaky
These are still in an early **Beta** stage, these methods will detect the
input format and perform the conversion accordingly.
 
```typescript
toDashCase
toPascalCase
toCamelCase
```

####Unit Testing
Unit tests is available for the most of the methods :)




