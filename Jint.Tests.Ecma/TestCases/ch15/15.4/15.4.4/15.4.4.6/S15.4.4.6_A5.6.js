// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * The pop property of Array has not prototype property
 *
 * @path ch15/15.4/15.4.4/15.4.4.6/S15.4.4.6_A5.6.js
 * @description Checking Array.prototype.pop.prototype
 */

//CHECK#1
if (Array.prototype.pop.prototype !== undefined) {
  $ERROR('#1: Array.prototype.pop.prototype === undefined. Actual: ' + (Array.prototype.pop.prototype));
}

