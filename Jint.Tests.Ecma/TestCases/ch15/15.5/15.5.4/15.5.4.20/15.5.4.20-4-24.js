/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.5/15.5.4/15.5.4.20/15.5.4.20-4-24.js
 * @description String.prototype.trim handles whitepace and lineterminators (\u00A0abc\u00A0)
 */


function testcase() {
  if ("\u00A0abc\u00A0".trim() === "abc") {
    return true;
  }
 }
runTestCase(testcase);
