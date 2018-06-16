# enquireBreakPoints

> Utility to add classes to body based on viewport. Built on top of Enquire.js

Adds a class to document body at user defined breakpoints. Also provides a helper object with boolean values for all user defined breakpoints.

## Browser Compatibility

- IE9+
- Edge *
- Firefox 29+
- Safari 8+
- Chrome 33+
- Opera 23+

## Install

```shell
npm install --save enquirebreakpoints
```


## Usage

```js
import { enquireBreakPoints, watchBreakpoint } from 'enquireBreakPoints';

[480, 599, 767, 991, 1199].forEach(watchBreakpoint);
console.log(enquireBreakPoints);
// Output
// {is_480: true, is_599: true, is_767: true, is_991: true, is_1199: true}
```


## License
MIT