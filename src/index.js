import './style.css';

// FYI .container is already present in the index.html file...

import Collection from './extending_collections';
import tobyDictionary from './toby_dictionary';

tobyDictionary.subscribe('add', Collection.logInUpperCase());

// goal --- to log tobyDictionary to console with the logInUpperCase() method applied to it.

// where i'm stuck -- I am not getting how to access the logInUpperCase() function. It makes sense to me that we'd want it to be a method on the factory function.  Do I nee

// console error -
/* 11:16:15.872 bootstrap:27 Uncaught TypeError: _extending_collections__WEBPACK_IMPORTED_MODULE_1__.default.logInUpperCase is not a function */
