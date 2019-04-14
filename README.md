# SYNOPSIS

🛀🏼 Sanitize and validate inputs.

## USAGE

```sh
npm i -S joemccann/sanitizer
```

Then in your Node.js app:

```js
const { isEmail } = require('sanitizer')

const myEmail = `foo@bar.com`

if( isEmail(myEmail) ) console.log("😃")
else console.log("😡")
```

## TESTS

```sh
npm i -D
npm test
```

## AUTHORS

- [Joe McCann](https://twitter.com/joemccann)

## LICENSE

MIT