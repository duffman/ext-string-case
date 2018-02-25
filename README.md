# ExtStringCase
#### String Casing Helper
***

String Helper for converting strings to and from **Pascal**, **Camel**, **Snake** and **Dash**  casing,
there are also a bunch convenience/helper methods for dealing with strings.

##### Be aware of
The folowing methods:

```typescript
toDashCase
toPascalCase
toCamelCase
```
These methods are convenience methods that came to be because of
my specific needs at the time, they make a lazy attempt of converting the
input string to a format it can handle in opposite to the  **snakeToPascalCase**
for example which requires the input to be a valid snake cased string.

These methods are to be considered as **EXPERIMENTAL**

##### Example
```typescript
 
 let input = "OneStringToRuleThemAll";
 import { IgniterApplication } from "../../../Application/IgniterApplication";
 import { CrcCalculator }      from "../../../../../../../Utilities/FileUtilities";
 import { IMessageHandler }    from "../../../../Messaging/IMessageHandler";
 import { IMessageHub }        from "../../../../Messaging/Hub/IMessageHub";
 import { CronTabHelper }      from "../../../../../../../Utilities/CronTabHelper";
 import { GLog }               from "../../../Application/GLog";

```

# ext-string-case
