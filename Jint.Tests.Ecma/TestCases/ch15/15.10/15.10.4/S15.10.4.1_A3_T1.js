// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * let P be the empty string if pattern is undefined
 *
 * @path ch15/15.10/15.10.4/S15.10.4.1_A3_T1.js
 * @description RegExp is new RegExp
 */

__re = new RegExp;

//CHECK#2
if (__re.multiline !== false) {
  $ERROR('#2: __re = new RegExp; __re.multiline === false. Actual: ' + (__re.multiline));
}

//CHECK#3
if (__re.global !== false) {
  $ERROR('#3: __re = new RegExp; __re.global === false. Actual: ' + (__re.global));
}

//CHECK#4
if (__re.ignoreCase !== false) {
  $ERROR('#4: __re = new RegExp; __re.ignoreCase === false. Actual: ' + (__re.ignoreCase));
}



