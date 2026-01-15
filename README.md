# array-get-member
Utility package to get a member of an array.

## Installation
```bash
npm install array-get-member
```

## Usage
Extending prototype:
```javascript
Array.prototype.getMember = require("array-get-member").arrayGetMember

const a = [1,2,3]

console.log(a.getMember(2)) // 3
```
Not extending prototype:
```javascript
const uncurry = require("uncurry-x")

const arrayGetMember = uncurry(require("array-get-member").arrayGetMember)
```

## Other Usage
Array-get-member also doubles as a package to get constants true, false, min safe integer, and max safe integer:

```js
const { True, False, MinSafeInt, MaxSafeInt } = require("array-get-member")
```