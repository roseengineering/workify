
WORKIFY.JS
===============

This is a hack of substack's Webworkify [1] for Browserify.  While Webworkify 
launches a web worker using "w = work(require('./worker.js'))", this hack 
launches a web worker using "w = work('worker')".

This has the advantage of avoiding a "require()" in the main thread.  However
a disadvantage of the library is that "worker.js" must be browserified as a 
module.  That is, "worker.js" must be passed as "-r ./worker.js:worker" to 
Browserify.  Please see the included example for more information.

George Magiros, Copyright 2016.  Released under the terms of the MIT license.
 
[1] https://github.com/substack/webworkify

